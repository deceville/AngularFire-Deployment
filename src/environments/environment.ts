/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
  	apiKey: "AIzaSyCcXu36UmLBwX20XvRNe9UV9pLSgd-Juvk",
    authDomain: "angular-firebase-deployment.firebaseapp.com",
    databaseURL: "https://angular-firebase-deployment.firebaseio.com",
    projectId: "angular-firebase-deployment",
    storageBucket: "angular-firebase-deployment.appspot.com"
};
