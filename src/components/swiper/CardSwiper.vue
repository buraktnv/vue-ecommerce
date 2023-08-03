<template>
  <div class="card-swiper">
    <el-carousel :interval="5000" arrow="never">
      <slot />
    </el-carousel>
  </div>
</template>
<script>
import BaseText from "@/components/base/BaseText.vue";
import FeedbackCard from "../card/FeedbackCard.vue";
export default {
  name: "cardSwiper",
  components: {
    BaseText,
    FeedbackCard,
  },
};
</script>

<style lang="scss">
.card-swiper {
  .el-carousel__container {
    height: 400px !important;
  }

  .el-carousel__indicator--horizontal {
    padding: 12px 5px !important;

    .el-carousel__button {
      background-color: $empress;
      height: 10px !important;
      width: 10px !important;
      border-radius: 32px;
    }
  }
}
</style>
