//import { initializeApp } from 'firebase/app';
//import { getAuth } from 'firebase/auth';
//import { getFirestore } from 'firebase/firestore';
//
//const firebaseConfig = {
//  apiKey: "AIzaSyDTw85qrwFPZbkJzte7DDa3xov7KOK1V20",
//  authDomain: "quizcard-38894.firebaseapp.com",
//  projectId: "quizcard-38894",
//  storageBucket: "quizcard-38894.firebasestorage.app",
//  messagingSenderId: "87413971882",
//  appId: "1:87413971882:web:024a747b663661b40de9d3",
//  measurementId: "G-QF8N9WL31S"
//};
//
//// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//
//// Initialize services
//export const auth = getAuth(app);
//export const db = getFirestore(app);
//
//export default app;


import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA0ki1NKRZnPGvJMgyPAJIcRAb6nFRUnI8",
  authDomain: "quizcard-7b96d.firebaseapp.com",
  projectId: "quizcard-7b96d",
  storageBucket: "quizcard-7b96d.firebasestorage.app",
  messagingSenderId: "276993698684",
  appId: "1:276993698684:web:52fdba2c5290341b5092f9",
  measurementId: "G-Q96DKJPPQP"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;