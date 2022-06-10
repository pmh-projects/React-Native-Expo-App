import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBgC-8_YDPMuTGIf5qrmboY6YEx5wLLlAw",
  authDomain: "reactnative-7c51a.firebaseapp.com",
  projectId: "reactnative-7c51a",
  storageBucket: "reactnative-7c51a.appspot.com",
  messagingSenderId: "844638718680",
  appId: "1:844638718680:web:48b860e541c1af77e365ad"
};

initializeApp(firebaseConfig);
export const firebaseData = getFirestore();

let app = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()

export { auth };