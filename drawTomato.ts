/*
    Tomato ascii art source: https://textart.sh/topic/tomato
*/

import { g, gy, rBt, r } from './format'
const width: number = 98

export const padFront = (spaces: number, start: number = 0) => {
    let padding: string = ''
    let i: number = 0
    while (i <= (spaces)) {
        padding = padding + ' '
        i++
    }
    return padding
}

const tomatoWidth: number = 30
const tomato: string[] = [
      `${g('                 ░░                               ')}`,
      `${g('               ░░                                 ')}`,
      `${g('       ░░      ░░    ░░                           ')}`,
      `${g('         ░░')}${rBt('██')}${g('░░')}${rBt('██')}${g('░░░░                             ')}`,
    `${rBt('     ████')}${r('▒▒')}${g('░░░░░░')}${r('▒▒')}${rBt('████                           ')}`,
    `${rBt('   ██')}${r('▒▒▒▒')}${g('░░░░')}${r('▒▒▒▒  ▒▒▒▒')}${rBt('██                         ')}`,
    `${rBt('   ██')}${r('▒▒')}${g('░░')}${r('▒▒▒▒▒▒▒▒▒▒    ')}${rBt('██                         ')}`,
    `${rBt(' ██')}${r('▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  ▒▒')}${rBt('██                       ')}`,
    `${rBt(' ██')}${r('▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  ')}${rBt('██                       ')}`,
    `${rBt(' ██')}${r('▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒')}${rBt('██                       ')}`,
    `${rBt(' ██')}${r('▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒')}${rBt('██                       ')}`,
    `${rBt('   ██')}${r('▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒')}${rBt('██                         ')}`,
    `${rBt('   ██')}${r('▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒')}${rBt('██                         ')}`,
    `${rBt('     ████')}${r('▓▓▓▓▓▓▓▓▓▓')}${rBt('████                           ')}`,
    `${rBt('         ██████████                               ')}`,
]

export const printTomatoLine = (line: number, charCount: number) => {
    const frontPadding: number = width - charCount - tomatoWidth
    let tomatoLine: string = ''
    return padFront(frontPadding, charCount) + tomato[line] + gy('|')
}