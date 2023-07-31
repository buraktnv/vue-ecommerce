<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
    <!-- <base-text text="Hello world" :fontFamily="secondary" fontSize="16" /> -->
    <checkbox v-model="termPriv" :html-content="label"></checkbox>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import BaseText from "./components/base/BaseText.vue";
import Checkbox from "./components/Checkbox";

export default {
  name: "app",
  components: {
    HelloWorld,
    BaseText,
    Checkbox,
  },
  data() {
    return {
      value1: null,
      termPriv: false,
      label: '<p>Agree to our <a href="#">Terms of use</a> and <a href="#">Privacy Policy</a></p>'
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
