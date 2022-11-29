#!/usr/bin/env node

import minimist from "minimist";
import { roll } from "../lib/roll.js";

const args = minimist(process.argv.slice(2));

//Initialization
if (args.sides) {
    var side = args.side;
}

if (args.dice) {
    var dice = args.dice;
}

if (args.rolls) {
    var rolls = args.rolls;
}

//Output
console.log(JSON.stringify(roll(side, dice, rolls)));