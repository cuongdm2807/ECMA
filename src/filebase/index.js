import firebase from "firebase/app";
import "firebase/storage";


    // Đoạn này copy trên firebase của từng người nha
    // trên video có 2 đoạn để copy phần này đấy, chú ý đoạn này nhé
    const firebaseConfig = {
        apiKey: "AIzaSyC5kyDvxeZ8PpB--TRO81Vg8KoDZ1kwm0U",
        authDomain: "ecomerce-37241.firebaseapp.com",
        projectId: "ecomerce-37241",
        storageBucket: "ecomerce-37241.appspot.com",
        messagingSenderId: "878152071717",
        appId: "1:878152071717:web:9bd8d0cb25a3b198ce9dcc"
      };



// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;