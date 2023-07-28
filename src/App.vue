<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
    <base-text text="Hello world" :fontFamily="secondary" fontSize="16" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import BaseText from "./components/base/BaseText.vue";

export default {
  name: "app",
  components: {
    HelloWorld,
    BaseText,
  },
  data() {
    return {
      value1: null,
    };
  },
};
</script>

<style></style>
