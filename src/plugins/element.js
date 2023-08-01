import Vue from "vue";
import { Rate, Radio, RadioGroup } from "element-ui";
import lang from "element-ui/lib/locale/lang/tr-TR";
import locale from "element-ui/lib/locale";

locale.use(lang);

Vue.use(Rate);

Vue.use(Radio);
Vue.use(RadioGroup);
