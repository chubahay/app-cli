"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDynatraceUrl = void 0;
const prompts_1 = require("@inquirer/prompts");
const dynatrace_env_1 = require("../data/dynatrace-env");
const envChoices = [
    { name: 'dev', value: 'dev' },
    { name: 'test', value: 'test' },
    { name: 'preprod', value: 'preprod' },
    { name: 'prod', value: 'prod' },
];
const getDynatraceUrl = async () => {
    const selectedEnv = await (0, prompts_1.select)({
        message: 'Select an environment',
        choices: envChoices,
    });
    // @ts-ignore
    let url = dynatrace_env_1.dynatraceUrls[selectedEnv];
    return url;
};
exports.getDynatraceUrl = getDynatraceUrl;
