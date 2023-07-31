<template>
  <div class="home">
    <color-radio-picker
      :colors="colors"
      @color-radio="updateColor"
      v-model="colorValue"
    />
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
  data() {
    return {
      colorValue: "capeCod",
      colors: [
        "athensGray",
        "capeCod",
        "carissma",
        "electricViolet",
        "empress",
        "merlot",
        "ronchi",
      ],
    };
  },
  methods: {
    updateColor(value) {
      this.colorValue = value;
    },
  },
};
</script>
