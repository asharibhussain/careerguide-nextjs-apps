import React from 'react';
import moreInfoData from '@/Dynamic-Data/swipe/swiper-data/swiper';

function Swiper() {
    return (
        <>
        {moreInfoData.map((info) => (
            <section id="get_more_info" className="get_more_info">
                    <div className="container-lg container-fluid get_more_info_container" data-aos="fade-up" data-aos-delay={200} key={info.id}>
                        <div className="row  align-items-start">
                            <div className="col-lg-7 col-md-7 mb-4 order-lg-1 order-md-1 order-2">
                                <div className="get_more_detail">
                                    <h2 className="d-lg-block d-md-block d-none">{info.title}</h2>
                                    <p>{info.description1}</p>
                                    <p className="mb-lg-5 mb-4">{info.description2}</p>
                                    <a href={info.buttonLink}>
                                        <div className="get_more_info_button">
                                            {info.buttonText} <img className="ms-2" src="assets/img/button_arrow.png" alt="" />
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-5 pe-md-0 pe-0 mb-4 order-lg-2 order-md-2 order-1">
                                <div className="position-relative overflow-hidden main_div_bg">
                                    <div className="get_more_top">
                                        <img className="d-lg-inline-block d-md-inline-block d-none" src="assets/img/get_more_top.png" alt="" />
                                        <img className="d-inline-block d-md-none d-lg-none" src="assets/img/shape_mobile.png" alt="" />
                                    </div>
                                    <h2 className="d-lg-none d-md-none d-block">{info.title}</h2>
                                    <div className="img_bg_shapes_2">
                                        <img src="assets/img/bg_shape_2.png" alt="" />
                                    </div>
                                    <div className="img_bg_shapes_1">
                                        <img className="img_1" src="assets/img/bg_shape_1.png" alt="" />
                                        <div className="img_2 position-relative">
                                            <div className="mask">
                                                <img src={info.profileImage} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 ps-0 order-3">
                                <div className="shape-bottom">
                                    <img src="assets/img/shape-bottom.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
            ))}
        </>
    );
}

export default Swiper;