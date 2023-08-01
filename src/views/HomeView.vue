<template>
  <div class="home">
    <DiscountCard :backgroundImage="imgURL" :subtitle="subtitle" :title="title" :discount="discount" :explore="explore"></DiscountCard>
  </div>
</template>

<script>
import BaseText from "@/components/base/BaseText.vue";
import ColorRadioPicker from "@/components/product/ColorRadioPicker.vue";
// @ is an alias to /src
import DiscountCard from "@/components/DiscountCard";

export default {
  name: "HomeView",
  components: {
    BaseText,
    ColorRadioPicker,
    DiscountCard,
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
      subtitle: "Low Price",
      title: "High Coziness",
      discount: "UPTO 50% OFF",
      explore: "Explore Items",
    };
  },
  methods: {
    updateColor(value) {
      this.colorValue = value;
    },
  },
};
</script>
