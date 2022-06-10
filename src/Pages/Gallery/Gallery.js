import React from 'react';

const Gallery = () => {
    return (
        <section class="gallery__section pt-120 pb-90">
            <div class="container">
                <div class="row pb-30">
                    {/* <!-- Theme Heading --> */}
                    <div class="theme-heading text-center ">
                        <div class="text-uppercase "> GALLERY</div>
                        <h3><span class="heading-shape"> PORTFOLIO</span></h3>


                    </div>
                    <p class="text-center">What Some People Say About Us....</p>
                    {/* <!-- Theme Heading --> */}
                </div>

                <div class=" g-4 project__grid row ">

                    <div class="col-md-6 col-lg-4">
                        <div class=" project-grid-item photography web gallery__item__two">
                            <div class="project-item">
                                <img class="img-fluid" src="images/IMG1.jpg" alt="" />
                                <a class="image-popup" data-fancybox="gallery" href="images/IMG1.jpg"><i
                                    class="fa fa-arrow-right"></i></a>
                                <div class="project-item-inner">
                                    <h4> Fridge repair service</h4>
                                </div>
                            </div>
                        </div>
                        <div class="project-grid-item brand app gallery__item__one ">
                            <div class="project-item">
                                <img class="img-fluid" src="images/IMG.jpg" alt="" />
                                <a class="image-popup" data-fancybox="gallery" href="images/IMG.jpg"><i
                                    class="fa fa-arrow-right"></i></a>
                                <div class="project-item-inner">
                                    <h4> Fridge repair service</h4>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class=" project-grid-item web brand gallery__item__three">
                            <div class="project-item">
                                <img class="img-fluid" src="images/IMG2.jpg" alt="" />
                                <a class="image-popup" data-fancybox="gallery" href="images/IMG2.jpg"><i
                                    class="fa fa-arrow-right"></i></a>
                                <div class="project-item-inner">
                                    <h4> Fridge repair service</h4>
                                </div>
                            </div>
                        </div>
                        <div class=" project-grid-item photography brand gallery__item__five">
                            <div class="project-item">
                                <img class="img-fluid" src="images/project-item-6.jpg" alt="" />
                                <a class="image-popup" data-fancybox="gallery" href="images/project-item-6.jpg"><i
                                    class="fa fa-arrow-right"></i></a>
                                <div class="project-item-inner">
                                    <h4> Fridge repair service</h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-12 col-lg-4 gy-lg-4 gy-0">

                        <div class="row">
                            <div class="col-lg-12 col-md-6">
                                <div class=" project-grid-item brand web gallery__item__six">
                                    <div class="project-item ">
                                        <img class="img-fluid" src="images/IMG5.jpg" alt="" />
                                        <a class="image-popup" data-fancybox="gallery" href="images/IMG5.jpg"><i
                                            class="fa fa-arrow-right"></i></a>
                                        <div class="project-item-inner">
                                            <h4> Fridge repair service</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12 col-md-6">
                                <div class="project-grid-item app photography gallery__item__four">
                                    <div class="project-item">
                                        <img class="img-fluid" src="images/IMG4.jpg" alt="" />
                                        <a class="image-popup" data-fancybox="gallery" href="images/IMG4.jpg"><i
                                            class="fa fa-arrow-right"></i></a>
                                        <div class="project-item-inner">
                                            <h4> Fridge repair service</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;