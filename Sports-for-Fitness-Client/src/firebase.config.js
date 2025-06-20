// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDW7oFo2TV6DTPnNgkUefn-_4uKOA-PYu4",
  authDomain: "primesport-zone.firebaseapp.com",
  projectId: "primesport-zone",
  storageBucket: "primesport-zone.firebasestorage.app",
  messagingSenderId: "1089213432672",
  appId: "1:1089213432672:web:33ef8e814676432c315405",
  measurementId: "G-EGCTN4PRDW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;  //ei kaj ta nije nije korte hobe