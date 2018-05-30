import * as fs from 'fs'
import * as path from 'path'
import * as data from './data'
let cmd = require('node-cmd');

let process = (o) => {
    let result: string[] = [];
    let fun = (obj, pre) => {
        let isObj = typeof (obj) == 'object';
        let isArray = Array.isArray(obj);
        if (!isObj && !isArray) {
            return;
        }
        if (isArray && obj.length >= 2) {
            obj = [obj[0]];
        }
        for (let k in obj) {
            let x = pre.replace(/\.+$/gi, "") + (pre ? "." : "") + k
            result.push(x);
            fun(obj[k], x);
        }
    }
    fun(o, "");
    return result.sort();
}

export interface IAnyPropObject {
    [name: string]: any
}

/**
 * The default config.
 */
export interface IDefaultConfig {
    /**
     * Beyond Compare soft path.
     */
    beyondComparePath: string
    /**
     * Your work space for output 
     */
    outputPath: string
    /**
     * Json A to compare.
     */
    dataA: IAnyPropObject
    /**
     * Json B to compare.
     */
    dataB: IAnyPropObject
}

export let defaultConfig: IDefaultConfig = {
    beyondComparePath: "C:\\Program Files\\Beyond Compare 4\\BComp.exe",
    outputPath: path.resolve("./dist/"),
    dataA: data.a,
    dataB: data.b
}

export class Compare {
    private cfg: IDefaultConfig
    constructor(config?: IDefaultConfig | IAnyPropObject) {
        this.cfg = { ...defaultConfig, ...config }
    }
    run(): void {
        if (!fs.existsSync(this.cfg.beyondComparePath)) {
            console.error("BeyondComparePath is not exist:" + this.cfg.beyondComparePath);
            return;
        }
        if (!fs.existsSync(this.cfg.outputPath)) {
            console.error("OutputPath is not exist:" + this.cfg.outputPath);
            return;
        }

        let pathA = path.join(this.cfg.outputPath, "a.txt")
        let pathB = path.join(this.cfg.outputPath, "b.txt")
        let pathCompare = path.join(this.cfg.outputPath, "compare.txt")
        let pathReport = path.join(this.cfg.outputPath, "report.html")

        let res = process(this.cfg.dataA);
        fs.writeFileSync(pathA, res.join("\r\n"));

        res = process(this.cfg.dataB);
        fs.writeFileSync(pathB, res.join("\r\n"));

        fs.writeFileSync(pathCompare, `file-report layout:side-by-side options:display-all,line-numbers output-to:"${pathReport}" output-options:wrap-word,html-color ${pathA} ${pathB}`);

        let cmdStr = `"${this.cfg.beyondComparePath}" @${pathCompare}`;
        console.log(`Will to compare,command is: ${cmdStr}`);
        cmd.run(cmdStr);
        console.log(`Compare completed,you can see the html report from ${pathReport} !`);
    }
}