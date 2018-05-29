## Introduction
This is a json structure compare tool,you can input two json data and run node script to get a comparative report via Beyond Compare.

## Start

- Create your project

- `npm install json-structure-compare --save-dev`

- Create file `test.ts` and write your code like this

        import { Compare } from 'json-structure-compare'
		let obj = new Compare({
			dataA:{"a":"test"},
			dataB:{"b":"test"}
		});
		obj.run();

- Run script `ts-node test.ts`

- So,you will get your comparative result,see your console's log.

## Config Options

    /**
	 * The default config.
	 */
	interface IDefaultConfig {
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

The default value is:

    let defaultConfig: IDefaultConfig = {
	    beyondComparePath: "C:\\Program Files\\Beyond Compare 4\\BComp.exe",
	    outputPath: path.resolve("./dist/"),
	    dataA: data.a,
	    dataB: data.b
	}


## Theory

- Convert json object to path string array with keys,like `["A.B","A.B.C","A.B.C.D",...]`

- Compare the lines use Beyond Compare tool.

- Notice:If one key is `Array` ,then compare the first item only.

## Result Preview

![](https://raw.githubusercontent.com/xucongli1989/json-structure-compare/master/img.jpg)

