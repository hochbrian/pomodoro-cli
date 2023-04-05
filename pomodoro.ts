import progress from 'cli-progress';
import { timers } from './timersTypes';
import {
    m
} from './colorize';


console.log(m(JSON.stringify(timers.test, null, 2)));