// ===== Firebase тохиргоо (surguuli-141 төсөл) =====
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDOdIWiwolXAE5yLSUIcNhsEzfEsxh5qoA",
  authDomain: "surguuli-141.firebaseapp.com",
  projectId: "surguuli-141",
  storageBucket: "surguuli-141.firebasestorage.app",
  messagingSenderId: "753292757473",
  appId: "1:753292757473:web:4c6969e5804e941f5deaa0",
  measurementId: "G-XVYWX5Y2NY"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
