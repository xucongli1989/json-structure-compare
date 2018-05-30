(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "fs", "path", "./data"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const fs = require("fs");
    const path = require("path");
    const data = require("./data");
    let cmd = require('node-cmd');
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
                let x = pre.replace(/\.+$/gi, "") + (pre ? "." : "") + k;
                result.push(x);
                fun(obj[k], x);
            }
        };
        fun(o, "");
        return result.sort();
    };
    exports.defaultConfig = {
        beyondComparePath: "C:\\Program Files\\Beyond Compare 4\\BComp.exe",
        outputPath: path.resolve("./dist/"),
        dataA: data.a,
        dataB: data.b
    };
    class Compare {
        constructor(config) {
            this.cfg = Object.assign({}, exports.defaultConfig, config);
        }
        run() {
            if (!fs.existsSync(this.cfg.beyondComparePath)) {
                console.error("BeyondComparePath is not exist:" + this.cfg.beyondComparePath);
                return;
            }
            if (!fs.existsSync(this.cfg.outputPath)) {
                console.error("OutputPath is not exist:" + this.cfg.outputPath);
                return;
            }
            let pathA = path.join(this.cfg.outputPath, "a.txt");
            let pathB = path.join(this.cfg.outputPath, "b.txt");
            let pathCompare = path.join(this.cfg.outputPath, "compare.txt");
            let pathReport = path.join(this.cfg.outputPath, "report.html");
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
    exports.Compare = Compare;
});
//# sourceMappingURL=index.js.map