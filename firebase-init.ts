import { FirebaseOptions, initializeApp } from "@firebase/app";
import { getDatabase, DatabaseReference, ref } from "@firebase/database";

const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyDh0nWiL4ykMvqBPaL2VggdD9SVBMhgPno",
  authDomain: "keen-mind-notepad.firebaseapp.com",
  databaseURL: "https://keen-mind-notepad.firebaseio.com",
  projectId: "keen-mind-notepad",
  storageBucket: "keen-mind-notepad.appspot.com",
  messagingSenderId: "540770074337",
  appId: "1:540770074337:web:faa11ddab99dd85f4981a0",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const dbPaths = ["Notes"];

const dbref: {
  [path: string]: DatabaseReference;
} = { root: ref(db) };

for (const path of dbPaths) {
  dbref[path] = ref(db, path);
}

export { dbref };
