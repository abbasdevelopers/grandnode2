import Vue from 'vue'
Vue.config.productionTip = true

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'animate.css'
import 'pikaday/css/pikaday.css'

import { LinkPlugin } from 'bootstrap-vue'
Vue.use(LinkPlugin)
import { CardPlugin } from 'bootstrap-vue'
Vue.use(CardPlugin)
import { ButtonPlugin } from 'bootstrap-vue'
Vue.use(ButtonPlugin)
import { ButtonGroupPlugin } from 'bootstrap-vue'
Vue.use(ButtonGroupPlugin)
import { LayoutPlugin } from 'bootstrap-vue'
Vue.use(LayoutPlugin)
import { ModalPlugin } from 'bootstrap-vue'
Vue.use(ModalPlugin)
import { SidebarPlugin } from 'bootstrap-vue'
Vue.use(SidebarPlugin)
import { CarouselPlugin } from 'bootstrap-vue'
Vue.use(CarouselPlugin)
import { DropdownPlugin } from 'bootstrap-vue'
Vue.use(DropdownPlugin)
import { FormCheckboxPlugin } from 'bootstrap-vue'
Vue.use(FormCheckboxPlugin)
import { FormRatingPlugin } from 'bootstrap-vue'
Vue.use(FormRatingPlugin)
import { FormFilePlugin } from 'bootstrap-vue'
Vue.use(FormFilePlugin)
import { ImagePlugin } from 'bootstrap-vue'
Vue.use(ImagePlugin)
import { ToastPlugin } from 'bootstrap-vue'
Vue.use(ToastPlugin)
import { TabsPlugin } from 'bootstrap-vue'
Vue.use(TabsPlugin)
import { CollapsePlugin } from 'bootstrap-vue'
Vue.use(CollapsePlugin)

import {
    BIcon,
    BIconAspectRatio,
    BIconCalendar2Check,
    BIconSearch,
    BIconTrash,
    BIconEnvelope,
    BIconHandThumbsDown,
    BIconHandThumbsUp,
    BIconHouseDoor,
    BIconList,
    BIconGrid3x2Gap,
    BIconXCircleFill,
    BIconClipboardPlus,
    BIconServer,
    BIconX,
    BIconHeart,
    BIconShuffle,
    BIconTruck,
    BIconQuestionCircle,
    BIconGear,
    BIconWrench,
    BIconCart,
    BIconCashStack,
    BIconCartCheck,
    BIconPerson,
    BIconFileEarmarkEasel,
    BIconFileEarmarkFont,
    BIconFileEarmarkCheck,
    BIconArrowReturnLeft,
    BIconCloudDownload,
    BIconSkipBackward,
    BIconChevronLeft,
    BIconTrophy,
    BIconPersonCircle,
    BIconFileRuled,
    BIconShop,
    BIconStar,
    BIconStarFill,
    BIconStarHalf,
    BIconPersonPlus,
    BIconHandbag,
    BIconLock,
    BIconShieldLock,
    BIconCartX,
    BIconCart2,
    BIconLayoutSidebarInset,
    BIconArrowClockwise,
    BIconFileEarmarkLock2,
    BIconFileEarmarkRuled,
    BIconMoon,
    BIconSun,
    BIconFileEarmarkRichtext,
    BIconHammer
} from 'bootstrap-vue'
Vue.component('BIcon', BIcon)
Vue.component('BIconAspectRatio', BIconAspectRatio)
Vue.component('BIconCalendar2Check', BIconCalendar2Check)
Vue.component('BIconSearch', BIconSearch)
Vue.component('BIconTrash', BIconTrash)
Vue.component('BIconEnvelope', BIconEnvelope)
Vue.component('BIconHandThumbsDown', BIconHandThumbsDown)
Vue.component('BIconHandThumbsUp', BIconHandThumbsUp)
Vue.component('BIconHouseDoor', BIconHouseDoor)
Vue.component('BIconList', BIconList)
Vue.component('BIconGrid3x2Gap', BIconGrid3x2Gap)
Vue.component('BIconXCircleFill', BIconXCircleFill)
Vue.component('BIconClipboardPlus', BIconClipboardPlus)
Vue.component('BIconServer', BIconServer)
Vue.component('BIconX', BIconX)
Vue.component('BIconHeart', BIconHeart)
Vue.component('BIconShuffle', BIconShuffle)
Vue.component('BIconTruck', BIconTruck)
Vue.component('BIconQuestionCircle', BIconQuestionCircle)
Vue.component('BIconGear', BIconGear)
Vue.component('BIconWrench', BIconWrench)
Vue.component('BIconCart', BIconCart)
Vue.component('BIconCashStack', BIconCashStack)
Vue.component('BIconCartCheck', BIconCartCheck)
Vue.component('BIconPerson', BIconPerson)
Vue.component('BIconFileEarmarkEasel', BIconFileEarmarkEasel)
Vue.component('BIconFileEarmarkFont', BIconFileEarmarkFont)
Vue.component('BIconFileEarmarkCheck', BIconFileEarmarkCheck)
Vue.component('BIconArrowReturnLeft', BIconArrowReturnLeft)
Vue.component('BIconCloudDownload', BIconCloudDownload)
Vue.component('BIconSkipBackward', BIconSkipBackward)
Vue.component('BIconChevronLeft', BIconChevronLeft)
Vue.component('BIconTrophy', BIconTrophy)
Vue.component('BIconPersonCircle', BIconPersonCircle)
Vue.component('BIconFileRuled', BIconFileRuled)
Vue.component('BIconShop', BIconShop)
Vue.component('BIconStar', BIconStar)
Vue.component('BIconStarFill', BIconStarFill)
Vue.component('BIconStarHalf', BIconStarHalf)
Vue.component('BIconPersonPlus', BIconPersonPlus)
Vue.component('BIconHandbag', BIconHandbag)
Vue.component('BIconLock', BIconLock)
Vue.component('BIconShieldLock', BIconShieldLock)
Vue.component('BIconCartX', BIconCartX)
Vue.component('BIconCart2', BIconCart2)
Vue.component('BIconLayoutSidebarInset', BIconLayoutSidebarInset)
Vue.component('BIconArrowClockwise', BIconArrowClockwise)
Vue.component('BIconFileEarmarkLock2', BIconFileEarmarkLock2)
Vue.component('BIconFileEarmarkRuled', BIconFileEarmarkRuled)
Vue.component('BIconMoon', BIconMoon)
Vue.component('BIconSun', BIconSun)
Vue.component('BIconFileEarmarkRichtext', BIconFileEarmarkRichtext)
Vue.component('BIconHammer', BIconHammer)

import { ValidationObserver, ValidationProvider } from 'vee-validate';
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

import { extend } from 'vee-validate';

extend('confirmed', {
    params: ['target'],
    // Target here is the value of the target field
    validate(value, { target }) {
        return value === target;
    },
    message: (fieldName) => {
        var text = vee_getMessage(fieldName, 'confirmed');
        if (text) {
            return text;
        }
        return 'The ' + fieldName + ' field confirmation does not match.'
    }
});

extend('email', {
    validate: value => {
        // if the field is empty
        if (!value) {
            return true;
        }
        // if the field is not a valid email
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
            return false;
        }
        // All is good
        return true;
    },
    message: (fieldName) => {
        var text = vee_getMessage(fieldName, 'email');
        if (text) {
            return text;
        }
        return 'This field must be a valid email.'
    }
});

extend('required', {
    params: ['allowFalse'],
    validate(value, { allowFalse }) {
        if (allowFalse !== undefined) {
            if (value === true && !allowFalse) {
                return {
                    required: true,
                    valid: ['', null, undefined].indexOf(value) === -1
                }
            }
        }
        else {
            return {
                required: true,
                valid: ['', null, undefined].indexOf(value) === -1
            };
        }
    },
    computesRequired: true,
    message: (fieldName) => {
        var text = vee_getMessage(fieldName, 'required');
        if (text) {
            return text;
        }
        return 'The ' + fieldName + ' field is required.'
    }
});

//ValidationExtend('min', min);
//ValidationExtend('confirmed', confirmed);

export function vee_getMessage(field, rule) {
    var element = document.getElementsByName(field);
    if (element && element[0]) {
        var text = element[0].getAttribute('data-val-' + rule);
        if (text)
            return text;
    }
}
// Override the default message.

import VueGallerySlideshow from 'vue-gallery-slideshow'

import axios from 'axios'
import Pikaday from 'pikaday'

window.axios = require('axios').default;
window.Pikaday = require('pikaday');
window.VueGallerySlideshow = VueGallerySlideshow;

import vueAwesomeCountdown from 'vue-awesome-countdown'
Vue.use(vueAwesomeCountdown, 'vac')

window.Vue = Vue;
