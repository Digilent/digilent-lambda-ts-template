import { <lambdaFunctionName> } from './dist/<lambdaFunctionName>';
if (typeof window !== 'undefined') {
    window.<lambdaFunctionName> = <lambdaFunctionName>;
}
else {
    exports.<lambdaFunctionName> = <lambdaFunctionName>;
}