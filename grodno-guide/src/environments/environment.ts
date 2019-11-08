// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // apiUrl: 'api/posts'
  firebase: {
    apiKey: 'AIzaSyCfz40WvS2xX8dVMF4b0IfIHjim5IdZfiM',
    authDomain: 'grodno-guide.firebaseapp.com',
    databaseURL: 'https://grodno-guide.firebaseio.com',
    projectId: 'grodno-guide',
    storageBucket: 'grodno-guide.appspot.com',
    messagingSenderId: '535123551476',
    appId: '1:535123551476:web:ee4059ddc84dd2d99c2aa1',
    measurementId: 'G-S274Q3QNYD'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
