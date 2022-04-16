import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBc26n6sK29v31_Tnd-WudafsRjRLiL8sA",
  authDomain: "physical-medicine-specialist.firebaseapp.com",
  projectId: "physical-medicine-specialist",
  storageBucket: "physical-medicine-specialist.appspot.com",
  messagingSenderId: "324449388584",
  appId: "1:324449388584:web:e7ee5bf42fc0e609ba8d1d"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;