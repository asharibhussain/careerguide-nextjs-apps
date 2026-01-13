// import React from 'react'

// function Get_More_Info() {
//     return (
//         <>
//             <section id="get_more_info" className="get_more_info">
//                 <div
//                     className="container-lg container-fluid  get_more_info_container"
//                     data-aos="fade-up"
//                     data-aos-delay={200}
//                 >
//                     <div className="row align-items-start">
//                         <div className="col-lg-7 col-md-7 mb-4 order-lg-1 order-md-1 order-2">
//                             <div className="get_more_detail">
//                                 <h2 className="d-lg-block d-md-block d-none">
//                                     Get More info About Career Guide 24.
//                                 </h2>
//                                 <p>
//                                     CareerGuide24 is a digital platform for companies from all of the
//                                     world to present their employer brand to students, graduates and
//                                     young professionals from all areas. We provide transparency in the
//                                     market through a wide variety of providers. Given the current lack
//                                     of information encountered by students to find their suitable
//                                     employer, CareerGuide24 allows students from all over the world to
//                                     easily find a company that matches their course of study.
//                                 </p>
//                                 <p className="mb-lg-5 mb-4">
//                                     Companies will use CareerGuide24 to attract attention to a large
//                                     number of qualified students, graduates and young professionals
//                                     globally and highlight their career opportunities in a simple,
//                                     efficient and cost-effective manner.
//                                 </p>
//                                 <a href="#">
//                                     <div className="get_more_info_button">
//                                         Get More information{" "}
//                                         <img className="ms-2" src="assets/img/button_arrow.png" alt="" />
//                                     </div>
//                                 </a>
//                             </div>
//                         </div>
//                         <div className="col-lg-5 col-md-5 pe-md-0 pe-0 mb-4 order-lg-2 order-md-2 order-1">
//                             <div className="position-relative overflow-hidden main_div_bg">
//                                 <div className="get_more_top">
//                                     <img
//                                         className="d-lg-inline-block d-md-inline-block d-none"
//                                         src="assets/img/get_more_top.png"
//                                         alt=""
//                                     />
//                                     <img
//                                         className="d-inline-block d-md-none d-lg-none"
//                                         src="assets/img/shape_mobile.png"
//                                         alt=""
//                                     />
//                                 </div>
//                                 <h2 className="d-lg-none d-md-none d-block">
//                                     Get More info About Career Guide 24.
//                                 </h2>
//                                 <div className="img_bg_shapes_2">
//                                     <img src="assets/img/bg_shape_2.png" alt="" />
//                                 </div>
//                                 <div className="img_bg_shapes_1">
//                                     <img className="img_1" src="assets/img/bg_shape_1.png" alt="" />
//                                     <div className="img_2 position-relative">
//                                         <div className="mask">
//                                             <img src="assets/img/profie_img.png" alt="" />
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-12 ps-0 order-3">
//                             <div className="shape-bottom">
//                                 <img src="assets/img/shape-bottom.png" alt="" />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//         </>
//     )
// }

// export default Get_More_Info;

// Get_More_Info.jsx

// import React from 'react';

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
//     // Add more objects as needed
// ];
// function Get_More_Info() {
//     return (
//         <>
//             <section id="get_more_info" className="get_more_info">
//                 {moreInfoData.map((info) => (
//                     <div className="container-lg container-fluid get_more_info_container" data-aos="fade-up" data-aos-delay={200} key={info.id}>
//                         <div className="row  align-items-start">
//                             <div className="col-lg-7 col-md-7 mb-4 order-lg-1 order-md-1 order-2">
//                                 <div className="get_more_detail">
//                                     <h2 className="d-lg-block d-md-block d-none">{info.title}</h2>
//                                     <p>{info.description1}</p>
//                                     <p className="mb-lg-5 mb-4">{info.description2}</p>
//                                     <a href={info.buttonLink}>
//                                         <div className="get_more_info_button">
//                                             {info.buttonText} <img className="ms-2" src="assets/img/button_arrow.png" alt="" />
//                                         </div>
//                                     </a>
//                                 </div>
//                             </div>
//                             <div className="col-lg-5 col-md-5 pe-md-0 pe-0 mb-4 order-lg-2 order-md-2 order-1">
//                                 <div className="position-relative overflow-hidden main_div_bg">
//                                     <div className="get_more_top">
//                                         <img className="d-lg-inline-block d-md-inline-block d-none" src="assets/img/get_more_top.png" alt="" />
//                                         <img className="d-inline-block d-md-none d-lg-none" src="assets/img/shape_mobile.png" alt="" />
//                                     </div>
//                                     <h2 className="d-lg-none d-md-none d-block">{info.title}</h2>
//                                     <div className="img_bg_shapes_2">
//                                         <img src="assets/img/bg_shape_2.png" alt="" />
//                                     </div>
//                                     <div className="img_bg_shapes_1">
//                                         <img className="img_1" src="assets/img/bg_shape_1.png" alt="" />
//                                         <div className="img_2 position-relative">
//                                             <div className="mask">
//                                                 <img src={info.profileImage} alt="" />
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-12 ps-0 order-3">
//                                 <div className="shape-bottom">
//                                     <img src="assets/img/shape-bottom.png" alt="" />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </section>
//         </>
//     );
// }

// export default Get_More_Info;


// function Get_More_Info() {
//     return (
//         <>

//             <section id="get_more_info" className="get_more_info">
//                 {moreInfoData.map((info) => (
//                     <div className="container-lg container-fluid get_more_info_container" data-aos="fade-up" data-aos-delay={200}>
//                         <div className="row  align-items-start" key={info.id} >
//                             <div className="col-lg-7 col-md-7 mb-4 order-lg-1 order-md-1 order-2">
//                                 <div className="get_more_detail">
//                                     <h2 className="d-lg-block d-md-block d-none">{info.title}</h2>
//                                     <p>{info.description1}</p>
//                                     <p className="mb-lg-5 mb-4">{info.description2}</p>
//                                     <a href={info.buttonLink}>
//                                         <div className="get_more_info_button">
//                                             {info.buttonText} <img className="ms-2" src="assets/img/button_arrow.png" alt="" />
//                                         </div>
//                                     </a>
//                                 </div>
//                             </div>
//                             <div className="col-lg-5 col-md-5 pe-md-0 pe-0 mb-4 order-lg-2 order-md-2 order-1">
//                                 <div className="position-relative overflow-hidden main_div_bg">
//                                     <div className="get_more_top">
//                                         <img className="d-lg-inline-block d-md-inline-block d-none" src="assets/img/get_more_top.png" alt="" />
//                                         <img className="d-inline-block d-md-none d-lg-none" src="assets/img/shape_mobile.png" alt="" />
//                                     </div>
//                                     <h2 className="d-lg-none d-md-none d-block">{info.title}</h2>
//                                     <div className="img_bg_shapes_2">
//                                         <img src="assets/img/bg_shape_2.png" alt="" />
//                                     </div>
//                                     <div className="img_bg_shapes_1">
//                                         <img className="img_1" src="assets/img/bg_shape_1.png" alt="" />
//                                         <div className="img_2 position-relative">
//                                             <div className="mask">
//                                                 <img src={info.profileImage} alt="" />
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-12 ps-0 order-3">
//                                 <div className="shape-bottom">
//                                     <img src="assets/img/shape-bottom.png" alt="" />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </section>

//         </>
//     );
// }

// export default Get_More_Info;


// import React from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { Navigation, Pagination } from "swiper";

// // Import Swiper styles
// import "swiper/css";
// // import "swiper/css/navigation";
// import "swiper/css/pagination";

// // Install Swiper modules
// SwiperCore.use([Navigation, Pagination]);

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
//         <section id="get_more_info" className="get_more_info">
//             <div className="container-lg container-fluid get_more_info_container">
//                 <Swiper
//                     spaceBetween={30}
//                     slidesPerView={1}
//                     navigation
//                     pagination={{ clickable: true }}
//                 >
//                     {moreInfoData.map((info) => (
//                         <SwiperSlide key={info.id}>
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
//                             <div className="col-12 ps-0 order-3">
//                                 <div className="shape-bottom">
//                                     <img src="assets/img/shape-bottom.png" alt="" />
//                                 </div>
//                             </div>
//                         </SwiperSlide>
//                     ))}
//                 </Swiper>
//             </div>
//         </section>
//     );
// }

// export default GetMoreInfo;
// import React from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { Pagination } from "swiper";

// // Import Swiper styles
// import "swiper/css";
// // import "swiper/css/navigation";
// import "swiper/css/pagination";

// // Install Swiper modules
// SwiperCore.use([Pagination]);

// const moreInfoData = [
//     {
//         id: 1,
//         title: "Get More Info About Career Guide 24. ",
//         description1: "CareerGuide24 is a digital platform for companies from all over the world to present their employer brand to students, graduates, and young professionals from all areas. We provide transparency in the market through a wide variety of providers. Given the current lack of information encountered by students to find their suitable employer, CareerGuide24 allows students from all over the world to easily find a company that matches their course of study.",
//         description2: "Companies will use CareerGuide24 to attract attention to a large number of qualified students, graduates, and young professionals globally and highlight their career opportunities in a simple, efficient, and cost-effective manner.",
//         buttonText: "Get More Information ",
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
//             // navigation
//             pagination={{ clickable: true }}
//             className="get_more_info swiper-container"
//         >

//             <section id="get_more_info" className="get_more_info swiper-slide">
//                 {moreInfoData.map((info) => (
//                     <SwiperSlide key={info.id}>
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
//                             <div className="col-12 ps-0 order-3">
//                                 <div className="shape-bottom">
//                                     <img src="assets/img/shape-bottom.png" alt="" />
//                                 </div>
//                             </div>
//                         </div>
//                     </SwiperSlide>
//                 ))}
//             </section>
//         </Swiper>
//     );
// }

// export default GetMoreInfo;


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


// components/DynamicSwiper.js

// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { Pagination } from "swiper";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

// // Install Swiper modules
// SwiperCore.use([Pagination]);

// const DynamicSwiper = ({ type }) => {
//     // Example data with different sets of IDs
//     const moreInfoData = [
//         {
//             id: 1,
//             title: "Get More Info About Career Guide 24.",
//             description1: "CareerGuide24 is a digital platform for companies from all over the world to present their employer brand to students, graduates, and young professionals from all areas. We provide transparency in the market through a wide variety of providers. Given the current lack of information encountered by students to find their suitable employer, CareerGuide24 allows students from all over the world to easily find a company that matches their course of study.",
//             description2: "Companies will use CareerGuide24 to attract attention to a large number of qualified students, graduates, and young professionals globally and highlight their career opportunities in a simple, efficient, and cost-effective manner.",
//             buttonText: "Get More Information",
//             buttonLink: "#",
//             profileImage: "assets/img/profie_img.png",
//         },
//         {
//             id: 2,
//             title: "Get More Info About Career Guide 24.",
//             description1: "CareerGuide24 is a digital platform for companies from all over the world to present their employer brand to students, graduates, and young professionals from all areas. We provide transparency in the market through a wide variety of providers. Given the current lack of information encountered by students to find their suitable employer, CareerGuide24 allows students from all over the world to easily find a company that matches their course of study.",
//             description2: "Companies will use CareerGuide24 to attract attention to a large number of qualified students, graduates, and young professionals globally and highlight their career opportunities in a simple, efficient, and cost-effective manner.",
//             buttonText: "Get More Information",
//             buttonLink: "#",
//             profileImage: "assets/img/profie_img.png",
//         },
//         // Add more objects as needed
//     ];

//     // Determine the IDs based on the type prop
//     let ids = [];
//     switch (type) {
//         case "single":
//             ids = [1]; // Single ID for single swiper
//             break;
//         case "multiple":
//             ids = [1, 2]; // Multiple IDs for multiple swiper
//             break;
//         case "new":
//             ids = [2]; // New IDs for new swiper
//             break;
//         default:
//             ids = []; // Default to empty array
//     }

//     return (
//         <Swiper
//             spaceBetween={30}
//             slidesPerView={1}
//             pagination={{ clickable: true }}
//             className="get_more_info swiper-container"
//         >
//             {moreInfoData.map((info) => (
//                 ids.includes(info.id) ? (
//                     <SwiperSlide key={info.id}>
//                         <section id="get_more_info" className="get_more_info swiper-slide">
//                             <div className="container-lg container-fluid get_more_info_container">
//                                 <div className="row align-items-start">
//                                     <div className="col-lg-7 col-md-7 mb-4 order-lg-1 order-md-1 order-2">
//                                         <div className="get_more_detail">
//                                             <h2 className="d-lg-block d-md-block d-none">{info.title}</h2>
//                                             <p>{info.description1}</p>
//                                             <p className="mb-lg-5 mb-4">{info.description2}</p>
//                                             <a href={info.buttonLink}>
//                                                 <div className="get_more_info_button">
//                                                     {info.buttonText} <img className="ms-2" src="assets/img/button_arrow.png" alt="" />
//                                                 </div>
//                                             </a>
//                                         </div>
//                                     </div>
//                                     <div className="col-lg-5 col-md-5 pe-md-0 pe-0 mb-4 order-lg-2 order-md-2 order-1">
//                                         <div className="position-relative overflow-hidden main_div_bg">
//                                             <div className="get_more_top">
//                                                 <img className="d-lg-inline-block d-md-inline-block d-none" src="assets/img/get_more_top.png" alt="" />
//                                                 <img className="d-inline-block d-md-none d-lg-none" src="assets/img/shape_mobile.png" alt="" />
//                                             </div>
//                                             <h2 className="d-lg-none d-md-none d-block">{info.title}</h2>
//                                             <div className="img_bg_shapes_2">
//                                                 <img src="assets/img/bg_shape_2.png" alt="" />
//                                             </div>
//                                             <div className="img_bg_shapes_1">
//                                                 <img className="img_1" src="assets/img/bg_shape_1.png" alt="" />
//                                                 <div className="img_2 position-relative">
//                                                     <div className="mask">
//                                                         <img src={info.profileImage} alt="" />
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="shape-bottom">
//                                     <img src="assets/img/shape-bottom.png" alt="" />
//                                 </div>
//                             </div>
//                         </section>
//                     </SwiperSlide>
//                 ) : null
//             ))}
//         </Swiper>
//     );
// };

// export default DynamicSwiper;


// components/DynamicSwiper.js
// second
// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { Pagination } from "swiper";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

// // Install Swiper modules
// SwiperCore.use([Pagination]);

// const DynamicSwiper = ({ type }) => {
//     // Common data for all types
//     const moreInfoData = [
//         {
//             id: 1,
//             title: "Get More Info About Career Guide 24.",
//             description1: "CareerGuide24 is a digital platform for companies from all over the world to present their employer brand to students, graduates, and young professionals from all areas. We provide transparency in the market through a wide variety of providers. Given the current lack of information encountered by students to find their suitable employer, CareerGuide24 allows students from all over the world to easily find a company that matches their course of study.",
//             description2: "Companies will use CareerGuide24 to attract attention to a large number of qualified students, graduates, and young professionals globally and highlight their career opportunities in a simple, efficient, and cost-effective manner.",
//             buttonText: "Get More Information",
//             buttonLink: "#",
//             profileImage: "assets/img/profie_img.png",
//         },
//         {
//             id: 2,
//             title: "Get More Info About Career Guide 24.",
//             description1: "CareerGuide24 is a digital platform for companies from all over the world to present their employer brand to students, graduates, and young professionals from all areas. We provide transparency in the market through a wide variety of providers. Given the current lack of information encountered by students to find their suitable employer, CareerGuide24 allows students from all over the world to easily find a company that matches their course of study.",
//             description2: "Companies will use CareerGuide24 to attract attention to a large number of qualified students, graduates, and young professionals globally and highlight their career opportunities in a simple, efficient, and cost-effective manner.",
//             buttonText: "Get More Information",
//             buttonLink: "#",
//             profileImage: "assets/img/profie_img.png",
//         },
//         {
//             id: 3,
//             title: "Get More Info About Career Guide 24.",
//             description1: "CareerGuide24 is a digital platform for companies from all over the world to present their employer brand to students, graduates, and young professionals from all areas. We provide transparency in the market through a wide variety of providers. Given the current lack of information encountered by students to find their suitable employer, CareerGuide24 allows students from all over the world to easily find a company that matches their course of study.",
//             description2: "Companies will use CareerGuide24 to attract attention to a large number of qualified students, graduates, and young professionals globally and highlight their career opportunities in a simple, efficient, and cost-effective manner.",
//             buttonText: "Get More Information",
//             buttonLink: "#",
//             profileImage: "assets/img/profie_img.png",
//         },
//         // Add more common objects as needed
//     ];

//     // Data specific for the "new" type
//     const newMoreInfoData = [
//         {
//             id: 3,
//             title: "New Swiper Slide 1",
//             description1: "Description for new swiper slide 1.",
//             description2: "Additional description for new swiper slide 1.",
//             buttonText: "New Button 1",
//             buttonLink: "#new1", // Link for new swiper slide 1
//             profileImage: "assets/img/profie_img.png",
//         },
//         {
//             id: 4,
//             title: "New Swiper Slide 2",
//             description1: "Description for new swiper slide 2.",
//             description2: "Additional description for new swiper slide 2.",
//             buttonText: "New Button 2",
//             buttonLink: "#new2", // Link for new swiper slide 2
//             profileImage: "assets/img/new_profile_img_2.png",
//         },
//         // Add more new objects as needed
//     ];

//     // Function to filter data based on type and IDs
//     const filterData = (type) => {
//         switch (type) {
//             case "single":
//                 return moreInfoData.filter(item => item.id === 1); // Filter for single ID
//             case "multiple":
//                 return moreInfoData.filter(item => [1, 2].includes(item.id)); // Filter for multiple IDs
//             case "new":
//                 return newMoreInfoData.slice(0, 1); // Show only the first item for "new" type
//             default:
//                 return []; // Default to empty array
//         }
//     };

//     // Render Swiper slides based on filtered data
//     const renderSwiperSlides = (data) => (
//         <Swiper
//             spaceBetween={30}
//             slidesPerView={1}
//             pagination={{ clickable: true }}
//             className="get_more_info swiper-container"
//         >
//             {data.map((info) => (
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

//     // Get filtered data based on type
//     const filteredData = filterData(type);

//     // Render Swiper slides based on filtered data
//     return renderSwiperSlides(filteredData);
// };

// export default DynamicSwiper;


// components/DynamicSwiper.js

// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { Pagination } from "swiper";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

// // Install Swiper modules
// SwiperCore.use([Pagination]);

// const DynamicSwipers = ({ type }) => {
//     // Common data for all types
//     const moreInfoData = [
//         {
//             id: 1,
//             title: "Get More Info About Career Guide 24.",
//             description1: "CareerGuide24 is a digital platform for companies from all over the world to present their employer brand to students, graduates, and young professionals from all areas. We provide transparency in the market through a wide variety of providers. Given the current lack of information encountered by students to find their suitable employer, CareerGuide24 allows students from all over the world to easily find a company that matches their course of study.",
//             description2: "Companies will use CareerGuide24 to attract attention to a large number of qualified students, graduates, and young professionals globally and highlight their career opportunities in a simple, efficient, and cost-effective manner.",
//             buttonText: "Get More Information",
//             buttonLink: "#",
//             profileImage: "assets/img/profie_img.png",
//         },
//         {
//             id: 2,
//             title: "Get More Info About Career Guide 24.",
//             description1: "CareerGuide24 is a digital platform for companies from all over the world to present their employer brand to students, graduates, and young professionals from all areas. We provide transparency in the market through a wide variety of providers. Given the current lack of information encountered by students to find their suitable employer, CareerGuide24 allows students from all over the world to easily find a company that matches their course of study.",
//             description2: "Companies will use CareerGuide24 to attract attention to a large number of qualified students, graduates, and young professionals globally and highlight their career opportunities in a simple, efficient, and cost-effective manner.",
//             buttonText: "Get More Information",
//             buttonLink: "#",
//             profileImage: "assets/img/profie_img.png",
//         },
//         {
//             id: 3,
//             title: "Get More Info About Career Guide 24.",
//             description1: "CareerGuide24 is a digital platform for companies from all over the world to present their employer brand to students, graduates, and young professionals from all areas. We provide transparency in the market through a wide variety of providers. Given the current lack of information encountered by students to find their suitable employer, CareerGuide24 allows students from all over the world to easily find a company that matches their course of study.",
//             description2: "Companies will use CareerGuide24 to attract attention to a large number of qualified students, graduates, and young professionals globally and highlight their career opportunities in a simple, efficient, and cost-effective manner.",
//             buttonText: "Get More Information",
//             buttonLink: "#",
//             profileImage: "assets/img/profie_img.png",
//         },
//         // Add more common objects as needed
//     ];

//     // Data specific for the "new" type
//     const newMoreInfoData = [
//         {
//             id: 1,
//             title: "New Swiper Slide 1",
//             description1: "Description for new swiper slide 1.",
//             description2: "Additional description for new swiper slide 1.",
//             buttonText: "New Button 1",
//             buttonLink: "#new1", // Link for new swiper slide 1
//             profileImage: "assets/img/new_profile_img_1.png",
//         },
//         {
//             id: 2,
//             title: "New Swiper Slide 2",
//             description1: "Description for new swiper slide 2.",
//             description2: "Additional description for new swiper slide 2.",
//             buttonText: "New Button 2",
//             buttonLink: "#new2", // Link for new swiper slide 2
//             profileImage: "assets/img/new_profile_img_2.png",
//         },
//         // Add more new objects as needed
//     ];

//     // Function to filter data based on type
//     const filterData = (type) => {
//         switch (type) {
//             case "single":
//                 return moreInfoData.filter(item => item.id === 1); // Filter for single ID
//             case "multiple":
//                 return moreInfoData; // Return all data for "multiple" type
//             case "new":
//                 return newMoreInfoData.slice(0, 2); // Show only the first item for "new" type and any change according up to you 
//             default:
//                 return []; // Default to empty array
//         }
//     };

//     // Render Swiper slides based on filtered data
//     const renderSwiperSlides = (data) => (
//         <Swiper
//             spaceBetween={30}
//             slidesPerView={1}
//             pagination={{ clickable: true }}
//             className="get_more_info swiper-container"
//         >
//             {data.map((info) => (
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

//     // Get filtered data based on type
//     const filteredData = filterData(type);

//     // Render Swiper slides based on filtered data
//     return renderSwiperSlides(filteredData);
// };

// export default DynamicSwipers;



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
