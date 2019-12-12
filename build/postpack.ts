const tarToZip = require('tar-to-zip');
import * as fs from 'fs';
import { toolName, version } from './metadata';
const { stdout } = process;

const sourceTarGzFile = `${toolName}-${version}.tgz`;

const onProgress = (n) => {
    stdout.write(`\r${n}`);
};

const onFinish = (e) => {
    stdout.write('\n');
    fs.unlinkSync(sourceTarGzFile)
};

const onError = ({ message }) => {
    console.error(message);
};

const zip = fs.createWriteStream(`dist/${toolName}-${version}.zip`);
const progress = true;

tarToZip(sourceTarGzFile, { progress })
    .on('progress', onProgress)
    .on('error', onError)
    .getStream()
    .pipe(zip)
    .on('finish', onFinish);
