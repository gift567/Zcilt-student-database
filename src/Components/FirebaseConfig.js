




import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyCjSHaofzXY1ZaJ6XHI0zj6uM8nIQb3iTw",
  authDomain: "ezcilt-students-admin.firebaseapp.com",
  projectId: "ezcilt-students-admin",
  storageBucket: "ezcilt-students-admin.appspot.com",
  messagingSenderId: "168091460647",
  appId: "1:168091460647:web:6bb4687abde7a6aa189a02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getAuth(app)