import { exec } from 'child_process';
import { toolName, version, description } from './metadata';
import _ from 'lodash';

(async function main() {
    const environment = await import("./config/dev");

    let parameters = [
        "--function-name", toolName,
        "--runtime", environment.runtime,
        "--role", environment.role,
        "--handler", environment.handler,
        "--description", `'${description}'`,
        "--environment", `Variables={${_.join(_.map(environment.variables, (value, key) => `${key}=${value}`), ",")}}`
    ]

    exec(`aws lambda update-function-configuration ${parameters.join(" ")}`, (error, stdout, stderr) => {
        process.stdout.write(stdout);
        process.stderr.write(stderr);
    })
})();