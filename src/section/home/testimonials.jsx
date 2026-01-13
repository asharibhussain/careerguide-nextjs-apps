// import React, { useEffect } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';


// const Testimonials = () => {

// useEffect(() => {
//     $('.testimonial_slider').slick({
//         infinite: true,
//         dots: false,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 3000,
//         speed: 2000
//     });
// }, []);
//     return (
//         <>
//             {/* ======= Testimonials Section ======= */}
//             <section
//                 id="testimonials"
//                 className="testimonials"
//                 data-aos="fade-up"
//                 data-aos-delay={200}
//             >
//                 <div className="testimonial_slider my_slider_testimonial">
//                     <div className="slider">
//                         <div className="slider-content">
//                             <div className="container-fluid testimonials_container">
//                                 <div className="row">
//                                     <div className="col-lg-12">
//                                         <div className="background_image">
//                                             <img src="assets/img/testimonials/Vector.png" alt="" />
//                                         </div>
//                                         <div className="main_card row">
//                                             <div className="col-lg-6 col-md-6 d-flex align-items-stretch ps-lg-0 px-md-0">
//                                                 <div className="card_1">
//                                                     <div className="bg_top_img">
//                                                         <img
//                                                             src="assets/img/testimonials/sub_4.png"
//                                                             className="sub_4"
//                                                             alt=""
//                                                         />
//                                                         <img
//                                                             src="assets/img/testimonials/quotes_1.png"
//                                                             className="quotes_1"
//                                                             alt=""
//                                                         />
//                                                     </div>
//                                                     <div className="text-center img_block_testimonial">
//                                                         <img
//                                                             className=""
//                                                             src="assets/img/testimonials/testimonial_img.png"
//                                                             alt=""
//                                                         />
//                                                     </div>
//                                                     <div className="sub_img_5">
//                                                         <img src="assets/img/testimonials/sub_5.png" alt="" />
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             <div className="col-lg-6 col-md-6 d-flex align-items-stretch pe-lg-0 pe-md-0">
//                                                 <div className="card card_2">
//                                                     <div className="sub_img_1">
//                                                         <img src="assets/img/testimonials/sub_1.png" alt="" />
//                                                     </div>
//                                                     <div className="detail_testimonials">
//                                                         <img
//                                                             src="assets/img/testimonials/quotes_2.png"
//                                                             className="quotes_2 d-lg-block d-md-block d-none"
//                                                             alt=""
//                                                         />
//                                                         <img
//                                                             src="assets/img/testimonials/quotes_3.png"
//                                                             className="d-lg-none d-md-none d-block ms-auto"
//                                                             alt=""
//                                                             width={24}
//                                                         />
//                                                         <p>
//                                                             The design of CareerGuide24 is{" "}
//                                                             <span>very clean and reduced to the marrow</span>.
//                                                             Therefore it facilitates the quest enormously.
//                                                         </p>
//                                                         <hr />
//                                                         <a href="#">
//                                                             <span>Leonie W.</span>
//                                                         </a>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="slider">
//                         <div className="slider-content">
//                             <div className="container-fluid testimonials_container">
//                                 <div className="row">
//                                     <div className="col-lg-12">
//                                         <div className="background_image">
//                                             <img src="assets/img/testimonials/Vector.png" alt="" />
//                                         </div>
//                                         <div className="main_card row">
//                                             <div className="col-lg-6 col-md-6 d-flex align-items-stretch ps-lg-0 px-md-0">
//                                                 <div className="card_1">
//                                                     <div className="bg_top_img">
//                                                         <img
//                                                             src="assets/img/testimonials/sub_4.png"
//                                                             className="sub_4"
//                                                             alt=""
//                                                         />
//                                                         <img
//                                                             src="assets/img/testimonials/quotes_1.png"
//                                                             className="quotes_1"
//                                                             alt=""
//                                                         />
//                                                     </div>
//                                                     <div className="text-center img_block_testimonial">
//                                                         <img
//                                                             className=""
//                                                             src="assets/img/testimonials/testimonial_img.png"
//                                                             alt=""
//                                                         />
//                                                     </div>
//                                                     <div className="sub_img_5">
//                                                         <img src="assets/img/testimonials/sub_5.png" alt="" />
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             <div className="col-lg-6 col-md-6 d-flex align-items-stretch pe-lg-0 pe-md-0">
//                                                 <div className="card card_2">
//                                                     <div className="sub_img_1">
//                                                         <img src="assets/img/testimonials/sub_1.png" alt="" />
//                                                     </div>
//                                                     <div className="detail_testimonials">
//                                                         <img
//                                                             src="assets/img/testimonials/quotes_2.png"
//                                                             className="quotes_2 d-lg-block d-md-block d-none"
//                                                             alt=""
//                                                         />
//                                                         <img
//                                                             src="assets/img/testimonials/quotes_3.png"
//                                                             className="d-lg-none d-md-none d-block ms-auto"
//                                                             alt=""
//                                                             width={24}
//                                                         />
//                                                         <p>
//                                                             The design of CareerGuide24 is{" "}
//                                                             <span>very clean and reduced to the marrow</span>.
//                                                             Therefore it facilitates the quest enormously.
//                                                         </p>
//                                                         <hr />
//                                                         <a href="#">
//                                                             <span>Leonie W.</span>
//                                                         </a>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="slider">
//                         <div className="slider-content">
//                             <div className="container-fluid testimonials_container">
//                                 <div className="row">
//                                     <div className="col-lg-12">
//                                         <div className="background_image">
//                                             <img src="assets/img/testimonials/Vector.png" alt="" />
//                                         </div>
//                                         <div className="main_card row">
//                                             <div className="col-lg-6 col-md-6 d-flex align-items-stretch ps-lg-0 px-md-0">
//                                                 <div className="card_1">
//                                                     <div className="bg_top_img">
//                                                         <img
//                                                             src="assets/img/testimonials/sub_4.png"
//                                                             className="sub_4"
//                                                             alt=""
//                                                         />
//                                                         <img
//                                                             src="assets/img/testimonials/quotes_1.png"
//                                                             className="quotes_1"
//                                                             alt=""
//                                                         />
//                                                     </div>
//                                                     <div className="text-center img_block_testimonial">
//                                                         <img
//                                                             className=""
//                                                             src="assets/img/testimonials/testimonial_img.png"
//                                                             alt=""
//                                                         />
//                                                     </div>
//                                                     <div className="sub_img_5">
//                                                         <img src="assets/img/testimonials/sub_5.png" alt="" />
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             <div className="col-lg-6 col-md-6 d-flex align-items-stretch pe-lg-0 pe-md-0">
//                                                 <div className="card card_2">
//                                                     <div className="sub_img_1">
//                                                         <img src="assets/img/testimonials/sub_1.png" alt="" />
//                                                     </div>
//                                                     <div className="detail_testimonials">
//                                                         <img
//                                                             src="assets/img/testimonials/quotes_2.png"
//                                                             className="quotes_2 d-lg-block d-md-block d-none"
//                                                             alt=""
//                                                         />
//                                                         <img
//                                                             src="assets/img/testimonials/quotes_3.png"
//                                                             className="d-lg-none d-md-none d-block ms-auto"
//                                                             alt=""
//                                                             width={24}
//                                                         />
//                                                         <p>
//                                                             The design of CareerGuide24 is{" "}
//                                                             <span>very clean and reduced to the marrow</span>.
//                                                             Therefore it facilitates the quest enormously.
//                                                         </p>
//                                                         <hr />
//                                                         <a href="#">
//                                                             <span>Leonie W.</span>
//                                                         </a>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             {/* End Testimonials Section */}
//         </>

//     );
// }




// export default Testimonials; 

// Testimonials.js
import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import testimonials from '@/Dynamic-Data/home/international_companies-section/testimonials.jsx';

const Testimonials = () => {

    useEffect(() => {
        if (typeof window !== 'undefined') {
            require('slick-carousel');
            $('.testimonial_slider').slick({
                infinite: true,
                dots: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 3000,
                speed: 2000
            });
        }
    }, []);

    return (
        <section id="testimonials" className="testimonials" data-aos="fade-up" data-aos-delay={200}>
            <div className="testimonial_slider my_slider_testimonial">
                {testimonials.map((testimonial, index) => (
                    <div className="slider" key={index}>
                        <div className="slider-content">
                            <div className="container-fluid testimonials_container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="background_image">
                                            <img src={testimonial.backgroundImg} alt="" />
                                        </div>
                                        <div className="main_card row">
                                            <div className="col-lg-6 col-md-6 d-flex align-items-stretch ps-lg-0 px-md-0">
                                                <div className="card_1">
                                                    <div className="bg_top_img">
                                                        <img src={testimonial.sub4Img} className="sub_4" alt="" />
                                                        <img src={testimonial.quotes1Img} className="quotes_1" alt="" />
                                                    </div>
                                                    <div className="text-center img_block_testimonial">
                                                        <img className="" src={testimonial.testimonialImg} alt="" />
                                                    </div>
                                                    <div className="sub_img_5">
                                                        <img src={testimonial.sub5Img} alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 d-flex align-items-stretch pe-lg-0 pe-md-0">
                                                <div className="card card_2">
                                                    <div className="sub_img_1">
                                                        <img src={testimonial.sub1Img} alt="" />
                                                    </div>
                                                    <div className="detail_testimonials">
                                                        <img src={testimonial.quotes2Img} className="quotes_2 d-lg-block d-md-block d-none" alt="" />
                                                        <img src={testimonial.quotes3Img} className="d-lg-none d-md-none d-block ms-auto" alt="" width={24} />
                                                        <p>
                                                            {testimonial.quote}
                                                        </p>
                                                        <hr />
                                                        <a href="#">
                                                            <span>{testimonial.author}</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
