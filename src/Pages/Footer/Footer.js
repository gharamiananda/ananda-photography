import React from 'react';

const Footer = () => {
    return (

        <footer class="footer-section pt-120 pb-90">
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <div class="brand"> <img src="images/logo-removebg-preview (1).png" class="logo img-fluid" alt="" />
                            <p>I love photographing people and increasingly specialise in this area. As well as shooting
                                families and groups of friends, I take individual portraits of people of all ages including
                                babies, children and adults in black and white or colour and in many different styles.</p>
                        </div>
                    </div>
                    <div class="col-md-4 offset-md-1">
                        <p><b>Get in touch</b> <i class="fa-solid fa-envelope"></i> picsformer@msn.com
                            <br /> <i class="fa-solid fa-phone-volume"></i> 07776 158133
                            <br /> <i class="fa-solid fa-location-dot"></i> Malcolm Parnham
                        </p>
                    </div>
                    <div class="col-md-3">
                        <p class="mb-0"><b>Follow Us</b></p>
                        <p>You can follow us on our social media accounts for up-to-date photos.</p>
                        <ul class="footer-social-link">
                            <li><a
                                href=""><i
                                    class="fa-brands fa-facebook-f"></i></a></li>
                            <li><a
                                href=""><i
                                    class="fa-brands fa-facebook-f"></i></a></li>
                            <li><a
                                href=""><i
                                    class="fa-brands fa-facebook-f"></i></a></li>
                            <li><a
                                href=""><i
                                    class="fa-brands fa-facebook-f"></i></a></li>


                        </ul>
                    </div>
                </div>
            </div>
            <div class="sub-footer">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8">
                            <div class="text-left">
                                <p>© 2022 All right reserved.Design by <a href="https://www.uniteldirect.co.uk/"> Unitel
                                    Direct</a></p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="text-right-left">
                                <p><a href="#">Terms of use</a> <span>|</span> <a href="#">Privacy Policy</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;