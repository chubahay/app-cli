#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const yargs_1 = __importDefault(require("yargs"));
const helpers_1 = require("yargs/helpers");
const utils_1 = require("./utils/utils");
(0, yargs_1.default)((0, helpers_1.hideBin)(process.argv))
    .command('get', 'get some environment url', async () => {
    await (0, utils_1.getEnvironmentUrl)();
})
    .demandCommand(1)
    .parse();
