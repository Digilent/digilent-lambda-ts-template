var fs = require('fs');
let stdin = process.stdin;
let stdout = process.stdout;

var userInput = {
    organizationName: '',    
    lambdaFunctionName: '',
    description: '',
}

var filesToUpdate = [
    './package.json',
    './tsconfig.json',
    './index.js',
    './bundleHelper.js',
    './push.sh',
    './webpack.config.js'
];

function getUserInput(key, prompt) {
    prompt.get('string', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            userInput[key] = data;
        }
    });
}

function updateFile(file) {
    console.log('Updating', file);
    data = fs.readFileSync(file, 'utf8');

    Object.keys(userInput).forEach((key) => {
        let regex = new RegExp('<' + key + '>', 'g');
        data = data.replace(regex, userInput[key]);
    });

    fs.writeFileSync(file, data, 'utf8');
}

function getUserInput(key, prompt) {
    return new Promise((resolve, reject) => {
        stdin.resume();
        stdout.write(prompt);

        stdin.once('data', function (data) {
            userInput[key] = data.toString().trim();
            resolve(userInput[key]);
        });
    });
}

function updateAllFiles() {
    filesToUpdate.forEach((file) => {
        updateFile(file);
    })
}

function createSrcFiles() {
    fs.mkdirSync('./src');
    let ts = `export class ` + userInput.lambdaFunctionName + ` {

    constructor() {
        
    }

    }`;

    fs.writeFileSync('./src/' + userInput.lambdaFunctionName + '.ts', ts, 'utf8');    

}

getUserInput('organizationName', 'Please enter your company or organization name (all lowercase): ')
    .then((success) => {
        return getUserInput('lambdaFunctionName', 'Please enter the AWS Lambda function name (upper CamelCase recommended, no spaces): ');
    })
    .then((success) => {
        return getUserInput('description', 'Provide a short description of the Lambda function: ');
    })
    .then((success) => {
        console.log('Setting Up Your Lambda Function');
        updateAllFiles();
        createSrcFiles();
        process.exit();
    })
    .catch((err) => {
        console.log(err);
        process.exit();
    });





