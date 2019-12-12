import { exec } from 'child_process';
import { toolName, version, description } from './metadata';
import _ from 'lodash';

let parameters = [
    "--function-name", toolName,
    "--zip-file", `fileb://./dist/${toolName}-${version}.zip`
]

exec(`aws lambda update-function-code ${parameters.join(" ")}`, (error, stdout, stderr) => {
    process.stdout.write(stdout);
    process.stderr.write(stderr);
})