// declare module '*.scss' {
//     const content: Record<string, string>;
//     export default content;
// }


declare module '*.module.scss' {
    interface IClassNames {
        [className: string]: string
    }
    const classNames: IClassNames;
    export = classNames;
}