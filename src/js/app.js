import "../scss/app.scss";
import 'swiper/swiper-bundle.css';

import Swiper from 'swiper/bundle';
import bootstrap from "bootstrap";

const carouselProject = new Swiper('#carouselProject', {
    slidesPerView: 1.5,
    spaceBetween: 10,
    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: 40
        },
        990: {
            slidesPerView: 4
        }
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    }
});