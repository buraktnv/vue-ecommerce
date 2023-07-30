<template>
  <div class="home">
    <base-text text="Hello world" fontFamily="secondary" fontSize="24" />
    <color-radio-picker />
  </div>
</template>

<script>
import BaseText from "@/components/base/BaseText.vue";
import ColorRadioPicker from "@/components/product/ColorRadioPicker.vue";
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {
    BaseText,
    ColorRadioPicker,
  },
};
</script>
