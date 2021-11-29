import { FirebaseOptions, initializeApp } from "@firebase/app";
import { getDatabase, DatabaseReference, ref } from "@firebase/database";

// const firebaseConfig: FirebaseOptions = {
//   apiKey: "AIzaSyDh0nWiL4ykMvqBPaL2VggdD9SVBMhgPno",
//   authDomain: "keen-mind-notepad.firebaseapp.com",
//   databaseURL: "https://keen-mind-notepad-default-rtdb.firebaseio.com/",
//   projectId: "keen-mind-notepad",
//   storageBucket: "keen-mind-notepad.appspot.com",
//   messagingSenderId: "540770074337",
//   appId: "1:540770074337:web:faa11ddab99dd85f4981a0",
// };

const firebaseConfig: FirebaseOptions = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: "https://keen-mind-notepad-default-rtdb.firebaseio.com/",
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
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
