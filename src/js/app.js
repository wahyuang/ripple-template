import "../scss/app.scss";
import 'swiper/swiper-bundle.css';

import Swiper from 'swiper';
import bootstrap from "bootstrap";

const carouselProject = new Swiper('#carouselProject', {
    slidesPerView: 4,
    spaceBetween: 40
});