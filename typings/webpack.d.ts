declare namespace NodeJS {
  interface Module {
    context: (directory: string, recursive?: boolean, regExp?: RegExp) => any
  }
}
declare const require: NodeJS.Module;