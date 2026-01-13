// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { Pagination } from "swiper";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

// // Install Swiper modules
// SwiperCore.use([Pagination]);

// const moreInfoData = [
//     {
//         id: 1,
//         title: "Get More Info About Career Guide 24.",
//         description1: "CareerGuide24 is a digital platform for companies from all over the world to present their employer brand to students, graduates, and young professionals from all areas. We provide transparency in the market through a wide variety of providers. Given the current lack of information encountered by students to find their suitable employer, CareerGuide24 allows students from all over the world to easily find a company that matches their course of study.",
//         description2: "Companies will use CareerGuide24 to attract attention to a large number of qualified students, graduates, and young professionals globally and highlight their career opportunities in a simple, efficient, and cost-effective manner.",
//         buttonText: "Get More Information",
//         buttonLink: "#",
//         profileImage: "assets/img/profie_img.png",
//     },
//     {
//         id: 2,
//         title: "Get More Info About Career Guide 24.",
//         description1: "CareerGuide24 is a digital platform for companies from all over the world to present their employer brand to students, graduates, and young professionals from all areas. We provide transparency in the market through a wide variety of providers. Given the current lack of information encountered by students to find their suitable employer, CareerGuide24 allows students from all over the world to easily find a company that matches their course of study.",
//         description2: "Companies will use CareerGuide24 to attract attention to a large number of qualified students, graduates, and young professionals globally and highlight their career opportunities in a simple, efficient, and cost-effective manner.",
//         buttonText: "Get More Information",
//         buttonLink: "#",
//         profileImage: "assets/img/profie_img.png",
//     },
//     // Add more objects as needed
// ];

// function GetMoreInfo() {
//     return (
//         <Swiper
//             spaceBetween={30}
//             slidesPerView={1}
//             pagination={{ clickable: true }}
//             className="get_more_info swiper-container"
//         >
//             {moreInfoData.map((info) => (
//                 <SwiperSlide key={info.id}>
//                     <section id="get_more_info" className="get_more_info swiper-slide">
//                         <div className="container-lg container-fluid get_more_info_container">
//                             <div className="row align-items-start">
//                                 <div className="col-lg-7 col-md-7 mb-4 order-lg-1 order-md-1 order-2">
//                                     <div className="get_more_detail">
//                                         <h2 className="d-lg-block d-md-block d-none">{info.title}</h2>
//                                         <p>{info.description1}</p>
//                                         <p className="mb-lg-5 mb-4">{info.description2}</p>
//                                         <a href={info.buttonLink}>
//                                             <div className="get_more_info_button">
//                                                 {info.buttonText} <img className="ms-2" src="assets/img/button_arrow.png" alt="" />
//                                             </div>
//                                         </a>
//                                     </div>
//                                 </div>
//                                 <div className="col-lg-5 col-md-5 pe-md-0 pe-0 mb-4 order-lg-2 order-md-2 order-1">
//                                     <div className="position-relative overflow-hidden main_div_bg">
//                                         <div className="get_more_top">
//                                             <img className="d-lg-inline-block d-md-inline-block d-none" src="assets/img/get_more_top.png" alt="" />
//                                             <img className="d-inline-block d-md-none d-lg-none" src="assets/img/shape_mobile.png" alt="" />
//                                         </div>
//                                         <h2 className="d-lg-none d-md-none d-block">{info.title}</h2>
//                                         <div className="img_bg_shapes_2">
//                                             <img src="assets/img/bg_shape_2.png" alt="" />
//                                         </div>
//                                         <div className="img_bg_shapes_1">
//                                             <img className="img_1" src="assets/img/bg_shape_1.png" alt="" />
//                                             <div className="img_2 position-relative">
//                                                 <div className="mask">
//                                                     <img src={info.profileImage} alt="" />
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="shape-bottom">
//                                 <img src="assets/img/shape-bottom.png" alt="" />
//                             </div>
//                         </div>
//                     </section>
//                 </SwiperSlide>
//             ))}
//         </Swiper>
//     );
// }

// export default GetMoreInfo;
import React from "react";
import Swiper_Silder_Data from '../../../Dynamic-Data/swipe/Swipers_silder_data/swiper_silder';
import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { Autoplay } from "swiper";



import { Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

// Install Swiper modules
// SwiperCore.use([Autoplay]);

function Swiper_Silder() {
    return (
        <Swiper
            slidesPerView={1}
            infinite={true}
            loop={true}  // Enable continuous loop (infinite mode)
            modules={[Autoplay]}
            autoplay={{ delay: 1000, disableOnInteraction: false }}
            allowTouchMove={false}
            // autoplay={true}
            // autoplaySpeed={3000}
            speed={3000}  // Smooth transition speed (3 seconds)
            className="get_more_info swiper-container"
        >
            {Swiper_Silder_Data.map((info) => (
                <SwiperSlide key={info.id}>
                    <section className="get_more_info swiper-slide">
                        <div className="container-lg container-fluid get_more_info_container">
                            <div className="row align-items-start">
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
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default Swiper_Silder;
