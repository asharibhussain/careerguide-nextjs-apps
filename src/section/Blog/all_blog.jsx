// import React, { useState } from 'react';
// import employersData from '@/Dynamic-Data/home/international_companies-section/Date_popular_employers';

// const All_Blog = () => {
//     const [showAll, setShowAll] = useState(false);

//     const displayedEmployers = showAll ? employersData : employersData.slice(0, 9);

//     return (
//         <section className="all_blog">
//             <div className="container all_blog_container">
//                 <div className="row mb-md-3 mb-2">
//                     <div className="col-lg-12">
//                         <h1>All blogs</h1>
//                     </div>
//                 </div>
//                 {/* <div className="row g-4">
//                     <div className="col-lg-4 col-md-6 col-12 d-flex align-items-stretch">
//                         <div className="card">
//                             <div className="card-body pb-0">
//                                 <div className="image img_block">
//                                     <img src="assets/image/popular_employers/img-1.png" alt="img" />
//                                 </div>
//                                 <h5>Rise partner audit gmbH wirts chaft sprüfun.</h5>
//                                 <p>
//                                     A project focused on using construction efforts to improve the
//                                     future we pride ourselves on delivering.
//                                 </p>
//                             </div>
//                             <div className="card-footer pb-3 bg-transparent border-0 ">
//                                 <div className="pt-2">
//                                     <a className="dual_button" href="#">
//                                         Read More
//                                         <img
//                                             className="ms-2"
//                                             src="assets/img/ArrowDownRight.png"
//                                             alt=""
//                                         />
//                                     </a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-lg-4 col-md-6 col-12 d-flex align-items-stretch">
//                         <div className="card">
//                             <div className="card-body pb-0">
//                                 <div className="image img_block">
//                                     <img src="assets/image/popular_employers/img-2.png" alt="img" />
//                                 </div>
//                                 <h5>Rise partner audit gmbH wirts chaft sprüfun.</h5>
//                                 <p>
//                                     A project focused on using construction efforts to improve the
//                                     future we pride ourselves on delivering.
//                                 </p>
//                             </div>
//                             <div className="card-footer pb-3 bg-transparent border-0 ">
//                                 <div className="pt-2">
//                                     <a className="dual_button" href="#">
//                                         Read More
//                                         <img
//                                             className="ms-2"
//                                             src="assets/img/ArrowDownRight.png"
//                                             alt=""
//                                         />
//                                     </a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-lg-4 col-md-6 col-12 d-flex align-items-stretch">
//                         <div className="card">
//                             <div className="card-body pb-0">
//                                 <div className="image img_block">
//                                     <img src="assets/image/popular_employers/img-3.png" alt="img" />
//                                 </div>
//                                 <h5>Rise partner audit gmbH wirts chaft sprüfun.</h5>
//                                 <p>
//                                     A project focused on using construction efforts to improve the
//                                     future we pride ourselves on delivering.
//                                 </p>
//                             </div>
//                             <div className="card-footer pb-3 bg-transparent border-0 ">
//                                 <div className="pt-2">
//                                     <a className="dual_button" href="#">
//                                         Read More
//                                         <img
//                                             className="ms-2"
//                                             src="assets/img/ArrowDownRight.png"
//                                             alt=""
//                                         />
//                                     </a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-lg-4 col-md-6 col-12 d-flex align-items-stretch">
//                         <div className="card">
//                             <div className="card-body pb-0">
//                                 <div className="image img_block">
//                                     <img src="assets/image/popular_employers/img-1.png" alt="img" />
//                                 </div>
//                                 <h5>Rise partner audit gmbH wirts chaft sprüfun.</h5>
//                                 <p>
//                                     A project focused on using construction efforts to improve the
//                                     future we pride ourselves on delivering.
//                                 </p>
//                             </div>
//                             <div className="card-footer pb-3 bg-transparent border-0 ">
//                                 <div className="pt-2">
//                                     <a className="dual_button" href="#">
//                                         Read More
//                                         <img
//                                             className="ms-2"
//                                             src="assets/img/ArrowDownRight.png"
//                                             alt=""
//                                         />
//                                     </a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-lg-4 col-md-6 col-12 d-flex align-items-stretch">
//                         <div className="card">
//                             <div className="card-body pb-0">
//                                 <div className="image img_block">
//                                     <img src="assets/image/popular_employers/img-2.png" alt="img" />
//                                 </div>
//                                 <h5>Rise partner audit gmbH wirts chaft sprüfun.</h5>
//                                 <p>
//                                     A project focused on using construction efforts to improve the
//                                     future we pride ourselves on delivering.
//                                 </p>
//                             </div>
//                             <div className="card-footer pb-3 bg-transparent border-0">
//                                 <div className="pt-2">
//                                     <a className="dual_button" href="#">
//                                         Read More
//                                         <img
//                                             className="ms-2"
//                                             src="assets/img/ArrowDownRight.png"
//                                             alt=""
//                                         />
//                                     </a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-lg-4 col-md-6 col-12 d-flex align-items-stretch">
//                         <div className="card">
//                             <div className="card-body pb-0">
//                                 <div className="image img_block">
//                                     <img src="assets/image/popular_employers/img-3.png" alt="img" />
//                                 </div>
//                                 <h5>Rise partner audit gmbH wirts chaft sprüfun.</h5>
//                                 <p>
//                                     A project focused on using construction efforts to improve the
//                                     future we pride ourselves on delivering.
//                                 </p>
//                             </div>
//                             <div className="card-footer pb-3 bg-transparent border-0">
//                                 <div className="pt-2">
//                                     <a className="dual_button" href="#">
//                                         Read More
//                                         <img
//                                             className="ms-2"
//                                             src="assets/img/ArrowDownRight.png"
//                                             alt=""
//                                         />
//                                     </a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-lg-4 col-md-6 col-12 d-flex align-items-stretch">
//                         <div className="card">
//                             <div className="card-body pb-0">
//                                 <div className="image img_block">
//                                     <img src="assets/image/popular_employers/img-1.png" alt="img" />
//                                 </div>
//                                 <h5>Rise partner audit gmbH wirts chaft sprüfun.</h5>
//                                 <p>
//                                     A project focused on using construction efforts to improve the
//                                     future we pride ourselves on delivering.
//                                 </p>
//                             </div>
//                             <div className="card-footer pb-3 bg-transparent border-0 ">
//                                 <div className="pt-2">
//                                     <a className="dual_button" href="#">
//                                         Read More
//                                         <img
//                                             className="ms-2"
//                                             src="assets/img/ArrowDownRight.png"
//                                             alt=""
//                                         />
//                                     </a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-lg-4 col-md-6 col-12 d-flex align-items-stretch">
//                         <div className="card">
//                             <div className="card-body pb-0">
//                                 <div className="image img_block">
//                                     <img src="assets/image/popular_employers/img-2.png" alt="img" />
//                                 </div>
//                                 <h5>Rise partner audit gmbH wirts chaft sprüfun.</h5>
//                                 <p>
//                                     A project focused on using construction efforts to improve the
//                                     future we pride ourselves on delivering.
//                                 </p>
//                             </div>
//                             <div className="card-footer pb-3 bg-transparent border-0">
//                                 <div className="pt-2">
//                                     <a className="dual_button" href="#">
//                                         Read More
//                                         <img
//                                             className="ms-2"
//                                             src="assets/img/ArrowDownRight.png"
//                                             alt=""
//                                         />
//                                     </a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-lg-4 col-md-6 col-12 d-flex align-items-stretch">
//                         <div className="card">
//                             <div className="card-body pb-0">
//                                 <div className="image img_block">
//                                     <img src="assets/image/popular_employers/img-3.png" alt="img" />
//                                 </div>
//                                 <h5>Rise partner audit gmbH wirts chaft sprüfun.</h5>
//                                 <p>
//                                     A project focused on using construction efforts to improve the
//                                     future we pride ourselves on delivering.
//                                 </p>
//                             </div>
//                             <div className="card-footer pb-3 bg-transparent border-0">
//                                 <div className="pt-2">
//                                     <a className="dual_button" href="#">
//                                         Read More
//                                         <img
//                                             className="ms-2"
//                                             src="assets/img/ArrowDownRight.png"
//                                             alt=""
//                                         />
//                                     </a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div> */}
//                                     <div className="row g-3">
//                         {displayedEmployers.map((employer) => (
//                             <div
//                                 key={employer.id}
//                                 className="col-lg-4 col-md-6 col-12 d-flex align-items-stretch"
//                                 data-aos="fade-up"
//                                 data-aos-delay={300}
//                             >
//                                 <div className="card">
//                                     <div className="card-body pb-0">
//                                         <div className="image img_block">
//                                             <img src={employer.imageUrl} alt="Employer" />
//                                         </div>
//                                         <h5>{employer.title}</h5>
//                                         <p>{employer.description}</p>
//                                     </div>
//                                     <div className="card-footer pb-3 bg-transparent border-0">
//                                         <div className="pt-2">
//                                             <a className="dual_button" href={employer.link}>
//                                                 Read More{' '}
//                                                 <img
//                                                     className="ms-2"
//                                                     src="assets/img/ArrowDownRight.png"
//                                                     alt="Arrow"
//                                                 />
//                                             </a>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                         <div
//                             className="col-12 mb-2 pt-lg-4 pt-md-3 text-center"
//                             data-aos="fade-up"
//                             data-aos-delay={300}
//                         >
//                             <button className="dual_button" onClick={() => setShowAll(!showAll)}>
//                                 {showAll ? 'Show Less' : 'Read More'}
//                                 <img className="ms-2" src="assets/img/button_arrow.png" alt="Arrow" />
//                             </button>
//                         </div>
//                     </div>
//                 <div className="row">
//                     <div className="col-lg-12">
//                         <div className="pt-lg-5 pt-3 text-center">
//                             <a href="#">
//                                 <div className="all_more_view_button">
//                                     Load More Results
//                                     <img src="assets/img/drop_down.png " alt="" />
//                                 </div>
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>

//     );
// };

// export default All_Blog;


import React, { useState } from 'react';
import employersData from '@/Dynamic-Data/home/international_companies-section/Date_popular_employers';

const All_Blog = () => {
    const [showAll, setShowAll] = useState(false);
    const [visibleCount, setVisibleCount] = useState(9);

    const displayedEmployers = showAll ? employersData : employersData.slice(0, visibleCount);

    const loadMore = () => {
        setVisibleCount(prevCount => prevCount + 9); // Increase visible count by 9
        setShowAll(true); // Show all results
    };

    const loadLess = () => {
        setVisibleCount(9); // Reset visible count to default
        setShowAll(false); // Hide "Show Less" button
    };

    return (
        <section className="all_blog">
            <div className="container all_blog_container">
                <div className="row mb-md-3 mb-2">
                    <div className="col-lg-12">
                        <h1>All blogs</h1>
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
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="pt-lg-5 pt-3 text-center">
                            {showAll ? (
                                <button className="all_more_view_button" onClick={loadLess}>
                                    Load Less Results
                                    <img src="assets/img/drop_up.png" alt="Arrow" />
                                </button>
                            ) : (
                                <button className="all_more_view_button" onClick={loadMore}>
                                    Load More Results
                                    <img src="assets/img/drop_down.png" alt="Arrow" />
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default All_Blog;
