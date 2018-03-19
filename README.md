# Digilent Lambda TypeScript Template

This template provides a starting point for creating AWS Lambda functions using TypeScript.  All TypeScript code is contained in classes under **/src/** and imported into a pure Javascript index.js.  This makes it possible to do most of the work in TypeScript while still being able to edit the top level code from the AWS console.

#### Setup
1. Clone this repository.
2. Run `node setup.js` and follow the on screen instructions.
3. Run `npm install` 
4. Add TypeScript source in the generated **src/<modulename>.ts**
5. Use TypeScript class in Lambda handler in **index.js**
6. Run `node run build` to build the lambda function.

#### Generated Files
* **index.js**
    *  Contains the Lambda handler function.  Most of the high level logic should be done in this file by calling functions from the TypeScript module.
* **/src/<modulename>.ts**
    * TypeScript source file.  Most of the heavy lifting should be done in this class.
* **push.sh**
    *   This script updates the AWS Lambda function from the local build (the function must already exist in the AWS account).  This script requires AWS CLI with appropriate credentials.

#### Subdirectories
* **bundle**
  * Contains the bundled module and any supporting files for use in the browser.
* **dist**
  * Contains the build module, the TS declaration file and any other support files.
* **src**
  * Contains the TypeScript source code files.