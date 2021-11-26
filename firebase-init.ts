import { FirebaseOptions, initializeApp } from "firebase/app";

const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyDh0nWiL4ykMvqBPaL2VggdD9SVBMhgPno",
  authDomain: "keen-mind-notepad.firebaseapp.com",
  projectId: "keen-mind-notepad",
  storageBucket: "keen-mind-notepad.appspot.com",
  messagingSenderId: "540770074337",
  appId: "1:540770074337:web:faa11ddab99dd85f4981a0",
};

const app = initializeApp(firebaseConfig);
