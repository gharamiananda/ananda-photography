import React from 'react';

const About = () => {
    return (
        <section class="about__section pt-120 pb-90">
            <div class="container">
                <div class="row justify-content-between">
                    <div class="col-lg-5 col-md-6">
                        <div class="about-drone-three pb-30">
                            <div class="about-drone-three-media"><img src="images/about.jpg" alt="" class="img-fluid" /></div>
                            <div class="about-drone-three-info"><span>HD 4K</span><strong>since 2002</strong></div>
                        </div>
                    </div>
                    <div class="col-lg-7 col-md-6 ps-3 ">
                        <div class="about-section-one-right pb-30">
                            {/* <!-- TITLE START--> */}
                            <div class="left wt-small-separator-outer">


                                <div class="theme-heading hidden-xs text-uppercase">
                                    <div>About Us</div>
                                    <h3><span class="heading-shape">About Us</span></h3>
                                </div>


                                <h2 class="section__title">Welcome to <span>Malcolm <br /> Parnham</span> Photography</h2>
                                <p>My aim is to make quality, professional photography accessible to everyone, so I offer
                                    tailored packages to suit all budgets and needs.

                                    I love photographing people and increasingly specialise in this area. As well as
                                    shooting families and groups of friends, I take individual portraits of people of all
                                    ages including babies, children and adults in black and white or colour and in many
                                    different styles.
                                </p>


                            </div>
                            {/* <!-- TITLE END--> */}

                            <ul class="site-list-style-one icon-style">
                                <li><img src="images/people.png" alt="" /> <span> Work to the desires of the individual
                                    customer</span> </li>
                                <li><img src="images/camera.png" alt="" /> <span> We have portable studio equipment that can
                                    be
                                    set up where it is desirable</span> </li>
                                <li><img src="images/think-different.png" alt="" /> <span> Coming up with unique ideas and
                                    techniques.</span> </li>
                            </ul>


                            <div class="custom__btn">
                                <a href="contact.html" class=" ">Start Project</a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;