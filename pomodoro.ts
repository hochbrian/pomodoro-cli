/* 
    Author: Brian E Hoch
    Email : brianhoch@me.com

    A configurable command-line pomodoro timer.
*/

import progress from 'cli-progress'
import * as config from './timersTypes'
import moment from 'moment'
import { b, c, g, gy, r, w, y, doubleRule, horizontalRule } from './format'
import { printTomatoLine, padFront } from './drawTomato'

var mode: string = process.argv[2]

// Delete me when done
const valTest = (val: any) => {
    console.log(typeof val + ": " + JSON.stringify(val, null, 2))
}
// 👆 This function is just for debugging and should be deleted when done.

const printSched = () => {
    let line: string
    let skipDelay: number = (15 - config.timers[mode].length) / 2
    let currentLine: number = 0

    while (currentLine < skipDelay) {
        console.log(gy('|') + printTomatoLine(currentLine, 1))
        currentLine++
    }

    config.timers[mode].forEach((s) => {
        let l: string
        if (s.session == config.sessionType.b) {
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

const displaySession = (sessionPeriod: config.sessionType, session: config.tSession) => {
    return new Promise(resolve => {
        const start = moment()
        var end;
        var color: (x: string) => string
        if (sessionPeriod === config.sessionType.w) {
            end = moment().add(session.wkDuration, 'm')
            color = (x: string) => c(x)
        } else {
            end = moment().add(session.bkDuration, 'm')
            color = (x: string) => g(x)
        }
        if (session.session == config.sessionType.b) {
            color = (x: string) => y(x)
        }
        var dur = end.diff(start);
        var cur = 0;


    })
}

const main = async () => {
    var session: config.tSession; 
    console.clear()
    console.log(c(config.user))
    console.log(b(config.title))
    console.log(r('Pomodoro Timer'))
    console.log(gy(doubleRule))
    console.log(gy('| Schedule') + padFront(108) + gy('|'))
    console.log(gy(horizontalRule))

    if (typeof mode != 'undefined') {
        if (typeof config.timers[mode] == 'undefined' || config.timers[mode] == null) {
            console.log(r('You must specify a valid pomodoro timer'))
            process.exit(1)
        }
    } else {
        mode = 'demo'
    }
    printSched()
    console.log(horizontalRule)
    for (session of config.timers[mode]) {
        if (session.session === config.sessionType.w) {
            await displaySession(config.sessionType.w, session)
        }
        await displaySession(config.sessionType.b, session)
    }
    console.log(w('Work Complete!'))
}

main()