var import_app = require("firebase/app");
var import_auth = require("firebase/auth");
var import_firestore = require("firebase/firestore");
var import_storage = require("firebase/storage");
const firebaseConfig = {
  apiKey: "AIzaSyCsnZvoiQd7GgXUzgfDX8uyYZeWvZ0Rf9U",
  authDomain: "sveltekit-web-app-ba666.firebaseapp.com",
  projectId: "sveltekit-web-app-ba666",
  storageBucket: "sveltekit-web-app-ba666.appspot.com",
  messagingSenderId: "700405674978",
  appId: "1:700405674978:web:02eba407a9b0067919ffbb"
};
const firebaseApp = (0, import_app.initializeApp)(firebaseConfig);
(0, import_auth.getAuth)();
(0, import_firestore.getFirestore)();
(0, import_storage.getStorage)(firebaseApp);
