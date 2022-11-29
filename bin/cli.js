#!/usr/bin/env node

import minimist from "minimist";
import { roll } from "../lib/roll.js";

const args = minimist(process.argv.slice(2));

//Initialization
if (args.sides) {
    var side = args.sides;
} else {
    var side = 0;
}

if (args.dice) {
    var dice = args.dice;
} else {
    var dice = 0;
}

if (args.rolls) {
    var rolls = args.rolls;
} else {
    var rolls = 0;
}

//Output
console.log(JSON.stringify(roll(side, dice, rolls)));