import React from 'react';
import Image from 'next/image'; // Import Image component from Next.js

const CompaniesBanner = () => {
    return (
        <section className="companies_banner">
            <div className="container-fluid overflow-hidden companies_banner_container px-0">
                <div className="position-relative">
                    <div className="box_green">
                        <img src="assets/img/company/box_green.png" alt="" />
                    </div>
                    <div className="box_transperent">
                        <img
                            className="mb-4"
                            src="assets/img/company/box_transperent.png"
                            alt=""
                        />
                    </div>
                    <div className="d-flex justify-content-center">
                        <div className="text-center banner_heading_company">
                            <h1>All companies at a glance!</h1>
                            <p>220 Matches - These companies meet the following criteria:</p>
                            <div className="search">
                                <form action="" method="post">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Looking For Companies ..."
                                    />
                                    <input type="submit" defaultValue="Search" />
                                    <img src="assets/img/company/MagnifyingGlass.svg" alt="" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default CompaniesBanner;
