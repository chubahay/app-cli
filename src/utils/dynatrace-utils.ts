import { select } from '@inquirer/prompts';
import { dynatraceUrls } from '../data/dynatrace-env';


const envChoices = [
    { name: 'dev', value: 'dev' },
    { name: 'test', value: 'test' },
    { name: 'preprod', value: 'preprod' },
    { name: 'prod', value: 'prod' },
]

export const getDynatraceUrl = async () => {

    const selectedEnv = await select({
        message: 'Select an environment',
        choices: envChoices,
    });
    
    // @ts-ignore
    let url = dynatraceUrls[selectedEnv]

    return url
}