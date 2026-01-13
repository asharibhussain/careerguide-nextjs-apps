import React, { useEffect } from 'react';
import RefineSearchComponent from '@/components/siderbars/RefineSearchComponent';
import tagsData from '@/Dynamic-Data/seacher/tagsData';
import jobsData from '@/Dynamic-Data/seacher/jobsData';
import companyInfo from '@/Dynamic-Data/seacher/companyInfo ';
import { setupSeeMoreAndLess, setupViewAllAndLess, setupTooltips, initializeSlickSlider } from '../../utils/helpers/search';

const Search_Page = () => {
    useEffect(() => {
        setupSeeMoreAndLess();
        setupViewAllAndLess();
        setupTooltips();
        initializeSlickSlider();
    }, []);

    return (
        <section id="search" className="search pt-lg-5">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-3 mb-3">
                        <h6 className="search_heading_matching d-lg-block d-none">
                            <span>Search &gt;</span> 7 Companies matching your search
                        </h6>
                        <RefineSearchComponent />
                    </div>
                    <div className="col-lg-9 mb-3">
                        <div className="companies_tags">
                            <h5>7 Matches - These companies meet the following criteria:</h5>
                            <div className="d-flex flex-wrap py-2 gap-1">
                                {tagsData.map((tag, index) => (
                                    <div key={index} className="border rounded-pill p-1 pe-5 align-items-center d-inline-flex gap-2 tags_list">
                                        <a href="#">
                                            <img src={tag.imgSrc} alt="" />
                                        </a>{" "}
                                        {tag.text}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="card post_detail mb-5">
                            <div className="card-body post_body">
                                <div className="row">
                                    <div className="col-12 mb-2">
                                        <div className="heading_logo">
                                            <h5>EBP Deutschland GmbH</h5>
                                            <img src="assets/img/search/ebp_logo.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 pe-1 mb-3 d-inline-grid align-items-space-between">
                                        <div>
                                            <div className="logo_div">
                                                <a
                                                    href="https://www.youtube.com/watch?v=-MKapbz0GIo&ab_channel=GingerTiger"
                                                    className="glightbox btn-watch-video"
                                                >
                                                    <img src="assets/img/video/Play.svg" alt="" />
                                                </a>
                                            </div>

                                            {/* Open Jobs Section */}
                                            <div>
                                                <h5 className="open_jobs_tittle">Opened Jobs:</h5>
                                                <ul className="open_jobs_list">
                                                    {jobsData.map((job, index) => (
                                                        <li key={index}>
                                                            <a href="#">
                                                                <div>{job.title}</div>
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            {/* End of Open Jobs Section */}

                                        </div>
                                        <div className="py-lg-3 d-lg-inline-grid align-items-end d-none">
                                            <a href="#">
                                                <div className="logo_button">
                                                    Career Area{' '}
                                                    <img src="assets/img/ArrowDownRight.png" alt="" />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 ps-1 mb-3 d-inline-grid align-items-space-between">
                                        <div className="table_vertical bg-white d-inline-grid align-items-space-between">
                                            <div>
                                                <table className="table mb-0">
                                                    <tbody>
                                                        <tr>
                                                            <th>Head office</th>
                                                            <td>{companyInfo.headOffice}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Industry</th>
                                                            <td>{companyInfo.industry}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Locations in</th>
                                                            <td>
                                                                {companyInfo.locations}
                                                                <button
                                                                    type="button"
                                                                    className="bg-transparent border-0"
                                                                    data-toggle="tooltip"
                                                                    data-html="true"
                                                                    title="Baden Württemberg Bavaria Berlin Brandenburg Bremen Lower Saxony, North Rhine Westphalia"
                                                                >
                                                                    See 14+ contracts
                                                                </button>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th>No. of Employees</th>
                                                            <td>{companyInfo.employees}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <div className="post_heading py-2 border-bottom">
                                                    <h6>Preferred Grades</h6>
                                                    <p>{companyInfo.preferredGrades}</p>
                                                </div>
                                                <div className="post_heading py-2">
                                                    <h6>Type of contract</h6>
                                                    <p>
                                                        {companyInfo.contractTypes}
                                                        <button
                                                            type="button"
                                                            className="bg-transparent border-0"
                                                            data-toggle="tooltip"
                                                            data-html="true"
                                                            title="Baden Württemberg, Bavaria, Berlin, Brandenburg Bremen, Lower Saxony, North Rhine, Westphalia"
                                                        >
                                                            See 14+ contracts
                                                        </button>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="align-self-end">
                                                <div className="pt-2">
                                                    <a href="#">
                                                        <div className="logo_button">
                                                            Current Job Offers{' '}
                                                            <img src="assets/img/ArrowDownRight.png" alt="" />
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="pt-2 d-lg-none d-block">
                                                    <a href="#">
                                                        <div className="logo_button">
                                                            Career Area{' '}
                                                            <img src="assets/img/ArrowDownRight.png" alt="" />
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 text-center pt-lg-4">
                                        <div className="more_dettails" id="seeMoreBtn">
                                            More Details{" "}
                                            <img src="assets/img/search/ArrowUp.svg" alt="" />
                                        </div>
                                    </div>
                                    <div className="seeMore" style={{ display: "none" }}>
                                        <div className="row">
                                            <div className="col-lg-12 pb-lg-5 pb-3">
                                                <div className="company_about_slider my_slider_company_about">
                                                    <div className="slider">
                                                        <div className="slider-content">
                                                            <div className="about_img">
                                                                <img src="assets/img/search/search_1.png" alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="slider">
                                                        <div className="slider-content">
                                                            <div className="about_img">
                                                                <img src="assets/img/search/search_1.png" alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="slider">
                                                        <div className="slider-content">
                                                            <div className="about_img">
                                                                <img src="assets/img/search/search_1.png" alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="slider">
                                                        <div className="slider-content">
                                                            <div className="about_img">
                                                                <img src="assets/img/search/search_1.png" alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-7">
                                                <div className="about_us_detail border-bottom pb-3">
                                                    <h3>About us</h3>
                                                    <p>
                                                        Wir sind Fabasoft – der Marktführer im Bereich digitale
                                                        Dokumenten- und Prozess management systeme für die
                                                        öffentliche Verwaltung in Deutschland – und betreuen
                                                        großartige Projekte in den Bundes- sowie Landesbehörden.
                                                    </p>
                                                    <p>
                                                        Unser innovatives Produkt- und Dienstleis tungs
                                                        portfolio resultiert aus mehr als 30 Jahren Expertise,
                                                        Wertschätzung und Zusammenhalt. Wir bieten ein
                                                        abwechslungsreiches, spannendes Arbeitsumfeld mit viel
                                                        Raum zur beruflichen wie persönlichen Entfaltung und
                                                        Weiterentwicklung. Unterstützt durch modernste Technik
                                                        sowie attraktive Benefits, darunter das tägliche
                                                        Frühstück oder regelmäßige Teamevents, motivieren wir
                                                        uns gegenseitig, die Kundenbedürfnisse zu erfüllen und
                                                        die digitale Welt nachhaltig zu vereinfachen.
                                                    </p>
                                                    <p>
                                                        Digitalisierung ist deine Leidenschaft, du bist offen
                                                        für Neues und arbeitest gern im Team? Dann lass uns
                                                        reden!
                                                    </p>
                                                    <div className="pt-2">
                                                        <a href="#">
                                                            <div className="logo_button">
                                                                Visit Website{" "}
                                                                <img src="assets/img/ArrowDownRight.png" alt="" />
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="benefits_icons_list row">
                                                    <h3 className="pt-3">Benefits:</h3>
                                                    <div className="col-12 d-lg-none d-block">
                                                        <ul className="mb-5">
                                                            <li>
                                                                <img
                                                                    src="assets/img/benefits/Wheelchair.svg"
                                                                    alt=""
                                                                />{" "}
                                                                Accessibility
                                                            </li>
                                                            <li>
                                                                <img
                                                                    src="assets/img/benefits/Stethoscope.svg"
                                                                    alt=""
                                                                />{" "}
                                                                Company doctor
                                                            </li>
                                                            <li>
                                                                <img
                                                                    src="assets/img/benefits/PersonSimpleBike.svg"
                                                                    alt=""
                                                                />
                                                                PersonSimpleBike
                                                            </li>
                                                            <li>
                                                                <img
                                                                    src="assets/img/benefits/Confetti.svg"
                                                                    alt=""
                                                                />
                                                                Events and entertainment
                                                            </li>
                                                            <li>
                                                                <img src="assets/img/benefits/Coffee.svg" alt="" />
                                                                Free drinks
                                                            </li>
                                                            <li className="mb-0 position-relative">
                                                                <div className="linear_gradient viewAllBenfits">
                                                                    <div className="view_all_benefits d-flex align-items-center">
                                                                        View all benefits{" "}
                                                                        <img
                                                                            className="ms-4"
                                                                            src="assets/img/drop_down.png"
                                                                            alt=""
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li className="viewAll" style={{ display: "none" }}>
                                                                <ul>
                                                                    <li>
                                                                        <img
                                                                            src="assets/img/benefits/CarProfile.svg"
                                                                            alt=""
                                                                        />
                                                                        Company car
                                                                    </li>
                                                                    <li>
                                                                        <img
                                                                            src="assets/img/benefits/Train.svg"
                                                                            alt=""
                                                                        />
                                                                        Good transport connection
                                                                    </li>
                                                                    <li>
                                                                        <img
                                                                            src="assets/img/benefits/PawPrint.svg"
                                                                            alt=""
                                                                        />
                                                                        Dogs welcome
                                                                    </li>
                                                                    <li>
                                                                        <img
                                                                            src="assets/img/benefits/Group 1171275206.svg"
                                                                            alt=""
                                                                        />
                                                                        Childcare
                                                                    </li>
                                                                    <li>
                                                                        <img
                                                                            src="assets/img/benefits/Jeep.svg"
                                                                            alt=""
                                                                        />
                                                                        Parking spot
                                                                    </li>
                                                                    <li>
                                                                        <img
                                                                            src="assets/img/benefits/Barbell.svg"
                                                                            alt=""
                                                                        />
                                                                        Sports and leisure activities
                                                                    </li>
                                                                    <li>
                                                                        <img
                                                                            src="assets/img/benefits/LightbulbFilament.svg"
                                                                            alt=""
                                                                        />
                                                                        Further training
                                                                    </li>
                                                                    <li>
                                                                        <img
                                                                            src="assets/img/benefits/FlowerTulip.svg"
                                                                            alt=""
                                                                        />
                                                                        Work-Life Balance
                                                                    </li>
                                                                    <li>
                                                                        <img
                                                                            src="assets/img/benefits/Armchair.svg"
                                                                            alt=""
                                                                        />{" "}
                                                                        Employer-funded pension
                                                                    </li>
                                                                    <li>
                                                                        <img
                                                                            src="assets/img/benefits/HandHeart.svg"
                                                                            alt=""
                                                                        />{" "}
                                                                        Coaching &amp; Training
                                                                    </li>
                                                                    <li>
                                                                        <img
                                                                            src="assets/img/benefits/Group 1171275205.svg"
                                                                            alt=""
                                                                        />
                                                                        Business trips
                                                                    </li>
                                                                    <li>
                                                                        <img
                                                                            src="assets/img/benefits/Laptop.svg"
                                                                            alt=""
                                                                        />
                                                                        Company devices
                                                                    </li>
                                                                    <li>
                                                                        <img
                                                                            src="assets/img/benefits/HeartHalf.svg"
                                                                            alt=""
                                                                        />
                                                                        Health measures
                                                                    </li>
                                                                    <li>
                                                                        <img
                                                                            src="assets/img/benefits/CalendarCheck.svg"
                                                                            alt=""
                                                                        />
                                                                        Flexible working hours
                                                                    </li>
                                                                    <li>
                                                                        <img
                                                                            src="assets/img/benefits/HouseLine.svg"
                                                                            alt=""
                                                                        />
                                                                        Home office
                                                                    </li>
                                                                    <li>
                                                                        <img
                                                                            src="assets/img/benefits/ForkKnife.svg"
                                                                            alt=""
                                                                        />
                                                                        Canteen
                                                                    </li>
                                                                    <li>
                                                                        <img
                                                                            src="assets/img/benefits/Percent.svg"
                                                                            alt=""
                                                                        />
                                                                        Mitarebiterrabatte
                                                                    </li>
                                                                    <li>
                                                                        <img
                                                                            src="assets/img/benefits/Trophy.svg"
                                                                            alt=""
                                                                        />
                                                                        Rewards
                                                                    </li>
                                                                    <li>
                                                                        <img
                                                                            src="assets/img/benefits/GraduationCap.svg"
                                                                            alt=""
                                                                        />
                                                                        Hamlet education
                                                                    </li>
                                                                    <li>
                                                                        <img
                                                                            src="assets/img/benefits/WifiMedium.svg"
                                                                            alt=""
                                                                        />
                                                                        Wifi
                                                                    </li>
                                                                    <li>
                                                                        <img
                                                                            src="assets/img/benefits/PiggyBank.svg"
                                                                            alt=""
                                                                        />
                                                                        Additional compensation
                                                                    </li>
                                                                    <li>
                                                                        <div className="view_all_benefits d-flex align-items-center SeeLessBenfits">
                                                                            Show less benefits{" "}
                                                                            <img
                                                                                className="ms-4"
                                                                                src="assets/img/drop_down.png"
                                                                                alt=""
                                                                                style={{ transform: "rotate(180deg)" }}
                                                                            />
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-lg-6 d-lg-block d-none">
                                                        <ul>
                                                            <li>
                                                                <img
                                                                    src="assets/img/benefits/Wheelchair.svg"
                                                                    alt=""
                                                                />{" "}
                                                                Accessibility
                                                            </li>
                                                            <li>
                                                                <img
                                                                    src="assets/img/benefits/Stethoscope.svg"
                                                                    alt=""
                                                                />{" "}
                                                                Company doctor
                                                            </li>
                                                            <li>
                                                                <img
                                                                    src="assets/img/benefits/PersonSimpleBike.svg"
                                                                    alt=""
                                                                />
                                                                PersonSimpleBike
                                                            </li>
                                                            <li>
                                                                <img
                                                                    src="assets/img/benefits/Confetti.svg"
                                                                    alt=""
                                                                />
                                                                Events and entertainment
                                                            </li>
                                                            <li>
                                                                <img src="assets/img/benefits/Coffee.svg" alt="" />
                                                                Free drinks
                                                            </li>
                                                            <li>
                                                                <img
                                                                    src="assets/img/benefits/CarProfile.svg"
                                                                    alt=""
                                                                />
                                                                Company car
                                                            </li>
                                                            <li>
                                                                <img src="assets/img/benefits/Train.svg" alt="" />
                                                                Good transport connection
                                                            </li>
                                                            <li>
                                                                <img
                                                                    src="assets/img/benefits/PawPrint.svg"
                                                                    alt=""
                                                                />
                                                                Dogs welcome
                                                            </li>
                                                            <li>
                                                                <img
                                                                    src="assets/img/benefits/Group 1171275206.svg"
                                                                    alt=""
                                                                />
                                                                Childcare
                                                            </li>
                                                            <li>
                                                                <img src="assets/img/benefits/Jeep.svg" alt="" />
                                                                Parking spot
                                                            </li>
                                                            <li>
                                                                <img src="assets/img/benefits/Barbell.svg" alt="" />
                                                                Sports and leisure activities
                                                            </li>
                                                            <li>
                                                                <img
                                                                    src="assets/img/benefits/LightbulbFilament.svg"
                                                                    alt=""
                                                                />
                                                                Further training
                                                            </li>
                                                            <li>
                                                                <img
                                                                    src="assets/img/benefits/FlowerTulip.svg"
                                                                    alt=""
                                                                />
                                                                Work-Life Balance
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-lg-6 d-lg-block d-none">
                                                        <ul>
                                                            <li>
                                                                <img
                                                                    src="assets/img/benefits/Armchair.svg"
                                                                    alt=""
                                                                />{" "}
                                                                Employer-funded pension
                                                            </li>
                                                            <li>
                                                                <img
                                                                    src="assets/img/benefits/HandHeart.svg"
                                                                    alt=""
                                                                />{" "}
                                                                Coaching &amp; Training
                                                            </li>
                                                            <li>
                                                                <img
                                                                    src="assets/img/benefits/Group 1171275205.svg"
                                                                    alt=""
                                                                />
                                                                Business trips
                                                            </li>
                                                            <li>
                                                                <img src="assets/img/benefits/Laptop.svg" alt="" />
                                                                Company devices
                                                            </li>
                                                            <li>
                                                                <img
                                                                    src="assets/img/benefits/HeartHalf.svg"
                                                                    alt=""
                                                                />
                                                                Health measures
                                                            </li>
                                                            <li>
                                                                <img
                                                                    src="assets/img/benefits/CalendarCheck.svg"
                                                                    alt=""
                                                                />
                                                                Flexible working hours
                                                            </li>
                                                            <li>
                                                                <img
                                                                    src="assets/img/benefits/HouseLine.svg"
                                                                    alt=""
                                                                />
                                                                Home office
                                                            </li>
                                                            <li>
                                                                <img
                                                                    src="assets/img/benefits/ForkKnife.svg"
                                                                    alt=""
                                                                />
                                                                Canteen
                                                            </li>
                                                            <li>
                                                                <img src="assets/img/benefits/Percent.svg" alt="" />
                                                                Mitarebiterrabatte
                                                            </li>
                                                            <li>
                                                                <img src="assets/img/benefits/Trophy.svg" alt="" />
                                                                Rewards
                                                            </li>
                                                            <li>
                                                                <img
                                                                    src="assets/img/benefits/GraduationCap.svg"
                                                                    alt=""
                                                                />
                                                                Hamlet education
                                                            </li>
                                                            <li>
                                                                <img
                                                                    src="assets/img/benefits/WifiMedium.svg"
                                                                    alt=""
                                                                />
                                                                Wifi
                                                            </li>
                                                            <li>
                                                                <img
                                                                    src="assets/img/benefits/PiggyBank.svg"
                                                                    alt=""
                                                                />
                                                                Additional compensation
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-5">
                                                <div className="card contact_us_card">
                                                    <div className="card-body">
                                                        <div className="contact_heading pb-3 border-bottom mb-3">
                                                            <h6>Fabasoft Deutschland GmbH</h6>
                                                            <p>
                                                                Cannot find a suitable job with us? We are looking
                                                                forward to your{" "}
                                                                <a href="#">initiative application.</a>
                                                            </p>
                                                        </div>
                                                        <div className="contact_detail border-bottom pb-3 mb-3">
                                                            <div className="d-flex justify-content-between">
                                                                <div>
                                                                    <h6>Contact:</h6>
                                                                    <div className="d-flex py-2">
                                                                        <img
                                                                            src="assets/img/search/profile_dark.png"
                                                                            alt=""
                                                                        />
                                                                        <div className="ms-2">
                                                                            <p className="mb-0">
                                                                                Frau Flora Hackl Frau Flora Hackl
                                                                            </p>
                                                                            <p className="mb-0 job-tittle">
                                                                                Creative Director
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="profile_contact">
                                                                    <img
                                                                        src="assets/img/search/profile.png"
                                                                        alt=""
                                                                        className="img-fluid"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <ul className="mob_emai_list">
                                                                <li>
                                                                    <img
                                                                        src="assets/img/search/icons/phone.svg"
                                                                        alt=""
                                                                        className="me-1"
                                                                    />
                                                                    <div className="d-flex flex-wrap align-items-center">
                                                                        <div className="me-2">Telephone:</div>{" "}
                                                                        <span>000 142866969</span>
                                                                    </div>{" "}
                                                                </li>
                                                                <li>
                                                                    <img
                                                                        src="assets/img/search/icons/email.svg"
                                                                        alt=""
                                                                        className="me-1"
                                                                    />
                                                                    <div className="d-flex flex-wrap align-items-center">
                                                                        <div className="me-2">Mail address:</div>{" "}
                                                                        <span>example@mail.com</span>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                            <div className="d-flex address py-2">
                                                                <img
                                                                    src="assets/img/search/icons/address.svg"
                                                                    alt=""
                                                                />
                                                                <p className="mb-0 ms-2">
                                                                    THE SQUAIRE 14, Am Flughafen60549 Frankfurt am
                                                                    Main
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="meet_us border-bottom pb-3 mb-3">
                                                            <h6>Meet us Personally:</h6>
                                                            <p>02.11.2023, Frankfurt am Main</p>
                                                            <span className="mb-4">
                                                                Jobbörse für Naturwissenschaftler*innen
                                                            </span>
                                                            <p>16.11.2023, Langen</p>
                                                            <span className="mb-4">16.11.2023, Langen</span>
                                                            <p>16.11.2023, Langen</p>
                                                            <span>Karrieretag Life Sciences</span>
                                                        </div>
                                                        <div className="visit_us border-bottom pb-3 mb-3">
                                                            <h6>Visit us at:</h6>
                                                            <div className="social_icons d-flex flex-wrap gap-2 pt-lg-2">
                                                                <a href="">
                                                                    <div className="printest_img">
                                                                        <img
                                                                            src="assets/img/search/printest.png"
                                                                            alt=""
                                                                            className="img-fluid"
                                                                        />
                                                                    </div>
                                                                </a>
                                                                <a href="#">
                                                                    <div className="instagram">
                                                                        <img
                                                                            src="assets/img/search/instagram.png"
                                                                            alt=""
                                                                            className="img-fluid"
                                                                        />
                                                                    </div>
                                                                </a>
                                                                <a href="#">
                                                                    <div className="facebook">
                                                                        <img
                                                                            src="assets/img/search/facebook.png"
                                                                            alt=""
                                                                            className="img-fluid"
                                                                        />
                                                                    </div>
                                                                </a>
                                                                <a href="#">
                                                                    <div className="other">
                                                                        <img
                                                                            src="assets/img/search/other.png"
                                                                            alt=""
                                                                            className="img-fluid"
                                                                        />
                                                                    </div>
                                                                </a>
                                                                <a href="#">
                                                                    <div className="twitterfight">
                                                                        <img
                                                                            src="assets/img/search/twitterfight.png"
                                                                            alt=""
                                                                            className="img-fluid"
                                                                        />
                                                                    </div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="visit_us">
                                                            <h6>Awwards:</h6>
                                                            <div className="awards_images d-flex flex-wrap gap-2 pt-lg-2">
                                                                <a href="">
                                                                    <div className="">
                                                                        <img
                                                                            src="assets/img/search/award_1.png"
                                                                            alt=""
                                                                            className="img-fluid"
                                                                        />
                                                                    </div>
                                                                </a>
                                                                <a href="#">
                                                                    <div className="">
                                                                        <img
                                                                            src="assets/img/search/award_2.png"
                                                                            alt=""
                                                                            className="img-fluid"
                                                                        />
                                                                    </div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="table-responsive bg-white py-3 rounded px-3 mt-3 last_table">
                                                    <table className="table_css_lg table-borderless d-lg-table d-none">
                                                        <thead>
                                                            <tr>
                                                                <th>We are looking for</th>
                                                                <th>Courses of studies</th>
                                                                <th>Subjects</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>Natural sciences</td>
                                                                <td>Computer &amp; mathematics</td>
                                                                <td>
                                                                    Operating systems <br /> Data structures
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Computer &amp; mathematics</td>
                                                                <td />
                                                                <td>
                                                                    Software <br />
                                                                    <br />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Mathematics</td>
                                                                <td />
                                                                <td>
                                                                    Internet <br /> Programming
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <table className="table_css_md table-borderless d-lg-none d-grid">
                                                        <tbody>
                                                            <tr>
                                                                <th>We are looking for</th>
                                                                <td>Natural sciences</td>
                                                                <td>Computer &amp; mathematics</td>
                                                                <td>Mathematics</td>
                                                            </tr>
                                                            <tr>
                                                                <th>We are looking for</th>
                                                                <td>Natural sciences</td>
                                                                <td>Computer &amp; mathematics</td>
                                                                <td>Mathematics</td>
                                                                <td>Computer &amp; mathematics</td>
                                                            </tr>
                                                            <tr>
                                                                <th>Courses of studies</th>
                                                                <td>Natural sciences</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 ">
                                                <div className="tell_your_friends">
                                                    <h6>Tell Your Friends</h6>
                                                    <div className="d-flex flex-wrap gap-2 pt-2">
                                                        <a href="#">
                                                            <img src="assets/img/search/Email.svg" alt="" />
                                                        </a>
                                                        <a href="#">
                                                            <img src="assets/img/search/tell_2.svg" alt="" />
                                                        </a>
                                                        <a href="#">
                                                            <img
                                                                src="assets/img/search/icons/Twitter.svg"
                                                                alt=""
                                                            />
                                                        </a>
                                                        <a href="#">
                                                            <img src="assets/img/search/tell_4.svg" alt="" />
                                                        </a>
                                                        <a href="#">
                                                            <img src="assets/img/search/tell_5.svg" alt="" />
                                                        </a>
                                                        <a href="#">
                                                            <img src="assets/img/search/tell_6.svg" alt="" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 text-center pt-g-4">
                                                <div className="less_dettails" id="seeLessBtn">
                                                    Less Details{" "}
                                                    <img src="assets/img/search/ArrowDownRight.svg" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card post_detail mb-5">
                            <div className="card-body post_body">
                                <div className="row">
                                    <div className="col-12 mb-2">
                                        <div className="heading_logo">
                                            <h5>EBP Deutschland GmbH</h5>
                                            <img src="assets/img/search/ebp_logo.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 pe-1 mb-3 d-inline-grid align-items-space-between">
                                        <div>
                                            <div className="logo_div">
                                                <a
                                                    href="https://www.youtube.com/watch?v=-MKapbz0GIo&ab_channel=GingerTiger"
                                                    className="glightbox btn-watch-video"
                                                >
                                                    <img src="assets/img/video/Play.svg" alt="" />
                                                </a>
                                            </div>
                                            <h5 className="open_jobs_tittle">Opened Jobs:</h5>
                                            <ul className="open_jobs_list">
                                                <li>
                                                    <a href="#">
                                                        <div>
                                                            (Senior) Consultant Corporate Real Estate Advisory
                                                            (Senior) Consultant Corporate Real Estate Advisory...
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <div>
                                                            (Senior) Consultant Corporate Real Estate Advisory
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <div>(Senior) Manager Transaction Advisory</div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="py-lg-3 d-lg-inline-grid align-items-end d-none">
                                            <a href="#">
                                                <div className="logo_button">
                                                    Career Area{" "}
                                                    <img src="assets/img/ArrowDownRight.png" alt="" />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 ps-1 mb-3 d-inline-grid align-items-space-between">
                                        <div className="table_vertical bg-white d-inline-grid align-items-space-between">
                                            <div>
                                                <table className="table mb-0">
                                                    <tbody>
                                                        <tr>
                                                            <th>Head office</th>
                                                            <td>🇬🇪 Gergia</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Industry</th>
                                                            <td>Distribution, Transport &amp; Logistics</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Locations in</th>
                                                            <td>
                                                                Hessen, Baden-Württemberg, Bavaria, Berlin,
                                                                Brandenburg, Bremen.
                                                                <button
                                                                    type="button"
                                                                    className="bg-transparent border-0"
                                                                    data-toggle="tooltip"
                                                                    data-html="true"
                                                                    title="Baden Württemberg Bavaria Berlin Brandenburg Bremen Lower Saxony, North Rhine Westphalia"
                                                                >
                                                                    See 14+ contracts
                                                                </button>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th>No. of Employees</th>
                                                            <td>Hessen</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <div className="post_heading py-2 border-bottom">
                                                    <h6>Preferred Grades</h6>
                                                    <p>
                                                        Bachelor, Diploma, Master, MBA, Doctorate, State
                                                        examination
                                                    </p>
                                                </div>
                                                <div className="post_heading py-2">
                                                    <h6>Type of contract</h6>
                                                    <p>
                                                        Occupational studies, Employment, Dual course of study,
                                                        Industrial Placement (Internship), Mandatory legal
                                                        training, Diploma/Doctoral Thesis, Voluntary service,
                                                        Working student.
                                                        <button
                                                            type="button"
                                                            className="bg-transparent border-0"
                                                            data-toggle="tooltip"
                                                            data-html="true"
                                                            title="Baden Württemberg,BavariaBerlin, Brandenburg Bremen,Lower Saxony, North Rhine, Westphalia"
                                                        >
                                                            See 14+ contracts
                                                        </button>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="align-self-end">
                                                <div className="pt-2">
                                                    <a href="#">
                                                        <div className="logo_button">
                                                            Current Job Offers{" "}
                                                            <img src="assets/img/ArrowDownRight.png" alt="" />
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="pt-2 d-lg-none d-block">
                                                    <a href="#">
                                                        <div className="logo_button">
                                                            Career Area{" "}
                                                            <img src="assets/img/ArrowDownRight.png" alt="" />
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 text-center pt-lg-4">
                                        <div className="more_dettails" id="seeMoreBtnOne">
                                            More Details{" "}
                                            <img src="assets/img/search/ArrowUp.svg" alt="" />
                                        </div>
                                    </div>
                                    <div className="seeMoreOne" style={{ display: "none" }}>
                                        <div className="row">
                                            <div className="col-lg-12 pb-lg-5 pb-3">
                                                <div className="about_img">
                                                    <img src="assets/img/search/search_1.png" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-lg-7">
                                                <div className="about_us_detail border-bottom pb-3">
                                                    <h3>About us</h3>
                                                    <p>
                                                        Wir sind Fabasoft – der Marktführer im Bereich digitale
                                                        Dokumenten- und Prozess management systeme für die
                                                        öffentliche Verwaltung in Deutschland – und betreuen
                                                        großartige Projekte in den Bundes- sowie Landesbehörden.
                                                    </p>
                                                    <p>
                                                        Unser innovatives Produkt- und Dienstleis tungs
                                                        portfolio resultiert aus mehr als 30 Jahren Expertise,
                                                        Wertschätzung und Zusammenhalt. Wir bieten ein
                                                        abwechslungsreiches, spannendes Arbeitsumfeld mit viel
                                                        Raum zur beruflichen wie persönlichen Entfaltung und
                                                        Weiterentwicklung. Unterstützt durch modernste Technik
                                                        sowie attraktive Benefits, darunter das tägliche
                                                        Frühstück oder regelmäßige Teamevents, motivieren wir
                                                        uns gegenseitig, die Kundenbedürfnisse zu erfüllen und
                                                        die digitale Welt nachhaltig zu vereinfachen.
                                                    </p>
                                                    <p>
                                                        Digitalisierung ist deine Leidenschaft, du bist offen
                                                        für Neues und arbeitest gern im Team? Dann lass uns
                                                        reden!
                                                    </p>
                                                    <div className="pt-2">
                                                        <a href="#">
                                                            <div className="logo_button">
                                                                Visit Website{" "}
                                                                <img src="assets/img/ArrowDownRight.png" alt="" />
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="benefits_icons_list row">
                                                    <h3 className="pt-3">Benefits:</h3>
                                                    <div className="col-12 d-lg-none d-block">
                                                        <ul className="mb-5">
                                                            <li>
                                                                <img
                                                                    src="assets/img/benefits/Wheelchair.svg"
                                                                    alt=""
                                                                />{" "}
                                                                Accessibility
                                                            </li>
                                                            <li>
                                                                <img
                                                                    src="assets/img/benefits/Stethoscope.svg"
                                                                    alt=""
                                                                />{" "}
                                                                Company doctor
                                                            </li>
                                                            <li>
                                                                <img
                                                                    src="assets/img/benefits/PersonSimpleBike.svg"
                                                                    alt=""
                                                                />
                                                                PersonSimpleBike
                                                            </li>
                                                            <li>
                                                                <img
                                                                    src="assets/img/benefits/Confetti.svg"
                                                                    alt=""
                                                                />
                                                                Events and entertainment
                                                            </li>
                                                            <li>
                                                                <img src="assets/img/benefits/Coffee.svg" alt="" />
                                                                Free drinks
                                                            </li>
                                                            <li className="mb-0 position-relative">
                                                                <div className="linear_gradient viewAllBenfitsOne">
                                                                    <div className="view_all_benefits d-flex align-items-center">
                                                                        View all benefits{" "}
                                                                        <img
                                                                            className="ms-4"
                                                                            src="assets/img/drop_down.png"
                                                                            alt=""
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li
                                                                className="viewAllOne"
                                                                style={{ display: "none" }}
                                                            >
                                                                <ul>
                                                                    <li>
                                                                        <img
                                                                            src="assets/img/benefits/CarProfile.svg"
                                                                            alt=""
                                                                        />
                                                                        Company car
                                                                    </li>
                                                                    <li>
                                                                        <img
                                                                            src="assets/img/benefits/Train.svg"
                                                                            alt=""
                                                                        />
                                                                        Good transport connection
                                                                    </li>
                                                                    <li>
                                                                        <img
                                                                            src="assets/img/benefits/PawPrint.svg"
                                                                            alt=""
                                                                        />
                                                                        Dogs welcome
                                                                    </li>
                                                                    <li>
                                                                        <img
                                                                            src="assets/img/benefits/Group 1171275206.svg"
                                                                            alt=""
                                                                        />
                                                                        Childcare
                                                                    </li>
                                                                    <li>
                                                                        <img
                                                                            src="assets/img/benefits/Jeep.svg"
                                                                            alt=""
                                                                        />
                                                                        Parking spot
                                                                    </li>
                                                                    <li>
                                                                        <img
                                                                            src="assets/img/benefits/Barbell.svg"
                                                                            alt=""
                                                                        />
                                                                        Sports and leisure activities
                                                                    </li>
                                                                    <li>
                                                                        <img
                                                                            src="assets/img/benefits/LightbulbFilament.svg"
                                                                            alt=""
                                                                        />
                                                                        Further training
                                                                    </li>
                                                                    <li>
                                                                        <img
                                                                            src="assets/img/benefits/FlowerTulip.svg"
                                                                            alt=""
                                                                        />
                                                                        Work-Life Balance
                                                                    </li>
                                                                    <li>
                                                                        <img
                                                                            src="assets/img/benefits/Armchair.svg"
                                                                            alt=""
                                                                        />{" "}
                                                                        Employer-funded pension
                                                                    </li>
                                                                    <li>
                                                                        <img
                                                                            src="assets/img/benefits/HandHeart.svg"
                                                                            alt=""
                                                                        />{" "}
                                                                        Coaching &amp; Training
                                                                    </li>
                                                                    <li>
                                                                        <img
                                                                            src="assets/img/benefits/Group 1171275205.svg"
                                                                            alt=""
                                                                        />
                                                                        Business trips
                                                                    </li>
                                                                    <li>
                                                                        <img
                                                                            src="assets/img/benefits/Laptop.svg"
                                                                            alt=""
                                                                        />
                                                                        Company devices
                                                                    </li>
                                                                    <li>
                                                                        <img
                                                                            src="assets/img/benefits/HeartHalf.svg"
                                                                            alt=""
                                                                        />
                                                                        Health measures
                                                                    </li>
                                                                    <li>
                                                                        <img
                                                                            src="assets/img/benefits/CalendarCheck.svg"
                                                                            alt=""
                                                                        />
                                                                        Flexible working hours
                                                                    </li>
                                                                    <li>
                                                                        <img
                                                                            src="assets/img/benefits/HouseLine.svg"
                                                                            alt=""
                                                                        />
                                                                        Home office
                                                                    </li>
                                                                    <li>
                                                                        <img
                                                                            src="assets/img/benefits/ForkKnife.svg"
                                                                            alt=""
                                                                        />
                                                                        Canteen
                                                                    </li>
                                                                    <li>
                                                                        <img
                                                                            src="assets/img/benefits/Percent.svg"
                                                                            alt=""
                                                                        />
                                                                        Mitarebiterrabatte
                                                                    </li>
                                                                    <li>
                                                                        <img
                                                                            src="assets/img/benefits/Trophy.svg"
                                                                            alt=""
                                                                        />
                                                                        Rewards
                                                                    </li>
                                                                    <li>
                                                                        <img
                                                                            src="assets/img/benefits/GraduationCap.svg"
                                                                            alt=""
                                                                        />
                                                                        Hamlet education
                                                                    </li>
                                                                    <li>
                                                                        <img
                                                                            src="assets/img/benefits/WifiMedium.svg"
                                                                            alt=""
                                                                        />
                                                                        Wifi
                                                                    </li>
                                                                    <li>
                                                                        <img
                                                                            src="assets/img/benefits/PiggyBank.svg"
                                                                            alt=""
                                                                        />
                                                                        Additional compensation
                                                                    </li>
                                                                    <li>
                                                                        <div className="view_all_benefits d-flex align-items-center SeeLessBenfitsOne">
                                                                            Show less benefits{" "}
                                                                            <img
                                                                                className="ms-4"
                                                                                src="assets/img/drop_down.png"
                                                                                alt=""
                                                                                style={{ transform: "rotate(180deg)" }}
                                                                            />
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-lg-6 d-lg-block d-none">
                                                        <ul>
                                                            <li>
                                                                <img
                                                                    src="assets/img/benefits/Wheelchair.svg"
                                                                    alt=""
                                                                />{" "}
                                                                Accessibility
                                                            </li>
                                                            <li>
                                                                <img
                                                                    src="assets/img/benefits/Stethoscope.svg"
                                                                    alt=""
                                                                />{" "}
                                                                Company doctor
                                                            </li>
                                                            <li>
                                                                <img
                                                                    src="assets/img/benefits/PersonSimpleBike.svg"
                                                                    alt=""
                                                                />
                                                                PersonSimpleBike
                                                            </li>
                                                            <li>
                                                                <img
                                                                    src="assets/img/benefits/Confetti.svg"
                                                                    alt=""
                                                                />
                                                                Events and entertainment
                                                            </li>
                                                            <li>
                                                                <img src="assets/img/benefits/Coffee.svg" alt="" />
                                                                Free drinks
                                                            </li>
                                                            <li>
                                                                <img
                                                                    src="assets/img/benefits/CarProfile.svg"
                                                                    alt=""
                                                                />
                                                                Company car
                                                            </li>
                                                            <li>
                                                                <img src="assets/img/benefits/Train.svg" alt="" />
                                                                Good transport connection
                                                            </li>
                                                            <li>
                                                                <img
                                                                    src="assets/img/benefits/PawPrint.svg"
                                                                    alt=""
                                                                />
                                                                Dogs welcome
                                                            </li>
                                                            <li>
                                                                <img
                                                                    src="assets/img/benefits/Group 1171275206.svg"
                                                                    alt=""
                                                                />
                                                                Childcare
                                                            </li>
                                                            <li>
                                                                <img src="assets/img/benefits/Jeep.svg" alt="" />
                                                                Parking spot
                                                            </li>
                                                            <li>
                                                                <img src="assets/img/benefits/Barbell.svg" alt="" />
                                                                Sports and leisure activities
                                                            </li>
                                                            <li>
                                                                <img
                                                                    src="assets/img/benefits/LightbulbFilament.svg"
                                                                    alt=""
                                                                />
                                                                Further training
                                                            </li>
                                                            <li>
                                                                <img
                                                                    src="assets/img/benefits/FlowerTulip.svg"
                                                                    alt=""
                                                                />
                                                                Work-Life Balance
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-lg-6 d-lg-block d-none">
                                                        <ul>
                                                            <li>
                                                                <img
                                                                    src="assets/img/benefits/Armchair.svg"
                                                                    alt=""
                                                                />{" "}
                                                                Employer-funded pension
                                                            </li>
                                                            <li>
                                                                <img
                                                                    src="assets/img/benefits/HandHeart.svg"
                                                                    alt=""
                                                                />{" "}
                                                                Coaching &amp; Training
                                                            </li>
                                                            <li>
                                                                <img
                                                                    src="assets/img/benefits/Group 1171275205.svg"
                                                                    alt=""
                                                                />
                                                                Business trips
                                                            </li>
                                                            <li>
                                                                <img src="assets/img/benefits/Laptop.svg" alt="" />
                                                                Company devices
                                                            </li>
                                                            <li>
                                                                <img
                                                                    src="assets/img/benefits/HeartHalf.svg"
                                                                    alt=""
                                                                />
                                                                Health measures
                                                            </li>
                                                            <li>
                                                                <img
                                                                    src="assets/img/benefits/CalendarCheck.svg"
                                                                    alt=""
                                                                />
                                                                Flexible working hours
                                                            </li>
                                                            <li>
                                                                <img
                                                                    src="assets/img/benefits/HouseLine.svg"
                                                                    alt=""
                                                                />
                                                                Home office
                                                            </li>
                                                            <li>
                                                                <img
                                                                    src="assets/img/benefits/ForkKnife.svg"
                                                                    alt=""
                                                                />
                                                                Canteen
                                                            </li>
                                                            <li>
                                                                <img src="assets/img/benefits/Percent.svg" alt="" />
                                                                Mitarebiterrabatte
                                                            </li>
                                                            <li>
                                                                <img src="assets/img/benefits/Trophy.svg" alt="" />
                                                                Rewards
                                                            </li>
                                                            <li>
                                                                <img
                                                                    src="assets/img/benefits/GraduationCap.svg"
                                                                    alt=""
                                                                />
                                                                Hamlet education
                                                            </li>
                                                            <li>
                                                                <img
                                                                    src="assets/img/benefits/WifiMedium.svg"
                                                                    alt=""
                                                                />
                                                                Wifi
                                                            </li>
                                                            <li>
                                                                <img
                                                                    src="assets/img/benefits/PiggyBank.svg"
                                                                    alt=""
                                                                />
                                                                Additional compensation
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-5">
                                                <div className="card contact_us_card">
                                                    <div className="card-body">
                                                        <div className="contact_heading pb-3 border-bottom mb-3">
                                                            <h6>Fabasoft Deutschland GmbH</h6>
                                                            <p>
                                                                Cannot find a suitable job with us? We are looking
                                                                forward to your{" "}
                                                                <a href="#">initiative application.</a>
                                                            </p>
                                                        </div>
                                                        <div className="contact_detail border-bottom pb-3 mb-3">
                                                            <div className="d-flex justify-content-between">
                                                                <div>
                                                                    <h6>Contact:</h6>
                                                                    <div className="d-flex py-2">
                                                                        <img
                                                                            src="assets/img/search/profile_dark.png"
                                                                            alt=""
                                                                        />
                                                                        <div className="ms-2">
                                                                            <p className="mb-0">
                                                                                Frau Flora Hackl Frau Flora Hackl
                                                                            </p>
                                                                            <p className="mb-0 job-tittle">
                                                                                Creative Director
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="profile_contact">
                                                                    <img
                                                                        src="assets/img/search/profile.png"
                                                                        alt=""
                                                                        className="img-fluid"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <ul className="mob_emai_list">
                                                                <li>
                                                                    <img
                                                                        src="assets/img/search/icons/phone.svg"
                                                                        alt=""
                                                                        className="me-1"
                                                                    />
                                                                    <div className="d-flex flex-wrap align-items-center">
                                                                        <div className="me-2">Telephone:</div>{" "}
                                                                        <span>000 142866969</span>
                                                                    </div>{" "}
                                                                </li>
                                                                <li>
                                                                    <img
                                                                        src="assets/img/search/icons/email.svg"
                                                                        alt=""
                                                                        className="me-1"
                                                                    />
                                                                    <div className="d-flex flex-wrap align-items-center">
                                                                        <div className="me-2">Mail address:</div>{" "}
                                                                        <span>example@mail.com</span>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                            <div className="d-flex address py-2">
                                                                <img
                                                                    src="assets/img/search/icons/address.svg"
                                                                    alt=""
                                                                />
                                                                <p className="mb-0 ms-2">
                                                                    THE SQUAIRE 14, Am Flughafen60549 Frankfurt am
                                                                    Main
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="meet_us border-bottom pb-3 mb-3">
                                                            <h6>Meet us Personally:</h6>
                                                            <p>02.11.2023, Frankfurt am Main</p>
                                                            <span className="mb-4">
                                                                Jobbörse für Naturwissenschaftler*innen
                                                            </span>
                                                            <p>16.11.2023, Langen</p>
                                                            <span className="mb-4">16.11.2023, Langen</span>
                                                            <p>16.11.2023, Langen</p>
                                                            <span>Karrieretag Life Sciences</span>
                                                        </div>
                                                        <div className="visit_us border-bottom pb-3 mb-3">
                                                            <h6>Visit us at:</h6>
                                                            <div className="social_icons d-flex flex-wrap gap-2 pt-lg-2">
                                                                <a href="">
                                                                    <div className="printest_img">
                                                                        <img
                                                                            src="assets/img/search/printest.png"
                                                                            alt=""
                                                                            className="img-fluid"
                                                                        />
                                                                    </div>
                                                                </a>
                                                                <a href="#">
                                                                    <div className="instagram">
                                                                        <img
                                                                            src="assets/img/search/instagram.png"
                                                                            alt=""
                                                                            className="img-fluid"
                                                                        />
                                                                    </div>
                                                                </a>
                                                                <a href="#">
                                                                    <div className="facebook">
                                                                        <img
                                                                            src="assets/img/search/facebook.png"
                                                                            alt=""
                                                                            className="img-fluid"
                                                                        />
                                                                    </div>
                                                                </a>
                                                                <a href="#">
                                                                    <div className="other">
                                                                        <img
                                                                            src="assets/img/search/other.png"
                                                                            alt=""
                                                                            className="img-fluid"
                                                                        />
                                                                    </div>
                                                                </a>
                                                                <a href="#">
                                                                    <div className="twitterfight">
                                                                        <img
                                                                            src="assets/img/search/twitterfight.png"
                                                                            alt=""
                                                                            className="img-fluid"
                                                                        />
                                                                    </div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="visit_us">
                                                            <h6>Awwards:</h6>
                                                            <div className="awards_images d-flex flex-wrap gap-2 pt-lg-2">
                                                                <a href="">
                                                                    <div className="">
                                                                        <img
                                                                            src="assets/img/search/award_1.png"
                                                                            alt=""
                                                                            className="img-fluid"
                                                                        />
                                                                    </div>
                                                                </a>
                                                                <a href="#">
                                                                    <div className="">
                                                                        <img
                                                                            src="assets/img/search/award_2.png"
                                                                            alt=""
                                                                            className="img-fluid"
                                                                        />
                                                                    </div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="table-responsive bg-white py-3 rounded px-3 mt-3 last_table">
                                                    <table className="table_css_lg table-borderless d-lg-table d-none">
                                                        <thead>
                                                            <tr>
                                                                <th>We are looking for</th>
                                                                <th>Courses of studies</th>
                                                                <th>Subjects</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>Natural sciences</td>
                                                                <td>Computer &amp; mathematics</td>
                                                                <td>
                                                                    Operating systems <br /> Data structures
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Computer &amp; mathematics</td>
                                                                <td />
                                                                <td>
                                                                    Software <br />
                                                                    <br />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Mathematics</td>
                                                                <td />
                                                                <td>
                                                                    Internet <br /> Programming
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <table className="table_css_md table-borderless d-lg-none d-grid">
                                                        <tbody>
                                                            <tr>
                                                                <th>We are looking for</th>
                                                                <td>Natural sciences</td>
                                                                <td>Computer &amp; mathematics</td>
                                                                <td>Mathematics</td>
                                                            </tr>
                                                            <tr>
                                                                <th>We are looking for</th>
                                                                <td>Natural sciences</td>
                                                                <td>Computer &amp; mathematics</td>
                                                                <td>Mathematics</td>
                                                                <td>Computer &amp; mathematics</td>
                                                            </tr>
                                                            <tr>
                                                                <th>Courses of studies</th>
                                                                <td>Natural sciences</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 ">
                                                <div className="tell_your_friends">
                                                    <h6>Tell Your Friends</h6>
                                                    <div className="d-flex flex-wrap gap-2 pt-2">
                                                        <a href="#">
                                                            <img src="assets/img/search/Email.svg" alt="" />
                                                        </a>
                                                        <a href="#">
                                                            <img src="assets/img/search/tell_2.svg" alt="" />
                                                        </a>
                                                        <a href="#">
                                                            <img
                                                                src="assets/img/search/icons/Twitter.svg"
                                                                alt=""
                                                            />
                                                        </a>
                                                        <a href="#">
                                                            <img src="assets/img/search/tell_4.svg" alt="" />
                                                        </a>
                                                        <a href="#">
                                                            <img src="assets/img/search/tell_5.svg" alt="" />
                                                        </a>
                                                        <a href="#">
                                                            <img src="assets/img/search/tell_6.svg" alt="" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 text-center pt-4">
                                                <div className="less_dettails" id="seeLessBtnOne">
                                                    Less Details{" "}
                                                    <img src="assets/img/search/ArrowDownRight.svg" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="pt-3 text-center">
                                    <a href="#">
                                        <div className="all_more_view_button">
                                            Load More Results
                                            <img src="assets/img/drop_down.png " alt="" />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Search_Page;

