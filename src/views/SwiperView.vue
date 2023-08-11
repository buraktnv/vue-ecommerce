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
      <card-swiper
        height="450px"
        padding="24px"
        indicator-position="none"
        arrow="always"
      >
        <el-carousel-item>
          <div class="card-list -items-4">
            <base-card :card-detail="cardDetail" />
            <base-card :card-detail="cardDetail" />
            <base-card :card-detail="cardDetail" />
            <base-card :card-detail="cardDetail" />
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="card-list -items-4">
            <base-card :card-detail="cardDetail2" />
            <base-card :card-detail="cardDetail2" />
            <base-card :card-detail="cardDetail2" />
            <base-card :card-detail="cardDetail2" />
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="card-list -items-4">
            <base-card :card-detail="cardDetail3" />
            <base-card :card-detail="cardDetail3" />
            <base-card :card-detail="cardDetail3" />
            <base-card :card-detail="cardDetail3" />
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
  data() {
    return {
      cardDetail: {
        img: "https://s3-alpha-sig.figma.com/img/ac5f/e2dd/10de37f6691ba79a3bff6e3d1634a475?Expires=1691971200&Signature=SPyRefBKjvZ7rlYzfHZk32oj3Ney-etU9jwkN3bCVoYFsdtexHp~PdCbBl21o~YG6ZwDjCg-DLDX3NegZdPAuU6-zzLvHcpXA7ps-oFfBJrjFgdfBX5WwQ89e7~dtoSseBT7-du9AkN3ioqbE4jwc6dGFWsI5Heg-v5DL4HvJ9Hy3czzsedflIGIBILZL~QrRtMi6Pvqjx31Nr9cxBNdRjdEroPfr954uQtVVwJq5Xag5jfpwH~Yoaq2Byq054clRc1D26AWIYMiRK9hqdvj3kdHnrziK4~ybwTAw1crm2MMNmh8vamzGGP9~2xGfzm-gErpV1aII5t0HC9qt78WLQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        title: "Shirts",
        subTitle: "",
        goToWithLink: "#",
        money: null,
        favorite: false,
      },
      cardDetail2: {
        img: "https://s3-alpha-sig.figma.com/img/ac5f/e2dd/10de37f6691ba79a3bff6e3d1634a475?Expires=1691971200&Signature=SPyRefBKjvZ7rlYzfHZk32oj3Ney-etU9jwkN3bCVoYFsdtexHp~PdCbBl21o~YG6ZwDjCg-DLDX3NegZdPAuU6-zzLvHcpXA7ps-oFfBJrjFgdfBX5WwQ89e7~dtoSseBT7-du9AkN3ioqbE4jwc6dGFWsI5Heg-v5DL4HvJ9Hy3czzsedflIGIBILZL~QrRtMi6Pvqjx31Nr9cxBNdRjdEroPfr954uQtVVwJq5Xag5jfpwH~Yoaq2Byq054clRc1D26AWIYMiRK9hqdvj3kdHnrziK4~ybwTAw1crm2MMNmh8vamzGGP9~2xGfzm-gErpV1aII5t0HC9qt78WLQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        title: "Shirts",
        subTitle: "Explore Now!",
        goToWithLink: "#",
        money: 23,
        favorite: false,
      },
      cardDetail3: {
        img: "https://s3-alpha-sig.figma.com/img/ac5f/e2dd/10de37f6691ba79a3bff6e3d1634a475?Expires=1691971200&Signature=SPyRefBKjvZ7rlYzfHZk32oj3Ney-etU9jwkN3bCVoYFsdtexHp~PdCbBl21o~YG6ZwDjCg-DLDX3NegZdPAuU6-zzLvHcpXA7ps-oFfBJrjFgdfBX5WwQ89e7~dtoSseBT7-du9AkN3ioqbE4jwc6dGFWsI5Heg-v5DL4HvJ9Hy3czzsedflIGIBILZL~QrRtMi6Pvqjx31Nr9cxBNdRjdEroPfr954uQtVVwJq5Xag5jfpwH~Yoaq2Byq054clRc1D26AWIYMiRK9hqdvj3kdHnrziK4~ybwTAw1crm2MMNmh8vamzGGP9~2xGfzm-gErpV1aII5t0HC9qt78WLQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        title: "Shirts",
        subTitle: "Explore Now!",
        goToWithLink: "#",
        money: undefined,
        favorite: false,
      },
    };
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
    padding: 0px 32px;
  }
}

.card {
  @include grid-item();
}
</style>
