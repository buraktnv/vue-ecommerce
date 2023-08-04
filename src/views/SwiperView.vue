<template lang="">
  <div>
    <base-swiper />
    <div class="container">
      <base-title typical="title -suedo">Feedback</base-title>
      <card-swiper height="380px" arrow="never">
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
        <el-carousel-item>
          <div class="card-list">
            <feedback-card />
            <feedback-card />
            <feedback-card />
          </div>
        </el-carousel-item>
      </card-swiper>
    </div>
    <div class="container">
      <base-title typical="title -suedo">Categories For Men</base-title>
      <card-swiper height="450px" indicator-position="none" arrow="always">
        <el-carousel-item>
          <div class="card-list -items-4">
            <base-card />
            <base-card />
            <base-card />
            <base-card :money="24" />
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="card-list -items-4">
            <base-card />
            <base-card />
            <base-card />
            <base-card :money="24" />
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="card-list -items-4">
            <base-card />
            <base-card />
            <base-card />
            <base-card :money="24" />
          </div>
        </el-carousel-item>
      </card-swiper>
    </div>
  </div>
</template>
<script>
import BaseTitle from "@/components/base/BaseTitle.vue";
import BaseSwiper from "@/components/swiper/BaseSwiper.vue";
import CardSwiper from "@/components/swiper/CardSwiper.vue";
import FeedbackCard from "@/components/card/FeedbackCard.vue";
import BaseCard from "@/components/card/BaseCard.vue";
export default {
  name: "SwiperView",
  components: {
    BaseSwiper,
    CardSwiper,
    FeedbackCard,
    BaseTitle,
    BaseCard,
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

  &.-items-4 {
    @include grid-container(4, 24px);
    padding: 0px 12px;
  }
}

.card {
  @include grid-item();
}
</style>
