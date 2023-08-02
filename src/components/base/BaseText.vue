<template>
  <p
    class="text"
    :class="[getFontSize, getFontFamily, getFontWeight, getColor]"
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
        ["12", "16", "14", "20", "24", "32", "40", "48", "56", "78"].includes(
          value
        ),
    },
    fontFamily: {
      type: String,
      validator: (value) => ["primary", "secondary"].includes(value),
    },
    lineHeight: {
      type: String,
    },
    fontWeight: {
      type: String,
      validator: (value) =>
        ["regular", "medium", "semibold", "bold"].includes(value),
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
);

$font-sizes: (
  "fs12": 12px,
  "fs14": 14px,
  "fs16": 16px,
  "fs20": 20px,
  "fs24": 24px,
  "fs32": 32px,
  "fs40": 40px,
  "fs48": 48px,
  "fs56": 56px,
  "fs78": 78px,
);
.text {
  font-family: $primary-font;
  font-weight: $font-semibold;

  white-space: pre-line;
  /* Default Font Size */
  font-size: 16px;

  /* colors */

  @each $name, $color in $colors {
    &.-#{$name} {
      color: $color;
    }
  }

  /* Secondary Font Family Styles */
  &.-secondary {
    font-family: $secondary-font;
    font-weight: $font-bold;
  }

  &.-regular {
    font-weight: $font-regular;
  }

  &.-medium {
    font-weight: $font-medium;
  }

  /* Font Size Options */
  @each $name, $size in $font-sizes {
    &.-#{$name} {
      font-size: $size;
    }
  }
}
</style>
