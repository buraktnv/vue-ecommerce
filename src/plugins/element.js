import Vue from "vue";
import { Rate, Radio, RadioGroup, Carousel, CarouselItem } from "element-ui";
import lang from "element-ui/lib/locale/lang/tr-TR";
import locale from "element-ui/lib/locale";

locale.use(lang);
/* Rating */
Vue.use(Rate);
/* Radio Group */
Vue.use(Radio);
Vue.use(RadioGroup);
/* Carosel */
Vue.use(Carousel);
Vue.use(CarouselItem);
