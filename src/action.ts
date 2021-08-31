import * as Core from '@actions/core'
import {readSync} from 'to-vfile'
import {retext} from 'retext'
import {reporter} from 'vfile-reporter'

// eslint-disable-next-line @typescript-eslint/no-require-imports,@typescript-eslint/no-var-requires
const googlestyleguide = require('retext-google-styleguide')

export async function action(core: typeof Core): Promise<void> {
  retext()
    .use(googlestyleguide)
    .process(readSync('README.md'), function (err, file) {
      core.error(reporter(err || file))
    })
}
