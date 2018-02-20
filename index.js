global.AWS = require('aws-sdk');
var <lambdaFunctionName> = require('./bundle/<lambdaFunctionName>').<lambdaFunctionName>;

exports.handler = (event, context, callback) => {
    console.logt('event: ', event);
    console.logt('context: ', context);
    
    callback(null, 'success');
}
