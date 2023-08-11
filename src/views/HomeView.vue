<template>
  <div class="home">
    <color-radio-picker
      :colors="colors"
      @color-radio="updateColor"
      v-model="colorValue"
    />

    <base-text text="hello world!" font-family="secondary" />
    <base-title typical=" -psuedo -fsmall">Base title!</base-title>
    <base-button type="primary" size="xxl" background="bg-white" color="clr-empress">Merhaba</base-button>
    <base-button type="secondary" size="lg" >Deneme</base-button>
    
    
  </div>
</template>

<script>
import BaseText from "@/components/base/BaseText.vue";
import ColorRadioPicker from "@/components/product/ColorRadioPicker.vue";
import BaseTitle from '@/components/base/BaseTitle.vue';
import BaseButton from "@/components/base/BaseButton.vue";
import OrderInfo from "@/components/order/OrderInfo.vue";
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {
    BaseText,
    ColorRadioPicker,
    BaseTitle,
    BaseButton,
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
