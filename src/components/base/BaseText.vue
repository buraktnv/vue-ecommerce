<template>
  <p
    :class="[
      'text',
      !!fontSize ? `-fs${fontSize}` : '',
      !!fontFamily && `-${fontFamily}`,
      !!fontWeight && `-${fontWeight}`,
    ]"
  >
    {{ text }}
  </p>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    fontSize: {
      type: String,
      validator: (value) =>
        ["12", "16", "14", "20", "24", "32", "40", "48", "56"].includes(value),
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
  },
};
</script>

<style scoped lang="scss">
/* Primary Font Family Styles */

.text {
  font-family: $primary-font;
  font-weight: $font-semibold;

  /* Default Font Size */
  font-size: 16px;

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
  &.-fs12 {
    font-size: 12px;
  }
  &.-fs14 {
    font-size: 14px;
  }
  &.-fs20 {
    font-size: 20px;
  }
  &.-fs24 {
    font-size: 24px;
  }
  &.-fs32 {
    font-size: 32px;
  }
  &.-fs40 {
    font-size: 40px;
  }
  &.-fs48 {
    font-size: 48px;
  }
  &.-fs56 {
    font-size: 56px;
  }

}
</style>
