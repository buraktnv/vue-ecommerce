<template>
  <div class="card">
    <img class="card__image" :src="cardDetail.img" alt="" />
    <div class="card__content">
      <div class="card__content__text-group">
        <base-text font-size="18" :text="cardDetail.title" />
        <base-text font-size="14" color="gray" :text="cardDetail.subTitle" />
      </div>
      <button class="card__button" v-if="typeof cardDetail.money === 'number'">
        <base-text
          font-size="14"
          font-weight="bold"
          :text="`$` + cardDetail.money.toFixed(2)"
        />
      </button>
      <svg
        v-if="typeof cardDetail.money === 'undefined'"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.16675 10H15.0001M10.8334 5L15.2442 9.41074C15.5696 9.73618 15.5696 10.2638 15.2442 10.5893L10.8334 15"
          stroke="#3C4242"
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </svg>
    </div>
    <div
      class="card__favorite"
      :class="[`-${isFavorite}`]"
      v-if="typeof cardDetail.money === 'number'"
    >
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="17.1291" cy="16.9111" r="16.1796" fill="white" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16.7198 12.7121C15.345 11.1099 13.0523 10.6789 11.3298 12.146C9.60723 13.6131 9.36472 16.0661 10.7174 17.8013C11.8422 19.244 15.2459 22.2867 16.3615 23.2716C16.4863 23.3817 16.5487 23.4368 16.6215 23.4585C16.685 23.4774 16.7545 23.4774 16.8181 23.4585C16.8909 23.4368 16.9533 23.3817 17.0781 23.2716C18.1936 22.2867 21.5974 19.244 22.7221 17.8013C24.0748 16.0661 23.8619 13.5977 22.1098 12.146C20.3576 10.6943 18.0946 11.1099 16.7198 12.7121Z"
          stroke="#3C4242"
          class="favorite-svg"
          stroke-width="1.26066"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  </div>
</template>
<script>
import BaseText from "../base/BaseText.vue";

export default {
  name: "baseCard",
  components: {
    BaseText,
  },
  props: ["cardDetail"],
};
</script>
<style lang="scss" scoped>
.card {
  @include flex(column, auto, auto, nowrap, $sp-md);
  width: 270px;
  position: relative;
  cursor: pointer;
  &__image {
    width: 100%;
    border-radius: 10px;
  }

  &__content {
    @include flex(row, space-between, center, nowrap);
  }

  &__button {
    @include flex(row, center, center);
    padding: 10px 16px;
    background-color: $wildSand;
    border-radius: 8px;
    border: none;
    cursor: pointer;
  }
  &__favorite {
    position: absolute;
    right: 20px;
    top: 20px;

    .favorite-svg {
      cursor: pointer;
      transition: 0.2s ease-in-out;
      &:hover {
        fill: $electricViolet;
      }
    }
  }
}
</style>
