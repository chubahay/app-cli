#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const yargs_1 = __importDefault(require("yargs"));
const helpers_1 = require("yargs/helpers");
const service_utils_1 = require("./utils/service-utils");
const dynatrace_utils_1 = require("./utils/dynatrace-utils");
const prompts_1 = require("@inquirer/prompts");
const choices = [
    { name: 'services', value: 'services' },
    { name: 'dynatrace', value: 'dynatrace' },
];
(0, yargs_1.default)((0, helpers_1.hideBin)(process.argv))
    .command('get', 'get some environment url', async () => {
    const main = await (0, prompts_1.select)({
        message: 'What would you like to get?',
        choices: choices,
    });
    if (main === 'services') {
        let service = await (0, service_utils_1.getOcpServiceUrl)();
        service.forEach((service) => {
            console.info(`${Object.keys(service)}: ${Object.values(service)}`);
        });
    }
    if (main === 'dynatrace') {
        let dynatrace = await (0, dynatrace_utils_1.getDynatraceUrl)();
        console.info(`Dynatrace URL: ${dynatrace}`);
    }
})
    .demandCommand(1)
    .parse();
