import { checkbox } from '@inquirer/prompts';

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

export const getEnvironmentUrl = async () => {

    const envOptions = await checkbox({
        message: 'Select an environment',
        choices: envChoices,
    });

    const clusterOptions = await checkbox({
        message: 'Select a cluster',
        choices: clusterChoices,
    });

    const serviceOptions = await checkbox({
        message: 'Select a service',
        choices: servicesCoices,
    });

    return {
        env: envOptions,
        service: serviceOptions,
        cluster: clusterOptions
    }
  
}









