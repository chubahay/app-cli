import { select } from '@inquirer/prompts';
import { dynatraceUrls } from '../data/dynatrace-env';


const envChoices = [] as any

for (const key in dynatraceUrls) {
    envChoices.push({ name: key, value: key })
}

export const getDynatraceUrl = async () => {

    const selectedEnv = await select({
        message: 'Select an environment',
        choices: envChoices,
    });
    
    // @ts-ignore
    let url = dynatraceUrls[selectedEnv]

    return url
}