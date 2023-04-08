import * as colors from 'ansi-colors'

export const bd = (txt: string) => colors.bold(txt)
export const d = (txt: string) => colors.dim(txt)
export const i = (txt: string) => colors.italic(txt)
export const u = (txt: string) => colors.underline(txt)
export const inv = (txt: string) => colors.inverse(txt)
export const s = (txt: string) => colors.strikethrough(txt)
// Colors
export const r = (txt: string) => colors.red(txt)
export const g = (txt: string) => colors.green(txt)
export const y = (txt: string) => colors.yellow(txt)
export const b = (txt: string) => colors.blue(txt)
export const m = (txt: string) => colors.magenta(txt)
export const c = (txt: string) => colors.cyan(txt)
export const w = (txt: string) => colors.white(txt)
export const bk = (txt: string) => colors.black(txt)
export const gy = (txt: string) => colors.grey(txt)
// Bright colors
export const rBt = (txt: string) => colors.redBright(txt)
export const gBt = (txt: string) => colors.greenBright(txt)
export const yBt = (txt: string) => colors.yellowBright(txt)
export const bBt = (txt: string) => colors.blueBright(txt)
export const mBt = (txt: string) => colors.magentaBright(txt)
export const cBt = (txt: string) => colors.cyanBright(txt)
export const wBt = (txt: string) => colors.whiteBright(txt)
export const bkBt = (txt: string) => colors.blackBright(txt)
// reset
export const reset = (txt: string) => colors.reset(txt)

export const horizontalRule = '------------------------------------------------------------------------------------------------------------------------'
export const doubleRule     = '========================================================================================================================'