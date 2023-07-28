<!-- Sample use:
<CustomInput
      display-type="flex"
      width="567px"
      height="58px"
      padding="16px 20px"
      gap="12px"
      border="1px solid #3C4242"
      text-align="center"
      font-family="Poppins"
      font-size="14px"
      font-style="normal"
      font-weight="400"
      line-height="normal"
    /> 
    -->

<template>
  <div
    class="input-wrapper"
    :style="{
      display: displayType,
      width: width,
      height: height,
      padding: padding,
      justifyContent: justifyContent,
      alignItems: alignItems,
      gap: gap,
      borderRadius: borderRadius,
      border: border,
      background: background,
    }"
  >
    <img v-if="icon" :src="iconSrc" class="input-icon" />
    <input
      :type="type"
      class="custom-input"
      :placeholder="placeholder"
      :style="{
        color: color,
        textAlign: textAlign,
        fontFamily: fontFamily,
        fontSize: fontSize,
        fontStyle: fontStyle,
        fontWeight: fontWeight,
        lineHeight: lineHeight,
      }"
    />
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: Boolean,
      default: false,
    },
    iconSrc: {
      type: String,
      default: "",
    },
    displayType: {
      type: String,
      default: "flex",
    },
    width: {
      type: String,
      default: "100%",
    },
    height: {
      type: String,
      default: "auto",
    },
    padding: {
      type: String,
      default: "0",
    },
    justifyContent: {
      type: String,
      default: "center",
    },
    alignItems: {
      type: String,
      default: "center",
    },
    gap: {
      type: String,
      default: "0",
    },
    borderRadius: {
      type: String,
      default: "8px",
    },
    border: {
      type: String,
      default: "none",
    },
    background: {
      type: String,
      default: "transparent",
    },
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: "#000",
    },
    textAlign: {
      type: String,
      default: "left",
    },
    fontFamily: {
      type: String,
      default: "Arial",
    },
    fontSize: {
      type: String,
      default: "16px",
    },
    fontStyle: {
      type: String,
      default: "normal",
    },
    fontWeight: {
      type: [String, Number],
      default: "normal",
    },
    lineHeight: {
      type: String,
      default: "normal",
    },
  },
};
</script>

<style scoped lang="scss">
.input-wrapper {
  box-sizing: border-box;
  position: relative;
}

.custom-input {
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  outline: none;
}

.input-icon {
  height: 20px;
  width: 20px;
}
</style>
