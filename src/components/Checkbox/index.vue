<template>
    <label class="checkbox">
        <input class="checkbox__input" type="checkbox" :checked="isChecked" @change="handleChange">
        <span class="checkmark"></span>
        <p class="checkbox__label" v-html="htmlContent"></p>
    </label>
</template>

<script>
export default {
    name: "Checkbox",
    props: {
        htmlContent: String,
        value: Boolean,
    },
    data() {
        return {
            isChecked: this.value,
        };
    },
    methods: {
        handleChange(e) {
            this.isChecked = e.target.checked;
            this.$emit("input", this.isChecked);
            console.log(this.isChecked);
        }
    }
}
</script>

<style lang="scss" scoped>

.checkbox{
    display: block;
    position: relative;
    padding-left: 35px;
    padding-right: 12px;
    cursor: pointer;
    font-size: 18px;
    color: $empress;

    & .checkmark::after {
        left: 7px;
        top: 3px;
        width: 5px;
        height: 10px;
        border: solid $white;
        border-width: 0 2px 2px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }

    & input {
        position: absolute;
        opacity: 0;
        height: 0;
        width: 0;

        &:checked ~ .checkmark {
            background-color: $capeCod;

            &::after {
                display: block;
            }
        }
    }
}

.checkmark{
    position: absolute;
    top: 0;
    left: 0;
    height: 18px;
    width: 18px;
    background-color: $capeCod;

    &::after {
        content: "";
        position: absolute;
        display: none;
    }
}

.checkbox__label > a{
    text-decoration: underline;
    text-decoration-color: $empress;
}
</style>