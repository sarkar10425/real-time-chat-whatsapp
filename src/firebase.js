import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyD5tw11uMmtVsm5dlziPIBDMlGDwwdHEAI",
  authDomain: "whatsapp-mern-87dbd.firebaseapp.com",
  projectId: "whatsapp-mern-87dbd",
  storageBucket: "whatsapp-mern-87dbd.appspot.com",
  messagingSenderId: "909786090474",
  appId: "1:909786090474:web:849c8c8d44a1ea68604093",
  measurementId: "G-89G94DJPZX"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore()
const auth = firebase.auth();
const provider =  new firebase.auth.GoogleAuthProvider();

export {auth, provider}
export default db