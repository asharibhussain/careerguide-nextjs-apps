// components/CompaniesBanner.js
import React from 'react';
const CompaniesBanner = () => {
    return (
        <section className="application_banner companies_banner">
            <div className="container-fluid overflow-hidden application_banner_container companies_banner_container px-0">
                <div className="position-relative">
                    <div className="box_green">
                        <img src="assets/img/company/box_green.png" alt="" />
                    </div>
                    <div className="box_transperent">
                        <img className="mb-4" src="assets/img/company/box_transperent.png" alt="" />
                    </div>
                    <div className="d-flex justify-content-center">
                        <div className="text-center banner_heading_company">
                            <h1>
                                All companies at a glance!
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CompaniesBanner;
