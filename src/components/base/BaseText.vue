<template>
  <p
    class="text"
    :class="[
      getFontSize,
      getFontFamily,
      getFontWeight,
      getColor,
      getLineHeight,
    ]"
  >
    {{ text }}
  </p>
</template>

<script>
export default {
  name: "baseText",
  props: {
    text: {
      type: String,
      required: true,
    },
    fontSize: {
      type: String,
      required: false,
      validator: (value) =>
        [
          "12",
          "14",
          "16",
          "18",
          "20",
          "24",
          "32",
          "40",
          "48",
          "56",
          "78",
        ].includes(value),
    },
    fontFamily: {
      type: String,
      validator: (value) => ["primary", "secondary"].includes(value),
    },
    lineHeight: {
      type: String,
      validator: (value) =>
        [
          "lh10",
          "lh11",
          "lh12",
          "lh13",
          "lh14",
          "lh15",
          "lh16",
          "lh17",
          "lh18",
          "lh19",
          "lh20",
        ].includes(value),
    },
    fontWeight: {
      type: String,
      validator: (value) =>
        ["regular", "medium", "semibold", "bold", "heavy"].includes(value),
    },
    color: {
      type: String,
      validator: (value) =>
        [
          "capeCod",
          "empress",
          "paleSlate",
          "athensGray",
          "white",
          "black",
          "wildSand",
          "electricViolet",
          "ronchi",
          "carissma",
          "merlot",
          "gray",
        ].includes(value),
    },
  },
  computed: {
    getFontSize() {
      return this.fontSize && `-fs${this.fontSize}`;
    },
    getFontFamily() {
      return this.fontFamily && `-${this.fontFamily}`;
    },
    getFontWeight() {
      return this.fontWeight && `-${this.fontWeight}`;
    },
    getColor() {
      return this.color && `-${this.color}`;
    },
    getLineHeight() {
      return this.lineHeight && `-${this.lineHeight}`;
    },
  },
};
</script>

<style lang="scss" scoped>
/* Primary Font Family Styles */
$colors: (
  "white": $white,
  "black": $black,
  "capeCod": $capeCod,
  "empress": $empress,
  "paleSlate": $paleSlate,
  "athensGray": $athensGray,
  "wildSand": $wildSand,
  "electricViolet": $electricViolet,
  "ronchi": $ronchi,
  "carissma": $carissma,
  "merlot": $merlot,
  "gray": $gray,
);

$font-sizes: (
  "fs12": 12px,
  "fs14": 14px,
  "fs16": 16px,
  "fs18": 18px,
  "fs20": 20px,
  "fs24": 24px,
  "fs32": 32px,
  "fs40": 40px,
  "fs48": 48px,
  "fs56": 56px,
  "fs78": 78px,
);

$line-heights: (
  "lh10": 1,
  "lh11": 1.1,
  "lh12": 1.2,
  "lh13": 1.3,
  "lh14": 1.4,
  "lh15": 1.5,
  "lh16": 1.6,
  "lh17": 1.7,
  "lh18": 1.8,
  "lh19": 1.9,
  "lh20": 2,
);

$font-weights: (
  "regular": 400,
  "medium": 500,
  "semibold": 600,
  "bold": 700,
  "heavy": 800,
);
.text {
  font-family: $primary-font;
  font-weight: $font-semibold;

  white-space: pre-line;
  /* Default Font Size */
  font-size: 16px;

  /* Font Families */
  &.-secondary {
    font-family: $secondary-font;
  }

  /* Font Colors */
  @each $name, $color in $colors {
    &.-#{$name} {
      color: $color;
    }
  }

  /* Line Heights */
  @each $name, $height in $line-heights {
    &.-#{$name} {
      line-height: $height;
    }
  }

  /* Font Weights */
  @each $name, $weight in $font-weights {
    &.-#{$name} {
      font-weight: $weight;
    }
  }

  /* Font Sizes */
  @each $name, $size in $font-sizes {
    &.-#{$name} {
      font-size: $size;
    }
  }
}
</style>
