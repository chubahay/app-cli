"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEnvironmentUrl = void 0;
const prompts_1 = require("@inquirer/prompts");
const prompts_2 = require("@inquirer/prompts");
const dev_env_1 = require("../data/dev-env");
const test_env_1 = require("../data/test-env");
const preprod_env_1 = require("../data/preprod-env");
const prod_env_1 = require("../data/prod-env");
const envChoices = [
    { name: 'dev', value: 'dev' },
    { name: 'test', value: 'test' },
    { name: 'preprod', value: 'preprod' },
    { name: 'prod', value: 'prod' },
];
const clusterChoices = [
    { name: 'loadbalanced', value: 'loadbalanced' },
    { name: 'cluster1', value: 'cluster1' },
    { name: 'cluster2', value: 'cluster2' },
];
const servicesCoices = [
    { name: 'fakeService', value: 'fakeService' },
    { name: 'fakeService2', value: 'fakeService2' },
];
const getEnvironmentUrl = async () => {
    const selectedEnv = await (0, prompts_2.select)({
        message: 'Select an environment',
        choices: envChoices,
    });
    const selectedCluster = await (0, prompts_2.select)({
        message: 'Select a cluster',
        choices: clusterChoices,
    });
    const selectedService = await (0, prompts_1.checkbox)({
        message: 'Select a service',
        choices: servicesCoices,
        validate: (answer) => {
            if (answer.length < 1) {
                return 'You must choose at least one service.';
            }
            return true;
        }
    });
    let urlArray = [];
    selectedService.forEach((service) => {
        let env;
        switch (selectedEnv) {
            case 'dev':
                env = dev_env_1.devEnvUrls;
                break;
            case 'test':
                env = test_env_1.testEnvUrls;
                break;
            case 'preprod':
                env = preprod_env_1.preprodEnvUrls;
                break;
            case 'prod':
                env = prod_env_1.prodEnvUrls;
                break;
            default:
                throw new Error('Invalid environment selected');
        }
        // @ts-ignore
        urlArray.push({ [service]: env[service][selectedCluster] });
    });
    return urlArray;
};
exports.getEnvironmentUrl = getEnvironmentUrl;
