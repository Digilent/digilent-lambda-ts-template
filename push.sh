#!/bin/bash

FUNCTION_NAME=<lambdaFunctionName>
FILES="index.js"

#for f in *.js
#do 
#  FILE_NAME=`basename $f .js`  
#  FILES="$FILES $f"  
#done



#Add files in ./bundle
FILES="$FILES bundle"  

echo "Processing [$FILES]..."

zip -r $FUNCTION_NAME.zip $FILES
aws lambda update-function-code --function-name $FUNCTION_NAME --zip-file fileb://$FUNCTION_NAME.zip
rm $FUNCTION_NAME.zip