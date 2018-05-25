import * as fs from 'fs'
import * as path from 'path'
import * as cmd from 'node-cmd'
import config from './config'
import * as data from './data'

let process = (o) => {
    let result = [];
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


let res = process(data.a);
fs.writeFileSync("./dist/a.txt", res.join("\r\n"));

res = process(data.b);
fs.writeFileSync("./dist/b.txt", res.join("\r\n"));

fs.writeFileSync("./dist/compare.txt", `file-report layout:side-by-side options:display-all,line-numbers output-to:"./dist/report.htm" output-options:wrap-word,html-color ${path.resolve('./dist/a.txt')} ${path.resolve('./dist/b.txt')}`);

let cmdStr = `"${config.BCompPath}" @${path.resolve('./dist/compare.txt')}`;
console.log(cmdStr);
cmd.run(cmdStr);
console.log("Compare End!");