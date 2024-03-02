#! /usr/bin/env node
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import { getEnvironmentUrl } from './utils/env-opts'

yargs(hideBin(process.argv))
  .command('get', 'get some environment url', async () => {
    let env = await getEnvironmentUrl()
    env.forEach((env) => {
      console.info(`${Object.keys(env)}: ${Object.values(env)}`)
    })
  })
  .demandCommand(1)
  .parse()


  
