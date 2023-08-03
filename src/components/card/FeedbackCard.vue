<template lang="">
  <div class="card">
    <div class="card__header">
      <img class="card__image" :src="img" alt="profile picture" />
      <el-rate class="card__rate" v-model="rate" disabled />
    </div>
    <div class="card__content">
      <base-text
        font-weight="medium"
        font-size="24"
        :text="name + ' ' + surname"
      />
      <base-text
        font-weight="regular"
        font-size="14"
        color="empress"
        :text="comment"
      />
    </div>
  </div>
</template>
<script>
import BaseText from "../base/BaseText";
export default {
  name: "FeedbackCard",
  components: {
    BaseText,
  },
  props: {
    img: {
      type: String,
      default:
        "https://s3-alpha-sig.figma.com/img/5412/a2bc/c1a0b62fe5e42bf0f9af1ac1d77a35ab?Expires=1691971200&Signature=eoT9ElDoZfHprRaJO1T4SRXqXguiEMU5LZJKfGl0Fa-kgW9ww~dJBNwXwwqmBbEWJEUNPUxD-82g5k0iqex-lnGOIjNxGW6Kh-KfWqNFf00dwuLkO1tlGFs69STXOwE6u074P5SxqlK1ggoDhUG-mqe2t3uioDDO6xmLMb~IesVNDr11U9gZTxbreOBBj1seozX2BRVVv9GV6JAiop65wk~b3Xw-X9V3bPMKC7hxXeqVjbvF-t8toZc9C5NteqjIc9fpjt7Pxs-DhquYqu07aI~zWmbK5MejOe71jkITj7ApQmnm9hZu91L87j8QiftuCRtsDrcJb0tval6SMkUqsg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      required: true,
    },
    rate: {
      type: Number,
      default: 3.7,
      required: true,
    },
    name: {
      type: String,
      default: "Floyd",
      required: true,
    },
    surname: {
      type: String,
      default: "Miles",
      required: true,
    },
    comment: {
      type: String,
      default:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. \nExercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.card {
  padding: 24px;
  border: 2px solid $paleSlate;
  border-radius: 10px;

  &__header {
    @include flex(row, space-between, start);
    padding-bottom: 20px;
  }

  &__content {
    @include flex(column, auto, auto, auto, 20px);
  }
}
</style>

<style>
.el-rate__icon {
  font-size: 28px !important;
}
</style>
