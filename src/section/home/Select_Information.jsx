import React, { useState, useEffect } from 'react';
import CompanyData from "@/Dynamic-Data/Components/common/Select_Information_coustum/Data_Select_Information";

const Select_Information = () => {

    const [selectedOptions, setSelectedOptions] = useState([]);
    const [showAll, setShowAll] = useState(false);

    const handleSelectChange = (index, value) => {
        const updatedOptions = [...selectedOptions];
        updatedOptions[index] = value;
        setSelectedOptions(updatedOptions);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission if needed
    };

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    return (
        <section id="select_information" className="select_information">
            <div
                className="container select_information_container"
                data-aos="fade-up"
                data-aos-delay={200}
            >
                <div className="first_img_bg">
                    <img src="assets/img/ellipse_3.png" alt="" />
                </div>
                <div className="second_img_bg">
                    <img src="assets/img/ellipse__1.png" alt="" />
                </div>
                <div className="third_img_bg">
                    <img src="assets/img/epllipse__2.png" alt="" />
                </div>
                <div className="forth_img_bg">
                    <img src="assets/img/ellipse__4.png" alt="" />
                </div>
                <div className="fifth_img_bg">
                    <img src="assets/img/ellipse__5.png" alt="" />
                </div>
                <div
                    className="row justify-content-center select_information_heading_row"
                >
                    <div className="col-lg-6 col-md-8 text-center">
                        <h2>Select from 219 Top international companies.</h2>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="card select_information_card">
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="row g-3">
                                        {CompanyData.map((company, index) => (
                                            <div
                                                key={index}
                                                className={`col-lg-6 col-md-6 ${index >= 5 && !showAll ? "d-none" : ""
                                                    }`}
                                            >
                                                <div className="custom-select">
                                                    <select
                                                        value={selectedOptions[index] || ""}
                                                        onChange={(e) =>
                                                            handleSelectChange(index, e.target.value)
                                                        }
                                                    >
                                                        <option value=""> {company.name}</option>
                                                        {company.options.map((option, optionIndex) => (
                                                            <option
                                                                key={optionIndex}
                                                                value={option.value}
                                                            >
                                                                {option.label}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                        ))}
                                        <div className="col-lg-6 col-md-6">
                                            <button
                                                type="button"
                                                className="show_all d-contents border-0"
                                                onClick={toggleShowAll}
                                            >
                                                <div className="show_all_button">
                                                    {showAll ? (
                                                        <>
                                                            Show Less
                                                            <img
                                                                className="ms-2"
                                                                src="assets/img/button_arrow.png"
                                                                alt=""
                                                            />
                                                        </>
                                                    ) : (
                                                        <>
                                                            Show All
                                                            <img
                                                                className="ms-2"
                                                                src="assets/img/button_arrow.png"
                                                                alt=""
                                                            />
                                                        </>
                                                    )}
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Select_Information;