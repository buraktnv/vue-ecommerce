<template>
  <div class="home">
    <color-radio-picker
      :colors="colors"
      @color-radio="updateColor"
      v-model="colorValue"
    />

    <base-text text="hello world!" font-family="secondary" />
  </div>
</template>

<script>
import BaseText from "@/components/base/BaseText.vue";
import ColorRadioPicker from "@/components/product/ColorRadioPicker.vue";
import OrderInfo from "@/components/order/OrderInfo.vue";
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {
    BaseText,
    ColorRadioPicker,
    OrderInfo
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
