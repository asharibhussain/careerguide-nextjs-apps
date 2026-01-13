// ReadMoreArticleSection.js

import React from 'react';

const ReadMoreArticle = () => {
    return (
        <section id="read_more_article" className="read_more_article">
            <div className="container">
                <div className="row">
                    <div className="col-12" data-aos="fade-up" data-aos-delay="300">
                        <h1 className="article_heading">
                            Read More Article
                        </h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-5 mb-3" data-aos="fade-up" data-aos-delay="400">
                        <div className="row">
                            <div className="col-lg-12 mb-3">
                                <div className="articale_img">
                                    <img src="assets/img/blog/article_1.png" alt="" />
                                </div>
                                <div className="articale_detail border-bottom pb-2">
                                    <p>
                                        BUSINESS CREATOR. 03 Sep./2023
                                    </p>
                                    <h4>
                                        Building your personal brand on the linkedin.
                                    </h4>
                                    <p>
                                        By <a href="#">Mark Onked</a>
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-12 mb-3">
                                <div className="articale_img">
                                    <img src="assets/img/blog/article_2.png" alt="" />
                                </div>
                                <div className="articale_detail">
                                    <p>
                                        BUSINESS CREATOR. 03 Sep./2023
                                    </p>
                                    <h4>
                                        Building your personal brand on the linkedin.
                                    </h4>
                                    <p>
                                        By <a className="under_line" href="#">Mark Onked</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-7 pb-lg-5 pb-md-5 mb-3" data-aos="fade-up" data-aos-delay="400">
                        <div className="articale_img">
                            <img src="assets/img/blog/article_3.png" alt="" />
                        </div>
                        <div className="articale_detail">
                            <p>
                                BUSINESS CREATOR. 03 Sep./2023
                            </p>
                            <h2>
                                Building your personal brand on the linkedin: a business.
                            </h2>
                        </div>
                        <div className="articale_profile d-flex align-items-center">
                            <div className="img_client pe-3">
                                <img className="rounded-circle shadow-4-strong" src="assets/img/blog/client.png" alt="" />
                            </div>
                            <div>
                                <h6>
                                    Mark Dani
                                </h6>
                                <p>
                                    Product Designer
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReadMoreArticle;
