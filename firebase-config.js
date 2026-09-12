import { initializeApp } from
"https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import { getAuth } from
"https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

import { getFirestore } from
"https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

    const firebaseConfig = {
  apiKey: "AIzaSyCznVC8NXaWdU035AGRZu0pYzfTDuETw4k",
  authDomain: "wall-of-shame-c242a.firebaseapp.com",
  projectId: "wall-of-shame-c242a",
  storageBucket: "wall-of-shame-c242a.firebasestorage.app",
  messagingSenderId: "789097662655",
  appId: "1:789097662655:web:a2addb25390119dda71e0a"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);