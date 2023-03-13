<template>
  <div>
    <h1>Sing In an Account</h1>
    <p><input type="email" placeholder="email" v-model="email" /></p>
    <p><input type="password" placeholder="password" v-model="password" /></p>
    <p v-if="errMsg">{{ errMsg }}</p>
    <p><button @click="register">Submit</button></p>
    <p><button @click="signInWithGoogle">Sign In With Google</button></p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useRoute } from "vue-router";
const email = ref("");
const password = ref("");
const errMsg = ref();
const router = useRoute();
const register = () => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((data) => {
      console.log("Successfully registered!");
      console.log(auth.currentUser);
      router.push("/feed"); // redirect to the feed
    })
    .catch((error) => {
      switch (error.code) {
        case "auth/invalid-email":
          errMsg.value = "Invalid email";
          break;
        case "auth/user-not-fount":
          errMsg.value = "No Account with that email was found";
          break;
        case "auth/wrong-password":
          errMsg.value = "Incorrect password";
          break;
        default:
          errMsg.value = "Email or password has incorrect";
          break;
      }
    });
};
const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(getAuth(), provider)
    .then((result) => {
      console.log("result: ", result.user);
      router.push("/feed");
    })
    .catch((erorr) => {
      //handle eror
    });
};
// const signInWithGoogle = () => {};
</script>

<style lang="scss" scoped></style>
