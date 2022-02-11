import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA8ij3dxbAxIDzwJ5pWCKS9eF5i_ZupNGg",
  authDomain: "disney-clone-4cc8c.firebaseapp.com",
  projectId: "disney-clone-4cc8c",
  storageBucket: "disney-clone-4cc8c.appspot.com",
  messagingSenderId: "991162595240",
  appId: "1:991162595240:web:a1c78600328a56c3380f9d",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };