
import React from 'react';
const BlogDetailSection = () => {
    return (
        <section className="banner_blog_detail">
            <div className="container-fluid blog_detail_bg_img">
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center">
                        <p className="business_para" data-aos="zoom-in" data-aos-delay="200">
                            Business Creator . 03 Sep./2023 . 7 min read
                        </p>
                        <h1 data-aos="zoom-in" data-aos-delay="300">
                            Mit den richtigen Studiengäng und Weiterbildungen die.
                        </h1>
                        <h5 data-aos="zoom-in" data-aos-delay="400">
                            Things to have sorted before settings
                        </h5>
                    </div>
                </div>
                <div className="row row_detail justify-content-center g-2 align-items-lg-center mx-1 mt-4">
                    <div className="col-lg-4 col-md-6 mb-lg-0 mb-md-0 mb-3" data-aos="fade-up" data-aos-delay="500">
                        <div className="detail_profile d-flex justify-content-lg-end justify-content-center align-items-center pe-lg-5">
                            <div className="img_client pe-3">
                                <img className="rounded-circle shadow-4-strong" src="assets/img/blog_detail/blog_profile.png" alt="" />
                            </div>
                            <div>
                                <h6>Jaylon Kenter</h6>
                                <p>Product Manager at Dem</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 border-start" data-aos="fade-up" data-aos-delay="500">
                        <div className="social-links d-flex justify-content-lg-start justify-content-center ps-lg-5">
                            <div className="bg-white rounded px-3 py-2 me-2 hover_links">
                                <a href=""><img src="assets/img/blog_detail/copy.svg" alt="" /> <span>Copy link</span></a>
                            </div>
                            <div className="bg-white rounded px-2 py-2 me-2 hover_links">
                                <a href=""><img src="assets/img/blog_detail/twitter.svg" alt="" /></a>
                            </div>
                            <div className="bg-white rounded px-2 py-2 me-2 hover_links">
                                <a href=""><img src="assets/img/blog_detail/fb.svg" alt="" /></a>
                            </div>
                            <div className="bg-white rounded px-2 py-2 hover_links">
                                <a href=""><img src="assets/img/blog_detail/linkedin.svg" alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogDetailSection;
