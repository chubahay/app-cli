#! /usr/bin/env node
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import { getOcpServiceUrl } from './utils/service-utils'
import { getDynatraceUrl } from './utils/dynatrace-utils'
import { select } from '@inquirer/prompts';

const choices = [
  { name: 'services', value: 'services' },
  { name: 'dynatrace', value: 'dynatrace' },
]

yargs(hideBin(process.argv))
  .command('get', 'get some environment url', async () => {
    
    const main = await select({
      message: 'What would you like to get?',
      choices: choices,
    });

    if (main === 'services') {
      let service = await getOcpServiceUrl()
      service.forEach((service) => {
        console.info(`${Object.keys(service)}: ${Object.values(service)}`)
      })
    }

    if (main === 'dynatrace') {
      let dynatrace = await getDynatraceUrl()
      console.info(`Dynatrace URL: ${dynatrace}`)
    }

  })
  .demandCommand(1)
  .parse()


  
