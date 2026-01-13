// import React, { useState, useEffect } from 'react';
// import cardsData from '@/Dynamic-Data/videopage/cardsData';
// import RefineSearchComponent from '@/components/siderbars/RefineSearchComponent';

// function Video_Section() {
//     const [displayedCompanies, setDisplayedCompanies] = useState([]);
//     const [showAll, setShowAll] = useState(false);
//     const initialDisplayCount = 12; // Number of items initially displayed

//     useEffect(() => {
//         setDisplayedCompanies(companies.slice(0, initialDisplayCount));
//     }, [companies]);

//     const toggleShowAll = () => {
//         setShowAll(!showAll);
//     };

//     const loadMoreResults = () => {
//         setDisplayedCompanies(companies);
//         setShowAll(true);
//     };

//     const loadLessResults = () => {
//         setDisplayedCompanies(companies.slice(0, initialDisplayCount));
//         setShowAll(false);
//     };
//     return (
//         <>
//             <section className="video_section">
//                 <div className="container videos_container">
//                     <div className="row g-lg-5">
//                         <div className="col-lg-4 mb-3">
//                             <RefineSearchComponent />
//                         </div>
//                         <div className="col-lg-8">
//                             <div className="row ps-lg-4">
//                                 {cardsData.map((card, index) => (
//                                     <div className="col-lg-6 col-md-6 mb-3 d-flex align-items-stretch" key={index}>
//                                         <div className="card companies_logo_cards">
//                                             <div className="card-body">
//                                                 <div className="logo_div">
//                                                     <a
//                                                         href={card.videoLink}
//                                                         className="glightbox btn-watch-video"
//                                                     >
//                                                         <img src={card.playButtonImage} alt="Play" />
//                                                     </a>
//                                                 </div>
//                                                 <h5>{card.title}</h5>
//                                             </div>
//                                             <div className="card-footer bg-transparent border-0 pt-0">
//                                                 <div className="pb-2">
//                                                     <a href={card.detailLink}>
//                                                         <div className="logo_button">View Details</div>
//                                                     </a>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                             <div className="row">
//                             <div className="col-lg-12">
//                                 <div className="pt-lg-5 pt-3 text-center">
//                                     {showAll ? (
//                                         <button className="all_more_view_button" onClick={loadLessResults}>
//                                             Load Less Results
//                                             <img src="assets/img/drop_up.png" alt="" />
//                                         </button>
//                                     ) : (
//                                         <button className="all_more_view_button" onClick={loadMoreResults}>
//                                             Load More Results
//                                             <img src="assets/img/drop_down.png" alt="" />
//                                         </button>
//                                     )}
//                                 </div>
//                             </div>
//                         </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//         </>
//     )
// }

// export default Video_Section;
import React, { useState, useEffect } from 'react';
import cardsData from '@/Dynamic-Data/videopage/cardsData';
import RefineSearchComponent from '@/components/siderbars/RefineSearchComponent';

function Video_Section() {
    const [displayedCards, setDisplayedCards] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const initialDisplayCount = 8; // Initial number of cards to display

    useEffect(() => {
        // Set initial displayed cards
        setDisplayedCards(cardsData.slice(0, initialDisplayCount));
    }, []);

    const loadMoreResults = () => {
        // Show all cards
        setDisplayedCards(cardsData);
        setShowAll(true);
    };

    const loadLessResults = () => {
        // Show initial set of cards
        setDisplayedCards(cardsData.slice(0, initialDisplayCount));
        setShowAll(false);
    };

    return (
        <>
            <section className="video_section">
                <div className="container videos_container">
                    <div className="row g-lg-5">
                        <div className="col-lg-4 mb-3">
                            <RefineSearchComponent />
                        </div>
                        <div className="col-lg-8">
                            <div className="row ps-lg-4">
                                {displayedCards.map((card, index) => (
                                    <div className="col-lg-6 col-md-6 mb-3 d-flex align-items-stretch" key={index}>
                                        <div className="card companies_logo_cards">
                                            <div className="card-body">
                                                <div className="logo_div">
                                                    <a
                                                        href={card.videoLink}
                                                        className="glightbox btn-watch-video"
                                                    >
                                                        <img src={card.playButtonImage} alt="Play" />
                                                    </a>
                                                </div>
                                                <h5>{card.title}</h5>
                                            </div>
                                            <div className="card-footer bg-transparent border-0 pt-0">
                                                <div className="pb-2">
                                                    <a href={card.detailLink}>
                                                        <div className="logo_button">View Details</div>
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
                                            <button className="all_more_view_button" onClick={loadLessResults}>
                                                Load Less Results
                                                <img src="assets/img/drop_up.png" alt="" />
                                            </button>
                                        ) : (
                                            <button className="all_more_view_button" onClick={loadMoreResults}>
                                                Load More Results
                                                <img src="assets/img/drop_down.png" alt="" />
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Video_Section;
