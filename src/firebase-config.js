
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCOZCClQH9e1Oo2LTb7JiZhJ0lpyBWrAUI",
  authDomain: "connectverseedu.firebaseapp.com",
  projectId: "connectverseedu",
  storageBucket: "connectverseedu.appspot.com",
  messagingSenderId: "395646985497",
  appId: "1:395646985497:web:097f993752bb4134d1d188",
  measurementId: "G-8ZBC7S63WF"
};


const app = initializeApp(firebaseConfig);
export const db =getFirestore(app)