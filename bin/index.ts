#! /usr/bin/env node
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

yargs(hideBin(process.argv))
  .command('Hello', 'cli says hello back', () => {
  }, (argv) => {
    console.info('Hello!')
  })
  .demandCommand(1)
  .parse()