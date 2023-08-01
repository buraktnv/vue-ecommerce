<template>
  <div class="home">
    <DiscountCard :imgURL="imgURL" :subtitle="subtitle" :title="title" :discount="discount" :explore="explore"></DiscountCard>
  </div>
</template>

<script>
import BaseText from "@/components/base/BaseText.vue";
import ColorRadioPicker from "@/components/product/ColorRadioPicker.vue";
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
      imgURL: "https://s3-alpha-sig.figma.com/img/15e7/1300/3ad99680fd58b1439619850e8103950c?Expires=1691971200&Signature=oKCbG7d7knRy7s-gSa4cTFIPelD7S7WHmPr8935GTMzINy6qWJY7oLW~pttFN08DtuVPZ1po3BoVEvNJP610YT~eYCLX~vALOqUCpFGVQsBn3j4Ci93HxLsCb6-whTIjO5pw0JjCORGFpa4lIFVCol1lQkHg8GTtnJqp7U3mwq3VNAYBqTYtaHb6sP~299KiIGDWgAbuzy14Uc9opRZNCgtoMjp1Ha~5o4f5ZAmK3NxpT7HwwToxylg3YTU~zGlMBZXSodMfsVJlLXMqw3Jq8UhNQziAO-8Iuuh9Vvhi9CG0ZOydHk1w-ATtEz0Yt~leH4U15vvDy-ljGjFYB4-eDA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      subtitle: "Low Price",
      title: "High Coziness",
      discount: "UPTO 50% OFF",
      explore: "Explore Items",
    };
  },
  methods: {
    updateColor(value) {
      this.colorValue = value;
    },
  },
};
</script>
