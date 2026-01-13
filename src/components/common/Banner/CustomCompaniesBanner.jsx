import React from 'react';

const CustomCompaniesBanner = ({ boxGreenImg, boxTransparentImg, heading, subheading, placeholder, searchImg }) => {
    return (
        <section className="companies_banner">
            <div className="container-fluid overflow-hidden companies_banner_container px-0">
                <div className="position-relative">
                    <div className="box_green">
                        <img src={boxGreenImg} alt="Box Green" />
                    </div>
                    <div className="box_transparent">
                        <img src={boxTransparentImg} className="mb-4" alt="Box Transparent" />
                    </div>
                    <div className="d-flex justify-content-center">
                        <div className="text-center banner_heading_company">
                            <h1>{heading}</h1>
                            <p>{subheading}</p>
                            <div className="search">
                                <form action="" method="post">
                                    <input type="email" name="email" placeholder={placeholder} />
                                    <input type="submit" value="Search" />
                                    <img src={searchImg} alt="Search" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CustomCompaniesBanner;
