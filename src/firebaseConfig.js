// src/firebaseConfig.js

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCiUfaDudLOgZ1PFKVuXF4lOywPlOz9pkE",
    authDomain: "birthdayinvite-f00d0.firebaseapp.com",
    projectId: "birthdayinvite-f00d0",
    storageBucket: "birthdayinvite-f00d0.appspot.com",
    messagingSenderId: "414750589442",
    appId: "1:414750589442:web:45340d0dcb3b7097941d1b"
  };

  const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };