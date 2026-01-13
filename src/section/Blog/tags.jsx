import React from 'react';

const Tags = () => {


    return (
        <section id="tags" className="tags">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-md-5 mb-3 order-lg-1 order-md-1 order-2 pe-lg-3">
                        <div className="post_card">
                            <div className="card border-0">
                                <div className="card-body">
                                    <h3>Verpasse nicht den thes nächsten Post!</h3>
                                    <div className="d-flex flex-wrap pt-lg-4 gap-1">
                                        <a href="#">
                                            <div className="printerest">
                                                <img src="assets/img/blog/printerest.png" alt="" />
                                            </div>
                                        </a>
                                        <a href="#">
                                            <div className="instagram">
                                                <img src="assets/img/blog/instagram.png" alt="" />
                                            </div>
                                        </a>
                                        <a href="#">
                                            <div className="facebook">
                                                <img src="assets/img/blog/facebook.png" alt="" />
                                            </div>
                                        </a>
                                        <a href="#">
                                            <div className="twitterfight">
                                                <img src="assets/img/blog/twitterfight.png" alt="" />
                                            </div>
                                        </a>
                                        <a href="#">
                                            <div className="link">
                                                <img src="assets/img/blog/Link.png" alt="" />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="card border-0 mt-3 mb-3">
                                <div className="card-body">
                                    <h4>Beiträge nach #Tags</h4>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">
                                            <a href="#">
                                                <img
                                                    className="hash_img"
                                                    src="assets/img/blog/Hash.png"
                                                    alt=""
                                                />{" "}
                                                Absolvent
                                            </a>
                                        </li>
                                        <li className="list-group-item">
                                            <a href="#">
                                                <img
                                                    className="hash_img"
                                                    src="assets/img/blog/Hash.png"
                                                    alt=""
                                                />{" "}
                                                Arbeitgeber
                                            </a>
                                        </li>
                                        <li className="list-group-item">
                                            <a href="#">
                                                <img
                                                    className="hash_img"
                                                    src="assets/img/blog/Hash.png"
                                                    alt=""
                                                />{" "}
                                                Berufseinsteiger
                                            </a>
                                        </li>
                                        <li className="list-group-item">
                                            <a href="#">
                                                <img
                                                    className="hash_img"
                                                    src="assets/img/blog/Hash.png"
                                                    alt=""
                                                />{" "}
                                                Absolvent
                                            </a>
                                        </li>
                                        <li className="list-group-item">
                                            <a href="#">
                                                <img
                                                    className="hash_img"
                                                    src="assets/img/blog/Hash.png"
                                                    alt=""
                                                />{" "}
                                                Berufseinsteiger
                                            </a>
                                        </li>
                                        <li className="list-group-item">
                                            <a href="#">
                                                <img
                                                    className="hash_img"
                                                    src="assets/img/blog/Hash.png"
                                                    alt=""
                                                />{" "}
                                                Absolvent
                                            </a>
                                        </li>
                                        <li className="list-group-item">
                                            <a href="#">
                                                <img
                                                    className="hash_img"
                                                    src="assets/img/blog/Hash.png"
                                                    alt=""
                                                />{" "}
                                                Arbeitgeber
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-7 mb-3  order-lg-2 order-md-2 order-1 ps-lg-5">
                        <div className="row">
                            <div className="col-12 pb-2 mb-3">
                                <div className="articale_img">
                                    <img src="assets/img/blog/blog_1.png" alt="" />
                                </div>
                                <div className="articale_detail">
                                    <p>BUSINESS CREATOR. 03 Sep./2023</p>
                                    <h2>Building your personal brand on the linkedin: a business.</h2>
                                </div>
                                <div className="articale_profile d-flex align-items-center pb-lg-5 pb-3 border-bottom ">
                                    <div className="img_client pe-3">
                                        <img
                                            className="rounded-circle shadow-4-strong"
                                            src="assets/img/blog/client.png"
                                            alt=""
                                        />
                                    </div>
                                    <div>
                                        <h6>Mark Dani</h6>
                                        <p>Product Designer</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 pb-lg-3 mb-3">
                                <div className="articale_img">
                                    <img src="assets/img/blog/blog_2.png" alt="" />
                                </div>
                                <div className="articale_detail">
                                    <p>BUSINESS CREATOR. 03 Sep./2023</p>
                                    <h4>Building your personal brand on the linkedin.</h4>
                                    <p>
                                        By <a href="#">Mark Onked</a>
                                    </p>
                                </div>
                            </div>
                            <div className="col-6 pb-lg-3 mb-3">
                                <div className="articale_img">
                                    <img src="assets/img/blog/blog_3.png" alt="" />
                                </div>
                                <div className="articale_detail">
                                    <p>BUSINESS CREATOR. 03 Sep./2023</p>
                                    <h4>Building your personal brand on the linkedin.</h4>
                                    <p>
                                        By{" "}
                                        <a className="under_line" href="#">
                                            Mark Onked
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Tags;
