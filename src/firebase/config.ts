import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAdmBKpFaaioNixKume90kJFk7K2o8thkY',
  authDomain: 'find-me-3cec7.firebaseapp.com',
  projectId: 'find-me-3cec7',
  storageBucket: 'find-me-3cec7.firebasestorage.app',
  messagingSenderId: '881016710299',
  appId: '1:881016710299:web:9d95fc7608f08f164c523e',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
