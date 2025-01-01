import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCKkrevYAzPo3fHLEtPTvwwZk2ibP_IzPs",
  authDomain: "tswift-album-ranker.firebaseapp.com",
  projectId: "tswift-album-ranker",
  storageBucket: "tswift-album-ranker.appspot.com",
  messagingSenderId: "your-sender-id",
  appId: "1:332082220892:web:948a0cbbaa29071f137b99",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);