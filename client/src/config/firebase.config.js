import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBu2MvHKKMU7vqSWiQx_acxhc_dSIzHIcs",
    authDomain: "restaurantapp-bdac4.firebaseapp.com",
    databaseURL: "https://restaurantapp-bdac4-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-bdac4",
    storageBucket: "restaurantapp-bdac4.appspot.com",
    messagingSenderId: "438699136037",
    appId: "1:438699136037:web:fd530d83be9283bfbe1bcc",
    measurementId: "G-RG8X75FKKZ"
  };

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
  const firestore = getFirestore(app)
  const storage = getStorage(app)

  export { app, firestore, storage };