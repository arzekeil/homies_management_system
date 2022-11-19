import * as firebase from "firebase";
import "@firebase/auth";
import "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDMia4uyaU5bTYGBY2bDXd8mrLADUtlDvU",
  authDomain: "hackwestern-2022.firebaseapp.com",
  databaseURL: "https://hackwestern-2022-default-rtdb.firebaseio.com",
  projectId: "hackwestern-2022",
  storageBucket: "hackwestern-2022.appspot.com",
  messagingSenderId: "841041234",
  appId: "1:841041234:web:7c3941248a92662dd6268b"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
