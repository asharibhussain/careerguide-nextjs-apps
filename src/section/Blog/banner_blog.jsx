import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import sliderData from '../../Dynamic-Data/blog/data_banner_blog'; // Import slider data from the separate file

const BannerBlog = () => {
    const settings = {
        infinite: true,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 3000
    };

    return (
        <section className="banner_blog">
            <div className="container-lg">
                <div className="row justify-content-end position-relative banner_row">
                    <div className="banner_bg_img">
                        <img src="assets/img/blog/banner_blog.png" alt="" />
                    </div>
                    <div
                        className="col-lg-6 col-md-8 col-11"
                        data-aos="fade-up"
                        data-aos-delay={400}
                    >
                        <div className="banner_card">
                            <Slider {...settings} className="blog_banner_slider my_blog_banner_slider">
                                {sliderData.map((item, index) => (
                                    <div key={index} className="slider-content">
                                        <div className="card_block ps-1">
                                            <div className="d-flex flex-wrap justify-content-between mb-3 gap-1">
                                                <div>
                                                    <span className="text-white ps-5">Karriere Tricks</span>
                                                </div>
                                                <div>
                                                    <span className="text-white">{item.date}</span>
                                                </div>
                                            </div>
                                            <div className="block_heading">
                                                <h2 className="text-white">
                                                    {item.title}
                                                </h2>
                                            </div>
                                            <hr />
                                            <a href="#">
                                                <div className="block_button">
                                                    {item.buttonText}
                                                    <img src="assets/img/blog/CaretDown.png" alt="" />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BannerBlog;
