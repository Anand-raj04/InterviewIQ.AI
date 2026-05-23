
// import { initializeApp } from "firebase/app";
// import {getAuth, GoogleAuthProvider } from "firebase/auth"
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
//   authDomain: "interview-a08d7.firebaseapp.com",
//   projectId: "interview-a08d7",
//   storageBucket: "interview-a08d7.firebasestorage.app",
//   messagingSenderId: "203061608063",
//   appId: "1:203061608063:web:2aaaa9403bd941a340c94a"
// };


// const app = initializeApp(firebaseConfig);

// const auth = getAuth(app);

// const provider = new GoogleAuthProvider()

// export {auth , provider}

import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  setPersistence,
  browserLocalPersistence
} from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interview-a08d7.firebaseapp.com",
  projectId: "interview-a08d7",
  storageBucket: "interview-a08d7.firebasestorage.app",
  messagingSenderId: "203061608063",
  appId: "1:203061608063:web:2aaaa9403bd941a340c94a"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

setPersistence(auth, browserLocalPersistence);

const provider = new GoogleAuthProvider();

export { auth, provider };