import firebase from  'firebase';


const config = {
  apiKey: "AIzaSyBnwdGi8KCkwU9oHquKg2irLR2svIrP1x4",
  authDomain: "get-hired-30927.firebaseapp.com",
  databaseURL: "https://get-hired-30927.firebaseio.com",
  projectId: "get-hired-30927",
  storageBucket: "get-hired-30927.appspot.com",
  messagingSenderId: "577381435332",
  appId: "1:577381435332:web:31e637b5c1fe467bc18691"
};

firebase.initializeApp(config);

export default firebase;