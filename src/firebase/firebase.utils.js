import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/firestore';


const config ={
  apiKey: "AIzaSyCNqtz7t25qZsEsr5vPAlkgJ5-tlu6xaW4",
  authDomain: "social-network-3e2ce.firebaseapp.com",
  projectId: "social-network-3e2ce",
  storageBucket: "social-network-3e2ce.appspot.com",
  messagingSenderId: "731262434631",
  appId: "1:731262434631:web:d817e0847d5233c1d82062",
  measurementId: "G-YR85D4E9VS"
  };

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

const provider1 = new firebase.auth.FacebookAuthProvider();
provider1.setCustomParameters({ prompt: 'select_account' });
export const signInWithFacebook = () => auth.signInWithPopup(provider1);



export default firebase;
