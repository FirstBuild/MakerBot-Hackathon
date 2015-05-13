
var firebase_email = 'snappy@firstbuild.com'
var firebase_password = 'snappy'
var firebase_sandbox = 'https://mobius-firstbuild.firebaseio.com'

var Firebase = require('firebase');
var ref = new Firebase(firebase_sandbox);
var credentials = { email: firebase_email, password: firebase_password };

ref.authWithPassword(credentials, function(err, auth) {

  if (err) {
    console.error('Failed to login with credentials:', err);
  }
  else if (auth) {

    ref.child('users').child('google:105724342149087020351/devices/chillhubs/dummy/ledges/41e1b18e-2d12-4306-9211-c1068bf7f76d/rgbActual').on('value', function(snapshot) {
      console.log("ledge (" + Date() + "):" + JSON.stringify(snapshot.val(), null, 2));
    });

    ref.child('users').child('google:105724342149087020351/devices/chillhubs/dummy/milkyWeighs/1ea8fdb9-2418-440b-a67b-fa16210f0c9e/weight').on('value', function(snapshot) {
      console.log("milk ( " + Date() + "):" + JSON.stringify(snapshot.val(), null, 2));
});

    //BEER STUFFS !
    ref.child('users').child('google:105724342149087020351/devices/chillhubs/dummy/beerbanks/072b3293-d637-4f53-a273-edf8c7711d17').on('value', function(snapshot) {
      console.log("beer ( " + Date() + "):" + JSON.stringify(snapshot.val(), null, 2));
      beerinfos = snapshot.val();
      if (beerinfos.time_remaining == 0 && beerinfos.beer_sensor ==0)
      {
	console.log("BEER STOLEN!!!!!");
      }
      else if (beerinfos.time_remaining > 0 && beerinfos.beer_sensor ==0)
      {
        console.log("BEER AUTHORIZED. ENJOY");
      }

    });
  }
  else {
    console.error('Failed to login with credentials!');
    console.error('Make sure you entered your email and password correctly.');
  }
});

