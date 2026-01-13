    import React, { useState } from 'react';
    import employersData from '@/Dynamic-Data/home/international_companies-section/Date_popular_employers';


    function PopularEmployers() {
        const [showAll, setShowAll] = useState(false);

        const displayedEmployers = showAll ? employersData : employersData.slice(0, 3);

        return (
            <section className="popular_employers">
                <div className="container popular_employers_container">
                    <div className="row justify-content-center text-center mb-lg-5">
                        <div className="col-lg-6 col-md-8" data-aos="fade-up" data-aos-delay={200}>
                            <h1>Some of the most popular employers</h1>
                        </div>
                    </div>
                    <div className="row g-3">
                        {displayedEmployers.map((employer) => (
                            <div
                                key={employer.id}
                                className="col-lg-4 col-md-6 col-12 d-flex align-items-stretch"
                                data-aos="fade-up"
                                data-aos-delay={300}
                            >
                                <div className="card">
                                    <div className="card-body pb-0">
                                        <div className="image img_block">
                                            <img src={employer.imageUrl} alt="Employer" />
                                        </div>
                                        <h5>{employer.title}</h5>
                                        <p>{employer.description}</p>
                                    </div>
                                    <div className="card-footer pb-3 bg-transparent border-0">
                                        <div className="pt-2">
                                            <a className="dual_button" href={employer.link}>
                                                Read More{' '}
                                                <img
                                                    className="ms-2"
                                                    src="assets/img/ArrowDownRight.png"
                                                    alt="Arrow"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div
                            className="col-12 mb-2 pt-lg-4 pt-md-3 text-center"
                            data-aos="fade-up"
                            data-aos-delay={300}
                        >
                            <button className="dual_button" onClick={() => setShowAll(!showAll)}>
                                {showAll ? 'Show Less' : 'Read More'}
                                <img className="ms-2" src="assets/img/button_arrow.png" alt="Arrow" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    export default PopularEmployers;
    // import React, { useState } from 'react';

    // // Define your data (you can replace this with actual data fetching or static data)
    // const employersData = [
    //     {
    //         id: 1,
    //         imageUrl: 'assets/image/popular_employers/img-1.png',
    //         title: 'Rise partner audit gmbH wirts chaft sprüfun.',
    //         description: 'A project focused on using construction efforts to improve the future we pride ourselves on delivering.',
    //         link: '#', // Replace with actual link
    //     },
    //     {
    //         id: 2,
    //         imageUrl: 'assets/image/popular_employers/img-2.png',
    //         title: 'Rise partner audit gmbH wirts chaft sprüfun.',
    //         description: 'A project focused on using construction efforts to improve the future we pride ourselves on delivering.',
    //         link: '#', // Replace with actual link
    //     },
    //     {
    //         id: 3,
    //         imageUrl: 'assets/image/popular_employers/img-3.png',
    //         title: 'Rise partner audit gmbH wirts chaft sprüfun.',
    //         description: 'A project focused on using construction efforts to improve the future we pride ourselves on delivering.',
    //         link: '#', // Replace with actual link
    //     },
    //     {
    //         id: 4,
    //         imageUrl: 'assets/image/popular_employers/img-4.png',
    //         title: 'Rise partner audit gmbH wirts chaft sprüfun. Aasharib Hussain',
    //         description: 'A project focused on using construction efforts to improve the future we pride ourselves on delivering.',
    //         link: '#', // Replace with actual link
    //     },
    //     {
    //         id: 5,
    //         imageUrl: 'assets/image/popular_employers/img-5.png',
    //         title: 'Rise partner audit gmbH wirts chaft sprüfun. Aasharib Hussain',
    //         description: 'A project focused on using construction efforts to improve the future we pride ourselves on delivering.',
    //         link: '#', // Replace with actual link
    //     },
    // ];

    // function PopularEmployers() {
    //     const [showAll, setShowAll] = useState(false);

    //     const displayedEmployers = showAll ? employersData : employersData.slice(0, 3);

    //     return (
    //         <section className="popular_employers">
    //             <div className="container popular_employers_container">
    //                 <div className="row justify-content-center text-center mb-lg-5">
    //                     <div className="col-lg-6 col-md-8" data-aos="fade-up" data-aos-delay={200}>
    //                         <h1>Some of the most popular employers</h1>
    //                     </div>
    //                 </div>
    //                 <div className="row g-3">
    //                     {displayedEmployers.map((employer) => (
    //                         <div
    //                             key={employer.id}
    //                             className="col-lg-4 col-md-6 col-12 d-flex align-items-stretch"
    //                             data-aos="fade-up"
    //                             data-aos-delay={300}
    //                         >
    //                             <div className="card">
    //                                 <div className="card-body pb-0">
    //                                     <div className="image img_block">
    //                                         <img src={employer.imageUrl} alt="img" />
    //                                     </div>
    //                                     <h5>{employer.title}</h5>
    //                                     <p>{employer.description}</p>
    //                                 </div>
    //                                 <div className="card-footer pb-3 bg-transparent border-0">
    //                                     <div className="pt-2">
    //                                         <a className="dual_button" href={employer.link}>
    //                                             Read More{' '}
    //                                             <img
    //                                                 className="ms-2"
    //                                                 src="assets/img/ArrowDownRight.png"
    //                                                 alt=""
    //                                             />
    //                                         </a>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     ))}
    //                     <div
    //                         className="col-12 mb-2 pt-lg-4 pt-md-3 text-center"
    //                         data-aos="fade-up"
    //                         data-aos-delay={300}
    //                     >
    //                         <button className="dual_button" onClick={() => setShowAll(!showAll)}>
    //                             {showAll ? 'Show Less' : 'Read More'}
    //                             <img className="ms-2" src="assets/img/button_arrow.png" alt="" />
    //                         </button>
    //                     </div>
    //                 </div>
    //             </div>
    //         </section>
    //     );
    // }

    // export default PopularEmployers;
    // import React, { useState } from 'react';

    // // Define your data (you can replace this with actual data fetching or static data)
    // const employersData = [
    //     {
    //         id: 1,
    //         imageUrl: 'assets/image/popular_employers/img-1.png',
    //         title: 'Rise partner audit gmbH wirts chaft sprüfun.',
    //         description: 'A project focused on using construction efforts to improve the future we pride ourselves on delivering.',
    //         link: '#', // Replace with actual link
    //     },
    //     {
    //         id: 2,
    //         imageUrl: 'assets/image/popular_employers/img-2.png',
    //         title: 'Rise partner audit gmbH wirts chaft sprüfun.',
    //         description: 'A project focused on using construction efforts to improve the future we pride ourselves on delivering.',
    //         link: '#', // Replace with actual link
    //     },
    //     {
    //         id: 3,
    //         imageUrl: 'assets/image/popular_employers/img-3.png',
    //         title: 'Rise partner audit gmbH wirts chaft sprüfun.',
    //         description: 'A project focused on using construction efforts to improve the future we pride ourselves on delivering.',
    //         link: '#', // Replace with actual link
    //     },
    //     {
    //         id: 4,
    //         imageUrl: 'assets/image/popular_employers/img-4.png',
    //         title: 'Rise partner audit gmbH wirts chaft sprüfun. Aasharib Hussain',
    //         description: 'A project focused on using construction efforts to improve the future we pride ourselves on delivering.',
    //         link: '#', // Replace with actual link
    //     },
    //     {
    //         id: 5,
    //         imageUrl: 'assets/image/popular_employers/img-5.png',
    //         title: 'Rise partner audit gmbH wirts chaft sprüfun. Aasharib Hussain',
    //         description: 'A project focused on using construction efforts to improve the future we pride ourselves on delivering.',
    //         link: '#', // Replace with actual link
    //     },
    // ];

    // function PopularEmployers() {
    //     const [showAll, setShowAll] = useState(false);

    //     const displayedEmployers = showAll ? employersData : employersData.slice(0, 3);

    //     return (
    //         <section className="popular_employers">
    //             <div className="container popular_employers_container">
    //                 <div className="row justify-content-center text-center mb-lg-5">
    //                     <div className="col-lg-6 col-md-8" data-aos="fade-up" data-aos-delay={200}>
    //                         <h1>Some of the most popular employers</h1>
    //                     </div>
    //                 </div>
    //                 <div className="row g-3">
    //                     {displayedEmployers.map((employer) => (
    //                         <div
    //                             key={employer.id}
    //                             className="col-lg-4 col-md-6 col-12 d-flex align-items-stretch"
    //                             data-aos="fade-up"
    //                             data-aos-delay={300}
    //                         >
    //                             <div className="card">
    //                                 <div className="card-body pb-0">
    //                                     <div className="image img_block">
    //                                         <img src={employer.imageUrl} alt="img" />
    //                                     </div>
    //                                     <h5>{employer.title}</h5>
    //                                     <p>{employer.description}</p>
    //                                 </div>
    //                                 <div className="card-footer pb-3 bg-transparent border-0">
    //                                     <div className="pt-2">
    //                                         <a className="dual_button" href={employer.link}>
    //                                             Read More{' '}
    //                                             <img
    //                                                 className="ms-2"
    //                                                 src="assets/img/ArrowDownRight.png"
    //                                                 alt=""
    //                                             />
    //                                         </a>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     ))}
    //                     <div
    //                         className="col-12 mb-2 pt-lg-4 pt-md-3 text-center"
    //                         data-aos="fade-up"
    //                         data-aos-delay={300}
    //                     >
    //                         <button className="dual_button" onClick={() => setShowAll(!showAll)}>
    //                             {showAll ? 'Show Less' : 'Read More'}
    //                             <img className="ms-2" src="assets/img/button_arrow.png" alt="" />
    //                         </button>
    //                     </div>
    //                 </div>
    //             </div>
    //         </section>
    //     );
    // }

    // export default PopularEmployers;
    // import React, { useState } from 'react';

    // // Define your data (you can replace this with actual data fetching or static data)
    // const employersData = [
    //     {
    //         id: 1,
    //         imageUrl: 'assets/image/popular_employers/img-1.png',
    //         title: 'Rise partner audit gmbH wirts chaft sprüfun.',
    //         description: 'A project focused on using construction efforts to improve the future we pride ourselves on delivering.',
    //         link: '#', // Replace with actual link
    //     },
    //     {
    //         id: 2,
    //         imageUrl: 'assets/image/popular_employers/img-2.png',
    //         title: 'Rise partner audit gmbH wirts chaft sprüfun.',
    //         description: 'A project focused on using construction efforts to improve the future we pride ourselves on delivering.',
    //         link: '#', // Replace with actual link
    //     },
    //     {
    //         id: 3,
    //         imageUrl: 'assets/image/popular_employers/img-3.png',
    //         title: 'Rise partner audit gmbH wirts chaft sprüfun.',
    //         description: 'A project focused on using construction efforts to improve the future we pride ourselves on delivering.',
    //         link: '#', // Replace with actual link
    //     },
    //     {
    //         id: 4,
    //         imageUrl: 'assets/image/popular_employers/img-4.png',
    //         title: 'Rise partner audit gmbH wirts chaft sprüfun. Aasharib Hussain',
    //         description: 'A project focused on using construction efforts to improve the future we pride ourselves on delivering.',
    //         link: '#', // Replace with actual link
    //     },
    //     {
    //         id: 5,
    //         imageUrl: 'assets/image/popular_employers/img-5.png',
    //         title: 'Rise partner audit gmbH wirts chaft sprüfun. Aasharib Hussain',
    //         description: 'A project focused on using construction efforts to improve the future we pride ourselves on delivering.',
    //         link: '#', // Replace with actual link
    //     },
    // ];

    // function PopularEmployers() {
    //     const [showAll, setShowAll] = useState(false);

    //     const displayedEmployers = showAll ? employersData : employersData.slice(0, 3);

    //     return (
    //         <section className="popular_employers">
    //             <div className="container popular_employers_container">
    //                 <div className="row justify-content-center text-center mb-lg-5">
    //                     <div className="col-lg-6 col-md-8" data-aos="fade-up" data-aos-delay={200}>
    //                         <h1>Some of the most popular employers</h1>
    //                     </div>
    //                 </div>
    //                 <div className="row g-3">
    //                     {displayedEmployers.map((employer) => (
    //                         <div
    //                             key={employer.id}
    //                             className="col-lg-4 col-md-6 col-12 d-flex align-items-stretch"
    //                             data-aos="fade-up"
    //                             data-aos-delay={300}
    //                         >
    //                             <div className="card">
    //                                 <div className="card-body pb-0">
    //                                     <div className="image img_block">
    //                                         <img src={employer.imageUrl} alt="img" />
    //                                     </div>
    //                                     <h5>{employer.title}</h5>
    //                                     <p>{employer.description}</p>
    //                                 </div>
    //                                 <div className="card-footer pb-3 bg-transparent border-0">
    //                                     <div className="pt-2">
    //                                         <a className="dual_button" href={employer.link}>
    //                                             Read More{' '}
    //                                             <img
    //                                                 className="ms-2"
    //                                                 src="assets/img/ArrowDownRight.png"
    //                                                 alt=""
    //                                             />
    //                                         </a>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     ))}
    //                     {!showAll && (
    //                         <div
    //                             className="col-12 mb-2 pt-lg-4 pt-md-3 text-center"
    //                             data-aos="fade-up"
    //                             data-aos-delay={300}
    //                         >
    //                             <button className="dual_button" onClick={() => setShowAll(true)}>
    //                                 Read More{' '}
    //                                 <img className="ms-2" src="assets/img/button_arrow.png" alt="" />
    //                             </button>
    //                         </div>
    //                     )}
    //                 </div>
    //             </div>
    //         </section>
    //     );
    // }

    // export default PopularEmployers;

    // import React from 'react'

    // function Popular_Employers() {
    //     return (
    //         <>
    //             <section className="popular_employers">
    //                 <div className="container popular_employers_container">
    //                     <div className="row justify-content-center text-center mb-lg-5">
    //                         <div
    //                             className="col-lg-6 col-md-8"
    //                             data-aos="fade-up"
    //                             data-aos-delay={200}
    //                         >
    //                             <h1>Some of the most popular employers</h1>
    //                         </div>
    //                     </div>
    //                     <div className="row g-3">
    //                         <div
    //                             className="col-lg-4 col-md-6 col-12 d-flex align-items-stretch"
    //                             data-aos="fade-up"
    //                             data-aos-delay={300}
    //                         >
    //                             <div className="card">
    //                                 <div className="card-body pb-0">
    //                                     <div className="image img_block">
    //                                         <img src="assets/image/popular_employers/img-1.png" alt="img" />
    //                                     </div>
    //                                     <h5>Rise partner audit gmbH wirts chaft sprüfun.</h5>
    //                                     <p>
    //                                         A project focused on using construction efforts to improve the
    //                                         future we pride ourselves on delivering.
    //                                     </p>
    //                                 </div>
    //                                 <div className="card-footer pb-3 bg-transparent border-0 ">
    //                                     <div className="pt-2">
    //                                         <a className="dual_button" href="#">
    //                                             Read More{" "}
    //                                             <img
    //                                                 className="ms-2"
    //                                                 src="assets/img/ArrowDownRight.png"
    //                                                 alt=""
    //                                             />
    //                                         </a>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                         <div
    //                             className="col-lg-4 col-md-6 col-12 d-flex align-items-stretch"
    //                             data-aos="fade-up"
    //                             data-aos-delay={300}
    //                         >
    //                             <div className="card">
    //                                 <div className="card-body pb-0">
    //                                     <div className="image img_block">
    //                                         <img src="assets/image/popular_employers/img-1.png" alt="img" />
    //                                     </div>
    //                                     <h5>Rise partner audit gmbH wirts chaft sprüfun.</h5>
    //                                     <p>
    //                                         A project focused on using construction efforts to improve the
    //                                         future we pride ourselves on delivering.
    //                                     </p>
    //                                 </div>
    //                                 <div className="card-footer pb-3 bg-transparent border-0 ">
    //                                     <div className="pt-2">
    //                                         <a className="dual_button" href="#">
    //                                             Read More{" "}
    //                                             <img
    //                                                 className="ms-2"
    //                                                 src="assets/img/ArrowDownRight.png"
    //                                                 alt=""
    //                                             />
    //                                         </a>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                         <div
    //                             className="col-lg-4 col-md-6 col-12 d-flex align-items-stretch"
    //                             data-aos="fade-up"
    //                             data-aos-delay={300}
    //                         >
    //                             <div className="card">
    //                                 <div className="card-body pb-0">
    //                                     <div className="image img_block">
    //                                         <img src="assets/image/popular_employers/img-1.png" alt="img" />
    //                                     </div>
    //                                     <h5>Rise partner audit gmbH wirts chaft sprüfun.</h5>
    //                                     <p>
    //                                         A project focused on using construction efforts to improve the
    //                                         future we pride ourselves on delivering.
    //                                     </p>
    //                                 </div>
    //                                 <div className="card-footer pb-3 bg-transparent border-0 ">
    //                                     <div className="pt-2">
    //                                         <a className="dual_button" href="#">
    //                                             Read More{" "}
    //                                             <img
    //                                                 className="ms-2"
    //                                                 src="assets/img/ArrowDownRight.png"
    //                                                 alt=""
    //                                             />
    //                                         </a>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                         <div
    //                             className="col-12 mb-2 pt-lg-4 pt-md-3 text-center"
    //                             data-aos="fade-up"
    //                             data-aos-delay={300}
    //                         >
    //                             <a className="pt-2">
    //                                 <div className="dual_button" href="#">
    //                                     Read More
    //                                     <img className="ms-2" src="assets/img/button_arrow.png" alt="" />
    //                                 </div>
    //                             </a>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </section>

    //         </>
    //     )
    // }

    // export default Popular_Employers;
    // import React from 'react';

    // // Define your data (you can replace this with actual data fetching or static data)
    // const employersData = [
    //     {
    //         id: 1,
    //         imageUrl: 'assets/image/popular_employers/img-1.png',
    //         title: 'Rise partner audit gmbH wirts chaft sprüfun.',
    //         description: 'A project focused on using construction efforts to improve the future we pride ourselves on delivering.',
    //         link: '#', // Replace with actual link
    //     },
    //     {
    //         id: 2,
    //         imageUrl: 'assets/image/popular_employers/img-2.png',
    //         title: 'Rise partner audit gmbH wirts chaft sprüfun.',
    //         description: 'A project focused on using construction efforts to improve the future we pride ourselves on delivering.',
    //         link: '#', // Replace with actual link
    //     },
    //     {
    //         id: 3,
    //         imageUrl: 'assets/image/popular_employers/img-3.png',
    //         title: 'Rise partner audit gmbH wirts chaft sprüfun.',
    //         description: 'A project focused on using construction efforts to improve the future we pride ourselves on delivering.',
    //         link: '#', // Replace with actual link
    //     },
    //     {
    //         id: 4,
    //         imageUrl: 'assets/image/popular_employers/img-3.png',
    //         title: 'Rise partner audit gmbH wirts chaft sprüfun. Aasharib Hussain',
    //         description: 'A project focused on using construction efforts to improve the future we pride ourselves on delivering.',
    //         link: '#', // Replace with actual link
    //     },
    //     {
    //         id: 5,
    //         imageUrl: 'assets/image/popular_employers/img-3.png',
    //         title: 'Rise partner audit gmbH wirts chaft sprüfun. Aasharib Hussain',
    //         description: 'A project focused on using construction efforts to improve the future we pride ourselves on delivering.',
    //         link: '#', // Replace with actual link
    //     },
    // ];

    // function PopularEmployers() {
    //     return (
    //         <section className="popular_employers">
    //             <div className="container popular_employers_container">
    //                 <div className="row justify-content-center text-center mb-lg-5">
    //                     <div className="col-lg-6 col-md-8" data-aos="fade-up" data-aos-delay={200}>
    //                         <h1>Some of the most popular employers</h1>
    //                     </div>
    //                 </div>
    //                 <div className="row g-3">
    //                     {employersData.map((employer) => (
    //                         <div
    //                             key={employer.id}
    //                             className="col-lg-4 col-md-6 col-12 d-flex align-items-stretch"
    //                             data-aos="fade-up"
    //                             data-aos-delay={300}
    //                         >
    //                             <div className="card">
    //                                 <div className="card-body pb-0">
    //                                     <div className="image img_block">
    //                                         <img src={employer.imageUrl} alt="img" />
    //                                     </div>
    //                                     <h5>{employer.title}</h5>
    //                                     <p>{employer.description}</p>
    //                                 </div>
    //                                 <div className="card-footer pb-3 bg-transparent border-0">
    //                                     <div className="pt-2">
    //                                         <a className="dual_button" href={employer.link}>
    //                                             Read More{' '}
    //                                             <img
    //                                                 className="ms-2"
    //                                                 src="assets/img/ArrowDownRight.png"
    //                                                 alt=""
    //                                             />
    //                                         </a>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     ))}
    //                     <div
    //                         className="col-12 mb-2 pt-lg-4 pt-md-3 text-center"
    //                         data-aos="fade-up"
    //                         data-aos-delay={300}
    //                     >
    //                         <a className="pt-2">
    //                             <div className="dual_button" href="#">
    //                                 Read More{' '}
    //                                 <img className="ms-2" src="assets/img/button_arrow.png" alt="" />
    //                             </div>
    //                         </a>
    //                     </div>
    //                 </div>
    //             </div>
    //         </section>
    //     );
    // }

    // export default PopularEmployers;
