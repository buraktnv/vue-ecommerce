<template>
  <div class="home">
    <base-text text="Hello world" fontFamily="secondary" fontSize="24" />
  </div>
</template>

<script>
import BaseText from "@/components/base/BaseText.vue";
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
    BaseText,
  },
};
</script>
