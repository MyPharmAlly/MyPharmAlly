import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBZi12tqCNYaGHENKuunmZ8ZJ5i1W4tQSE",
  authDomain: "noor-fatima-healthcare-group.firebaseapp.com",
  databaseURL: "https://noor-fatima-healthcare-group-default-rtdb.firebaseio.com",
  projectId: "noor-fatima-healthcare-group",
  storageBucket: "noor-fatima-healthcare-group.appspot.com",
  messagingSenderId: "251108193993",
  appId: "1:251108193993:web:e09f8ba7d8899725a87f18"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };
