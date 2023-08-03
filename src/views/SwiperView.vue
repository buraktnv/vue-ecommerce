<template lang="">
  <div>
    <base-swiper />
    <div class="container">
      <card-swiper>
        <el-carousel-item>
          <div class="card-list">
            <feedback-card />
            <feedback-card />
            <feedback-card />
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="card-list">
            <feedback-card />
            <feedback-card />
            <feedback-card />
          </div>
        </el-carousel-item>
      </card-swiper>
    </div>
  </div>
</template>
<script>
import BaseSwiper from "@/components/swiper/BaseSwiper.vue";
import CardSwiper from "@/components/swiper/CardSwiper.vue";
import FeedbackCard from "@/components/card/FeedbackCard.vue";

export default {
  name: "SwiperView",
  components: {
    BaseSwiper,
    CardSwiper,
    FeedbackCard,
  },
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 1280px;
  margin: 24px auto;
}

.card-list {
  @include grid-container(3, 24px);
}

.card {
  @include grid-item();
}
</style>
