import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

var config = {
    apiKey: "AIzaSyAwSfuIoaVhNuLOb2MUzfL5uNLJkFyWrOI",
    authDomain: "react-slack-7cdaf.firebaseapp.com",
    databaseURL: "https://react-slack-7cdaf.firebaseio.com",
    projectId: "react-slack-7cdaf",
    storageBucket: "react-slack-7cdaf.appspot.com",
    messagingSenderId: "1045126847605"
  };
  firebase.initializeApp(config);

  export default firebase;
