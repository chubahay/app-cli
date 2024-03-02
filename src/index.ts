#! /usr/bin/env node
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import { getEnvironmentUrl } from './utils/utils'

yargs(hideBin(process.argv))
  .command('get', 'get some environment url', async () => {
    await getEnvironmentUrl()
  })
  .demandCommand(1)
  .parse()


  
