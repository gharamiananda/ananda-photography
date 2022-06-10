import React from 'react';

const Header = () => {
    return (
        <section class="banner-section  text-white">

            {/* <!-- Header start  --> */}
            <header>

                <div class="header__bottom ">
                    <nav class="navbar navbar-expand-lg navbar-light  custom__nav">
                        <div class="container">

                            <a class="navbar-brand" href="#">Ananda<img src="images/logo-removebg-preview (1).png" alt="" /> </a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav ms-auto mb-2 mb-lg-0 position-relative">
                                    <li class="nav-item">
                                        <a class="nav-link active" aria-current="page" href="#"><span>Home</span></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#"><span>About</span></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#"><span>Gallery</span></a>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            <span>Our Services</span>
                                        </a>
                                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">

                                            <li><a class="dropdown-item" href="#"> COMMERCIAL REPAIRS</a></li>
                                            <li>
                                                <hr class="dropdown-divider" />
                                            </li>
                                            <li><a class="dropdown-item" href="#"> DOMESTIC REPAIRS</a></li>
                                        </ul>

                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#"><span>Contact</span></a>
                                    </li>

                                </ul>


                            </div>
                        </div>
                    </nav>
                </div>
            </header>
            {/* <!-- Header End --> */}

            {/* <div class="owl-carousel owl-theme my-slider">
                <div class="item c" style="background: url(./images/banner-3.jpg)  center / cover">
                    <div class="container">


                        <div class="row">
                            <div class="col-md-7 ">
                                <div class="banner-single container ">
                                    <h5 class="banner_subtitle">our team are here to help</h5>
                                    <h2 class="banner-title">Malcolm Parnham since 2002</h2>
                                    <p class="banner__para">Are you a homeowner with an ever-growing to-do list of projects
                                        around the house? Do you
                                        require expert contractors to help with your </p>
                                    <div class="custom__btn">
                                        <a href="contact.html" class=" ">Start Project</a>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item" style="background: url(./images/banner-2.jpg) top/cover">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-7 ">
                                <div class="banner-single container ">
                                    <h5 class="banner_subtitle">Domestic fridge repairs</h5>
                                    <h2 class="banner-title">portable studio equipment </h2>
                                    <p class="banner__para">We aim to be at your home within 3 hours to have a look at your
                                        fridge or freezer and advise you on the best course of action. </p>
                                    <div class="custom__btn">
                                        <a href="contact.html" class=" ">Start Project</a>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item" style="background:url(./images/banner-1.jpg) top/cover">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-7 ">
                                <div class="banner-single container ">
                                    <h5 class="banner_subtitle">12 month guarantee on all repairs</h5>
                                    <h2 class="banner-title">Professional Photography
                                    </h2>
                                    <p class="banner__para">AWe are based in Leeds and cover many of the local and
                                        surrounding
                                        areas throughout West Yorkshire. Whatever the problem is with your fridge or
                                        freezer,
                                        don’t hesitate to get in touch with our team. </p>
                                    <div class="custom__btn">
                                        <a href="contact.html" class=" ">Start Project</a>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </div> */}

        </section>);
};

export default Header;