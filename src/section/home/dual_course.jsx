import React from 'react';
import courses from '@/Dynamic-Data/home/international_companies-section/Data_dual_course';
import applyNowSections from '@/Dynamic-Data/home/international_companies-section/Data_applyNowSections';

const Dual_Course = () => {
    // Define your data array containing objects for each course


    // Function to convert index to English counting terms
    const getIndexLabel = (index) => {
        switch (index) {
            case 0:
                return "one";
            case 1:
                return "two";
            case 2:
                return "three";
            default:
                return ""; // Handle additional cases if necessary
        }
    };
    return (
        <>
            {/* ======= Dual Course Section ======= */}
            <section className="dual_course">
            <div className="container-lg container-fluid  dual_course_container">
                    <div className="row justify-content-center mb-lg-5 mb-3">
                        <div
                            className="col-lg-6 col-md-9"
                            data-aos="fade-up"
                            data-aos-delay={200}
                        >
                            <h1 className="text-center">
                                Apply now for a Dual Course of Study
                            </h1>
                        </div>
                    </div>
                    <div className="row px-3">
                        {courses.map((course, index) => (
                            <div
                                key={index}
                                className={`col-md-6 col-lg-4 column_${getIndexLabel(index)} px-0`}
                                data-aos="fade-up"
                                data-aos-delay={300 + index * 100}
                            >
                                <div className="block_apply_now">
                                    <div className="block_icons">
                                        <img src={course.icon} alt={course.title} />
                                    </div>
                                    <h5>{course.title}</h5>
                                    <p>{course.description}</p>
                                    <a href="#">
                                        <div className="dual_button">
                                            Dual Course of Study{" "}
                                            <img
                                                className="ms-2"
                                                src="assets/img/button_arrow.png"
                                                alt=""
                                            />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Second cards */}
                <div className="container-lg container-fluid apply_now_container">
                    <div className="row justify-content-center mb-lg-5 mb-3">
                        <div
                            className="col-lg-6 col-md-9"
                            data-aos="fade-up"
                            data-aos-delay={200}
                        >
                            <h1 className="text-center">Apply now for a Dual Course of Study</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row g-3">
                                {applyNowSections.map((section, index) => (
                                    <div
                                        key={index}
                                        className="col-lg-6 col-md-6 d-flex align-items-stretch"
                                        data-aos="fade-up"
                                        data-aos-delay={300}
                                    >
                                        <div className={section.cardClass}>
                                            <div className={section.innerClass}>
                                                <h5>{section.title}</h5>
                                                <p>{section.description}</p>
                                                <hr />
                                                {section.hasButton && (  // Render button conditionally
                                                    <a href={section.link}>
                                                        <div className="dual_button">
                                                            {section.buttonText}
                                                            <img
                                                                className="ms-2"
                                                                src="assets/img/button_arrow.png"
                                                                alt=""
                                                            />
                                                        </div>
                                                    </a>
                                                )}
                                            </div>
                                            {section.hasFooter && (
                                                <div className="card-footer border-0">
                                                    <hr />
                                                    <div className="d-flex justify-content-between align-items-center my-lg-2 mt-md-4">
                                                        <a href={section.link}>
                                                            <div className="dual_button">
                                                                {section.buttonText}
                                                                <img
                                                                    className="ms-2"
                                                                    src="assets/img/button_arrow.png"
                                                                    alt=""
                                                                />
                                                            </div>
                                                        </a>
                                                        <img
                                                            src="assets/img/apply/shape_boxes.png"
                                                            className="d-lg-block d-none"
                                                            alt=""
                                                        />
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Dual_Course;
