export interface IAnyPropObject {
    [name: string]: any;
}
/**
 * The default config.
 */
export interface IDefaultConfig {
    /**
     * Beyond Compare soft path.
     */
    beyondComparePath: string;
    /**
     * Your work space for output
     */
    outputPath: string;
    /**
     * Json A to compare.
     */
    dataA: IAnyPropObject;
    /**
     * Json B to compare.
     */
    dataB: IAnyPropObject;
}
export declare let defaultConfig: IDefaultConfig;
export declare class Compare {
    private cfg;
    constructor(config?: IDefaultConfig | IAnyPropObject);
    run(): void;
}
