// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyCSZKNtF5ThBPmBaTKU5j1kQ1fPvQzJZNQ',
    authDomain: 'fireside-chat-ffe16.firebaseapp.com',
    databaseURL: 'https://fireside-chat-ffe16.firebaseio.com',
    projectId: 'fireside-chat-ffe16',
    storageBucket: 'fireside-chat-ffe16.appspot.com',
    messagingSenderId: '357240222565',
    appId: '1:357240222565:web:62a047fbfec18bb03aa78c',
    measurementId: 'G-YXNDBQ6NQ8'
  },
  collections: {
    threads: {
      name: 'Threads',
      subCollections: {
        messages: {
          name: 'Messages'
        }
      }
    }
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
