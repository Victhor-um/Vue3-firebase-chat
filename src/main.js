import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0s43-bbC9SAryIi0qiIoegb7WIr21LQs",
  authDomain: "my-vue-chat-c0b15.firebaseapp.com",
  projectId: "my-vue-chat-c0b15",
  storageBucket: "my-vue-chat-c0b15.appspot.com",
  messagingSenderId: "128453966603",
  appId: "1:128453966603:web:4aedf3461f94629997000e",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
