import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBDAMAfELMOwWmWOtHR2hrcFyViljSOUaA',
  authDomain: 'mini-blog-a5b04.firebaseapp.com',
  projectId: 'mini-blog-a5b04',
  storageBucket: 'mini-blog-a5b04.appspot.com',
  messagingSenderId: '1023332950541',
  appId: '1:1023332950541:web:cc72365b21e5bff3bdeb44'
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
