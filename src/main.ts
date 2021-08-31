import * as core from '@actions/core'
import {action} from './action'

async function run(): Promise<void> {
  try {
    await action(core)
  } catch (error) {
    core.setFailed(error.message)
  }
}

void run()
