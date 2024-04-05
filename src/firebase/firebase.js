// Importe as funções necessárias dos SDKs necessários
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Sua configuração Firebase para a web
const firebaseConfig = {
  apiKey: "AIzaSyAReCmqIauSuJKHGb8cDCAaKLRKyBQFiNw",
  authDomain: "pereira-burger.firebaseapp.com",
  projectId: "pereira-burger",
  storageBucket: "pereira-burger.appspot.com",
  messagingSenderId: "500682159931",
  appId: "1:500682159931:web:9db9f6832a0dd160a4691e"
};

// Inicialize o Firebase
const app = initializeApp(firebaseConfig);

// Obtenha uma instância do Firestore
const firestore = getFirestore(app);
