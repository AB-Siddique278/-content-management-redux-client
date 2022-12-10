import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,


//   apiKey: "AIzaSyB0mbhEVdgHmL5_bP6AgTX82zU5J7TV84U",
//   authDomain: "content-management-60409.firebaseapp.com",
//   projectId: "content-management-60409",
//   storageBucket: "content-management-60409.appspot.com",
//   messagingSenderId: "21618853808",
//   appId: "1:21618853808:web:6f61d815fd53c7ddac7875"









};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
