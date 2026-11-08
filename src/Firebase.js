import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA9ZSBT_ASVObGtE4bgjIkHKy-wgP7YkTs",
  authDomain: "my-shop-auth-cd8dd.firebaseapp.com",
  projectId: "my-shop-auth-cd8dd",
  storageBucket: "my-shop-auth-cd8dd.firebasestorage.app",
  messagingSenderId: "607347122443",
  appId: "1:607347122443:web:1172fbf63b3f7a234d820e",
  measurementId: "G-5G6T07ZLX"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyBsMvukq5rcdPXw22JvfEXXVyyhaVPGETE",
//   authDomain: "my-shopping-web-f0de2.firebaseapp.com",
//   projectId: "my-shopping-web-f0de2",
//   storageBucket: "my-shopping-web-f0de2.firebasestorage.app",
//   messagingSenderId: "63291784202",
//   appId: "1:63291784202:web:6f91fa3af43678c6b937f3",
//   measurementId: "G-6B3DYNWD6"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// export const auth = getAuth(app);
// export const db = getFirestore(app);

// // firebase se liya tha
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBsMvukq5rcdPXw22JvfEXXVyyhaVPGEtE",
//   authDomain: "my-shopping-web-f0de2.firebaseapp.com",
//   projectId: "my-shopping-web-f0de2",
//   storageBucket: "my-shopping-web-f0de2.firebasestorage.app",
//   messagingSenderId: "63291784202",
//   appId: "1:63291784202:web:6f91fa3af43678c6b973f3",
//   measurementId: "G-6B3DYNJWD6"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// export const db = getFirestore(app);

// export const auth = getAuth(app);


// 1
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "APNA_FIREBASE_API_KEY_YAHAN_DABARE_PASTE_KAREIN",
//   authDomain: "my-shopping-web-f0de2.firebaseapp.com",
//   projectId: "my-shopping-web-f0de2",
//   storageBucket: "my-shopping-web-f0de2.firebasestorage.app",
//   messagingSenderId: "63291784202",
//   appId: "1:63291784202:web:6f91fa3af43678c6b937f3",
//   measurementId: "G-6B3DYNWD6"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// export const auth = getAuth(app);
// export const db = getFirestore(app);


// 2

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyBsMvukq5rcdPXw22JvfEXXVyyhaVPGETE",
//   authDomain: "my-shopping-web-f0de2.firebaseapp.com",
//   projectId: "my-shopping-web-f0de2",
//   storageBucket: "my-shopping-web-f0de2.firebasestorage.app",
//   messagingSenderId: "63291784202",
//   appId: "1:63291784202:web:6f91fa3af43678c6b973f3",
//   measurementId: "G-6B3DYNWD6"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// export const auth = getAuth(app);
