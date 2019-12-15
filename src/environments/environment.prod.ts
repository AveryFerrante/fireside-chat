export const environment = {
  production: true,
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
