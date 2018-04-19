// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyC9GALqSGOADGi0uyhVHjB8IjpGWlXBJpA',
    authDomain: 'angularfire2-example-445bb.firebaseapp.com',
    databaseURL: 'https://angularfire2-example-445bb.firebaseio.com',
    projectId: 'angularfire2-example-445bb',
    storageBucket: 'angularfire2-example-445bb.appspot.com',
    messagingSenderId: '170419620726'
  },
  actionCodeSettings: {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be whitelisted in the Firebase Console.
    // url: 'https://www.example.com/finishSignUp?cartId=1234',
    url: 'http://localhost:4200/forgot-password',
    // This must be true.
    handleCodeInApp: true,
    // iOS: {
    //   bundleId: 'com.example.ios'
    // },
    // android: {
    //   packageName: 'com.example.android',
    //   installApp: true,
    //   minimumVersion: '12'
    // }
  }
};
