<template>
  <div id="app">
    <nav>
      <TheHeader />
    </nav>
    <router-view />
    <base-text text="Hello world" :fontFamily="secondary" fontSize="16" />
  </div>
</template>

<script>
import TheHeader from "@/components/theHeader";
import HelloWorld from "./components/HelloWorld.vue";
import BaseText from "./components/base/BaseText.vue";

export default {
  name: "app",
  components: {
    HelloWorld,
    BaseText,
    TheHeader,
  },
  data() {
    return {
      value1: null,
    };
  },
};
</script>

<style></style>
