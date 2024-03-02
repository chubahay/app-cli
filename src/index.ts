#! /usr/bin/env node
import { maxHeaderSize } from 'http'
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import inquirer  from 'inquirer';

yargs(hideBin(process.argv))
  .command('get', 'get some environment url', () => {
  })
  .demandCommand(1)
  .parse()

