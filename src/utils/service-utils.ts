import { checkbox, select } from '@inquirer/prompts';
import { devEnvUrls } from '../data/dev-env';
import { testEnvUrls } from '../data/test-env';
import { preprodEnvUrls } from '../data/preprod-env';
import { prodEnvUrls } from '../data/prod-env';

const envChoices = [
    { name: 'dev', value: 'dev' },
    { name: 'test', value: 'test' },
    { name: 'preprod', value: 'preprod' },
    { name: 'prod', value: 'prod' },
]

const clusterChoices = [
    { name: 'loadbalanced', value: 'loadbalanced' },
    { name: 'cluster1', value: 'cluster1' },
    { name: 'cluster2', value: 'cluster2' },
]

const servicesCoices = [
    { name: 'fakeService', value: 'fakeService' },
    { name: 'fakeService2', value: 'fakeService2' },
]

export const getOcpServiceUrl = async () => {

    const selectedEnv = await select({
        message: 'Select an environment',
        choices: envChoices,
    });

    const selectedCluster = await select({
        message: 'Select a cluster',
        choices: clusterChoices,
    });

    const selectedService = await checkbox({
        message: 'Select a service',
        choices: servicesCoices,
        validate: (answer) => {
            if (answer.length < 1) {
                return 'You must choose at least one service.';
            }
            return true;
    }});

    let urlArray: any[] = []

    selectedService.forEach((service) => { 

        let env

        switch (selectedEnv) {
            case 'dev':
                env = devEnvUrls;
                break;
            case 'test':
                env = testEnvUrls
                break;
            case 'preprod':
                env = preprodEnvUrls
                break;
            case 'prod':
                env = prodEnvUrls
                break;
            default:
                throw new Error('Invalid environment selected');
        }

        // @ts-ignore
        urlArray.push({ [service]: env[service][selectedCluster] });
    });

    return urlArray;

}









