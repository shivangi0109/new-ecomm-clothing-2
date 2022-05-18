import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUfl64PpytGoBxLsAj_5bp8-MqU2TZzvQ",
  authDomain: "new-ecomm-clothing-2-db-8becb.firebaseapp.com",
  projectId: "new-ecomm-clothing-2-db-8becb",
  storageBucket: "new-ecomm-clothing-2-db-8becb.appspot.com",
  messagingSenderId: "1090625807207",
  appId: "1:1090625807207:web:c0423494ecf08a649245c2"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log(userAuth);
};

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
