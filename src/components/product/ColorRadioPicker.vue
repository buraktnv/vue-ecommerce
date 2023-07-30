<template>
  <div class="color-radio-picker">
    <el-radio-group v-model="radio">
      <el-radio
        :class="`-${color}`"
        :label="color"
        v-for="(color, index) in colors"
        :key="index"
      />
    </el-radio-group>
  </div>
</template>
<script>
export default {
  name: "ColorRadioPicker",
  data() {
    return {
      radio: "capeCod",
      colors: ["capeCod", "paleSlate", "athensGray", "electricViolet"],
    };
  },
};
</script>
<!-- Scoped is not working at all -->
<style lang="scss">
.color-radio-picker {
  .el-radio {
    margin-right: 0px !important;

    &.-capeCod {
      .el-radio__inner {
        background: $capeCod !important;

        &::after {
          background-color: $capeCod !important;
        }
      }
      .el-radio__input.is-checked .el-radio__inner {
        border-color: $capeCod !important;
      }
    }

    &.-paleSlate {
      .el-radio__inner {
        background: $paleSlate !important;

        &::after {
          background-color: $paleSlate !important;
        }
      }
      .el-radio__input.is-checked .el-radio__inner {
        border-color: $paleSlate !important;
      }
    }

    &.-athensGray {
      .el-radio__inner {
        background: $athensGray !important;

        &::after {
          background-color: $athensGray !important;
        }
      }
      .el-radio__input.is-checked .el-radio__inner {
        border-color: $athensGray !important;
      }
    }

    &.-wildSand {
      .el-radio__inner {
        background: $wildSand !important;

        &::after {
          background-color: $wildSand !important;
        }
      }
      .el-radio__input.is-checked .el-radio__inner {
        border-color: $wildSand !important;
      }
    }

    &.-electricViolet {
      .el-radio__inner {
        background: $electricViolet !important;

        &::after {
          background-color: $electricViolet !important;
        }
      }
      .el-radio__input.is-checked .el-radio__inner {
        border-color: $electricViolet !important;
      }
    }

    &.-ronchi {
      .el-radio__inner {
        background: $ronchi !important;

        &::after {
          background-color: $ronchi !important;
        }
      }
      .el-radio__input.is-checked .el-radio__inner {
        border-color: $ronchi !important;
      }
    }

    &.-carissma {
      .el-radio__inner {
        background: $carissma !important;

        &::after {
          background-color: $carissma !important;
        }
      }
      .el-radio__input.is-checked .el-radio__inner {
        border-color: $carissma !important;
      }
    }

    &.-merlot {
      .el-radio__inner {
        background: $merlot !important;

        &::after {
          background-color: $merlot !important;
        }
      }
      .el-radio__input.is-checked .el-radio__inner {
        border-color: $merlot !important;
      }
    }
  }

  .el-radio__label {
    display: none;
  }

  .el-radio__input {
    &.is-checked .el-radio__inner {
      border: 2px solid rgb(253, 109, 109) !important;
      background: white !important;
    }

    .el-radio__inner {
      background: pink !important;
      border: 3px solid white !important;
      width: 30px;

      height: 30px;
      &::after {
        width: 75%;
        height: 75%;
        background-color: rgb(245, 115, 115);
      }
    }
  }
}
</style>
