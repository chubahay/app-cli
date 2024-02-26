#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yargs_1 = require("yargs");
var helpers_1 = require("yargs/helpers");
(0, yargs_1.default)((0, helpers_1.hideBin)(process.argv))
    .command('Hello', 'cli says hello back', function () {
}, function (argv) {
    console.info('Hello!');
})
    .demandCommand(1)
    .parse();
