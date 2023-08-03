<template>
  <div>
    <el-carousel :interval="5000" arrow="always">
      <el-carousel-item v-for="item in 2" :key="item">
        <div class="card">
          <img class="card__image" :src="caroselItem.img" alt="" />
          <div class="card__content">
            <base-text
              color="white"
              :text="caroselItem.category"
              font-weight="medium"
              font-size="32"
            />
            <base-text
              color="white"
              :text="caroselItem.adTitle"
              font-weight="bold"
              line-height="lh12"
              font-size="78"
            />
            <base-text
              color="white"
              :text="caroselItem.labels"
              font-size="32"
              font-weight="medium"
            />
            <button>Shop Now</button>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
import BaseText from "@/components/base/BaseText.vue";
export default {
  name: "baseSwiper",
  components: {
    BaseText,
  },
  data() {
    return {
      caroselItem: {
        img: "https://s3-alpha-sig.figma.com/img/96c8/6912/d491d421800e62998b9af7c838cc25d1?Expires=1691971200&Signature=oyl6~uO0yNGti~7EKw6UCO~m8tT1y8qVAzVQgyVnDurJQlCHRPNDM4vluNHrQTMGshaH~bBh6R9zuh~n15ZvPaz9jLkupp-wTv2QQCkHPGWv45JOhc7Bg1Zg9EFC7JRd8tL21rLOmsJrmGZjAO5TY02VChbOid5serSFFG3hZK7K1BruGH6~GFYqjtM7w5K4Ox3YTfuY1i2h0JEl7whMuZnDFP9cGgTWx98S3R4GwZ-sUm5fqR~G79oBn6VWvdkDHVU~RJiSac-S2KgQvvd~WFfvcPKYpULWysXdc-ZMWpNQhw7XM~Q32ceZ0174kmkhgPZPWG1~atpWKqkcCBz1hA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        category: "T-Shirt / Tops",
        adTitle: "Summer \n Value Pack",
        labels: "cool / colorful / comfy",
        button: "Shop Now",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.card {
  padding-left: 200px;
  padding-top: 130px;
  position: relative;
  &__image {
    position: absolute;
    inset: 0px;
    width: 100%;
    z-index: -1;
    object-fit: scale-down;
  }
  &__content {
    @include flex(column, baseline, baseline, nowrap, 40px);
  }
}
</style>

<style lang="scss">
.el-carousel__container {
  height: 720px !important;
}

.el-carousel__indicator--horizontal {
  padding: 12px 1px !important;

  .el-carousel__button {
    height: 5px !important;
    border-radius: 32px;
  }
}

.el-carousel__arrow {
  background-color: transparent !important;
  font-size: 32px !important;
}
</style>
