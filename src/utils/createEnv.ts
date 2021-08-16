import * as fs from 'fs';
import * as readline from 'readline';
import * as base64 from 'base-64';
import * as utf8 from 'utf8';
import color from './consoleColor';

const rl = readline.createInterface({
    input : process.stdin,
    output: process.stdout,
});

rl.question('Төлийн нэрийг оруулна уу. \n', (name: string) => {
    const bytes = utf8.encode(name);
    const encoded = base64.encode(bytes);

    const model_template = `APP_NAME="${name}"
SECRET_KEY="${encoded}"
`;

    fs.writeFile(`${__dirname}/../../.env`, model_template, (err) => {
        if (err) throw err;

        console.log(color.FgGreen, 'App config created');
        process.exit(0);
    });
});