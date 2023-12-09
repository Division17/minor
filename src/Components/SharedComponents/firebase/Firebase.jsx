import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth , onAuthStateChanged} from "firebase/auth";
import { initializeFirestore  } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBIodRgEOcVQpEZiVnrnH-LFN0HgKDwnwY",
  authDomain: "social-media-258ac.firebaseapp.com",
  projectId: "social-media-258ac",
  storageBucket: "social-media-258ac.appspot.com",
  messagingSenderId: "890199123391",
  appId: "1:890199123391:web:096ad8fb7f1267d0786d0a",
  measurementId: "G-34N71L7EHP"
};


const app =initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
  useFetchStreams: false,
});

export { auth, db, onAuthStateChanged };