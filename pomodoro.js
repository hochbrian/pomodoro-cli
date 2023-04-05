const progress = require('cli-progress');
const colors = require('ansi-colors');

const bd = (txt) => colors.bold(txt);
const d = (txt) => colors.dim(txt);
const i = (txt) => colors.italic(txt);
const u = (txt) => colors.underline(txt);
const inv = (txt) => colors.inverse(txt);

console.log(u(colors.green('Hello')));