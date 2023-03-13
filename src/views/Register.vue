<template>
  <div>
    <h1>Create an Account</h1>
    <p><input type="email" placeholder="email" v-model="email" /></p>
    <p><input type="password" placeholder="password" v-model="password" /></p>
    <p><button @click="register">Submit</button></p>
    <p><button @click="signInWithGoogle">Sign In With Google</button></p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useRoute } from "vue-router";
const email = ref("");
const password = ref("");
const router = useRoute();
const register = () => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((data) => {
      console.log("Successfully registered!");
      console.log(auth.currentUser);
      router.push("/feed"); // redirect to the feed
    })
    .catch((error) => {
      alert(error);
    });
};

const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(getAuth(), provider)
    .then((result) => {
      console.log(result.user);
      console.log("register with google");
      router.push("/feed");
    })
    .catch((erorr) => {
      //handle eror
    });
};
</script>

<style lang="scss" scoped></style>
