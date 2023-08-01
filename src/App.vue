<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>

export default {
  name: "app",
  components: {},
  data() {
    return {
      value1: null,
    };
  },
};
</script>

<style></style>
