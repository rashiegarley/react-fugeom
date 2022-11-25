// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

console.log(process.env);

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCtKbtcYZ_E-lKkvsO21_0jDwJ2FRL5qn0',
  authDomain: 'thort-aaf77.firebaseapp.com',
  projectId: 'thort-aaf77',
  storageBucket: 'thort-aaf77.appspot.com',
  messagingSenderId: 480128727586,
  appId: '1:480128727586:web:9fdf00dc291fa6ade3e87b',
  measurementId: 'G-E078YZZ0C0',
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
const analytics = getAnalytics(FIREBASE_APP);
