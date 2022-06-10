import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const Services = () => {
    return (
        <section class="position-relative service__section  pb-90">
            <div class=" service___bg">
                <img src="images/service__bg.jpg" alt="" class="img-fluid" />
            </div>
            <div class="service__full__content">
                <div class="container">
                    <div class="row pb-30">
                        {/* <!-- Theme Heading --> */}
                        <div class="theme-heading text-center ">
                            <div class="text-uppercase ">Our services</div>
                            <h3><span class="heading-shape">our services</span></h3>

                        </div>
                        <p class="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tempor
                            incididunt ut labore
                            et dolore magna aliqua.</p>
                        {/* <!-- Theme Heading --> */}
                    </div>



                    <Swiper
                        spaceBetween={50}
                        slidesPerView={3}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide>
                            <div class="sevice__box__single theme-hover">
                                <figure>
                                    <img src="images/service-4.jpg" class="img-fluid w-100" alt="" />

                                    <figcaption>
                                        <div class="content">
                                            <div class="service__content__box">
                                                <span>Outdoor Photography</span>

                                                <div class="custom__btn">
                                                    <a href="contact.html" class=" ">Start Project</a>
                                                </div>

                                            </div>
                                        </div>
                                    </figcaption>
                                </figure>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>Slide 2</SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                        <SwiperSlide>Slide 4</SwiperSlide>

                    </Swiper>


                </div>
            </div>

        </section>
    );
};

export default Services;