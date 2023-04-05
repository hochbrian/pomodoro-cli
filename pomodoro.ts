import progress from 'cli-progress'
import { sessionType, timers } from './timersTypes'
import {
    c,
    g,
    gy,
    m,
    r,
    y,
    doubleRule,
    horizontalRule
} from './colorize'
import { printTomatoLine, padFront } from './drawTomato'

var mode: string = process.argv[2]

// Delete me when done
const valTest = (val: any) => {
    console.log(typeof val + ": " + JSON.stringify(val, null, 2))
}

const printSched = () => {
    let line: string
    let skipDelay: number = (15 - timers[mode].length) / 2
    let currentLine: number = 0

    while (currentLine < skipDelay) {
        console.log(gy('|') + printTomatoLine(currentLine, 1))
        currentLine++
    }

    timers[mode].forEach((s) => {
        let l: string
        if (s.session == sessionType.b) {
            // Break
            line = gy('| ') + y(`${s.sessionNumber}: ${s.label}`)
            l = `| ${s.sessionNumber}: ${s.label}`
        } else {
            line = gy('| ') + y(`${s.sessionNumber}: `) + g(`Work: ${s.wkDuration}m `) + c(`Break: ${s.bkDuration}`)
            l = `| ${s.sessionNumber}: Work: ${s.wkDuration}m Break: ${s.bkDuration}`
        }
        console.log(line + printTomatoLine(currentLine, l.length))
        currentLine++
    })

    while (currentLine < 15) {
        console.log(gy('|') + printTomatoLine(currentLine, 1))
        currentLine++
    }

}

const main = async () => {
    console.clear()
    console.log(c('Brian E Hoch'))
    console.log(r('Pomodoro Timer'))
    console.log(gy(doubleRule))
    console.log(gy('| Schedule') + padFront(108) + gy('|'))
    console.log(gy(horizontalRule))

    if (typeof mode != 'undefined') {
        if (typeof timers[mode] == 'undefined' || timers[mode] == null) {
            console.log(r('You must specify a valid pomodoro timer'))
            process.exit(1)
        }
    } else {
        mode = 'demo'
    }
    printSched()
    console.log(horizontalRule)
    // console.log(m(JSON.stringify(timers.test, null, 2)))
}

main()