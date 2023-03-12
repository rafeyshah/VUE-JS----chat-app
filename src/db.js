import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const config = {
    // API KEYS
    apiKey: "AIzaSyBAEwx47niYBXmbDHhDltV_v7tAl-I0xMo",
    authDomain: "firevuechat-2f0d8.firebaseapp.com",
    projectId: "firevuechat-2f0d8",
    storageBucket: "firevuechat-2f0d8.appspot.com",
    messagingSenderId: "606504169001",
    appId: "1:606504169001:web:5f73f195277d3fb30df638"
}

firebase.initializeApp(config)
export default firebase;
