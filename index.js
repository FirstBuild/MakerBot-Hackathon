
var firebase_email = 'snappy@firstbuild.com'
var firebase_password = 'snappy'
var firebase_sandbox = 'https://mobius-firstbuild.firebaseio.com'
//eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2IjowLCJkIjp7InVpZCI6Imdvb2dsZToxMDU3MjQzNDIxNDkwODcwMjAzNTEiLCJwcm92aWRlciI6Imdvb2dsZSJ9LCJpYXQiOjE0Mjk3OTU5ODJ9.hmqTRjR8cBA1pWVIZTuR-JXabNkLTT_IcnTSxSKWHJ0

var Firebase = require('firebase');

var ref = new Firebase(firebase_sandbox);
var credentials = { email: firebase_email, password: firebase_password };

ref.authWithPassword(credentials, function(err, auth) {

  if (err) {
    console.error('Failed to login with credentials:', err);
  }
  else if (auth) {

 ref.child('users').child('google:105724342149087020351/devices/chillhubs/dummy/milkyWeighs/1ea8fdb9-2418-440b-a67b-fa16210f0c9e/weight').on('value', function(snapshot) {
      console.log("milk% : "  + JSON.stringify(snapshot.val(), null, 2));
  });
  }
  else {
    console.error('Failed to login with credentials!');
    console.error('Make sure you entered your email and password correctly.');
  }
});

