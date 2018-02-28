global.AWS = require('aws-sdk');
var <lambdaFunctionName> = require('./bundle/<lambdaFunctionName>').<lambdaFunctionName>;

exports.handler = (event, context, callback) => {
    console.log('event: ', event);
    console.log('context: ', context);
    
    callback(null, 'success');
}
