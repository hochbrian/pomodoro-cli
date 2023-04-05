import progress from 'cli-progress';
import * as colors from 'ansi-colors';
import { timers } from './timersTypes';

const bd = (txt) => colors.bold(txt);
const d = (txt) => colors.dim(txt);
const i = (txt) => colors.italic(txt);
const u = (txt) => colors.underline(txt);
const inv = (txt) => colors.inverse(txt);
const s = (txt) => colors.strikethrough(txt);
const r = (txt) => colors.red(txt);
const g = (txt) => colors.green(txt);
const y = (txt) => colors.yellow(txt);
const b = (txt) => colors.blue(txt);
const m = (txt) => colors.magenta(txt);
const c = (txt) => colors.cyan(txt);
const w = (txt) => colors.white(txt);
const gy = (txt) => colors.grey(txt);

console.log(bd(c('Hello')))

console.log(JSON.stringify(timers.test, null, 2));