import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyC7RdqX75FS0zrX3xqTaldawO_bD9VsXaI',
  authDomain: 'interviews-6b486.firebaseapp.com',
  projectId: 'interviews-6b486',
  storageBucket: 'interviews-6b486.appspot.com',
  messagingSenderId: '224902484556',
  appId: '1:224902484556:web:5e0bfd0b571c6a15ab5ae9',
};

firebase.initializeApp(firebaseConfig);

export default firebase;

// yarn add firebase react-firebase-hooks
// const ref = firebase.firestore().doc(`users/${email}`);
// ref.set({ favorites }, { merge: true });
// const [userData, loading] = useDocumentData(ref);
// const favorites = userData?.favorites || [];
