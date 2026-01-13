import React, { useState } from 'react';
import optionsList from '../../Dynamic-Data/home/international_companies-section/Custom_Select.jsx';

const CustomSelect = () => {
    const [selectValues, setSelectValues] = useState([]);
    const [showAll, setShowAll] = useState(false);

    const handleSelectChange = (index, value) => {
        const newValues = [...selectValues];
        newValues[index] = value;
        setSelectValues(newValues);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Selected Values:', selectValues);
    };

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    return (
        <div className="international_companies">
            <div className="container-fluid international_companies_container">
                <div className="row justify-content-center faqs_card">
                    <div className="col-lg-10">
                        <div className="ps-lg-2 pe-lg-4">
                            <div className="card">
                                <div className="card-body">
                                    <form onSubmit={handleSubmit}>
                                        <div className="row g-3">
                                            {optionsList.map((options, index) => (
                                                <div
                                                    key={index}
                                                    className={`col-lg-6 col-md-6 ${index >= 5 && !showAll ? 'd-none' : ''}`}
                                                >
                                                    <div className="custom-select">
                                                        <select
                                                            value={selectValues[index] || ''}
                                                            onChange={(e) =>
                                                                handleSelectChange(index, parseInt(e.target.value))
                                                            }
                                                        >
                                                            {options.map((option) => (
                                                                <option key={option.value} value={option.value}>
                                                                    {option.label}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                </div>
                                            ))}
                                            {optionsList.length > 5 && (
                                                <div className="col-lg-6 col-md-6 mt-3">
                                                    <button
                                                        type="button"
                                                        className="show_all d-contents border-0"
                                                        onClick={toggleShowAll}
                                                    >
                                                        <div className="show_all_button">
                                                            {showAll ? 'Show Less' : 'Show All'}
                                                            <img
                                                                className="ms-2"
                                                                src="/assets/img/button_arrow.png"
                                                                alt=""
                                                            />
                                                        </div>
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomSelect;


// import React, { useState } from 'react';
// import optionsList from '../../Dynamic-Data/home/international_companies-section/Custom_Select.jsx';

// const CustomSelect = () => {
//     const [selectValues, setSelectValues] = useState([]);
//     const [showAll, setShowAll] = useState(false);

//     const handleSelectChange = (index, value) => {
//         const newValues = [...selectValues];
//         newValues[index] = value;
//         setSelectValues(newValues);
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         console.log('Selected Values:', selectValues);
//     };

//     const toggleShowAll = () => {
//         setShowAll(!showAll);
//     };

//     return (
//         <div className="international_companies">
//             <div className="container-fluid international_companies_container">
//                 <div className="row justify-content-center faqs_card">
//                     <div className="col-lg-10">
//                         <div className="ps-lg-2 pe-lg-4">
//                             <div className="card">
//                                 <div className="card-body">
//                                     <form onSubmit={handleSubmit}>
//                                         <div className="row g-3">
//                                             {optionsList.slice(0, showAll ? optionsList.length : 5).map((options, index) => (
//                                                 <div className="col-lg-6 col-md-6" key={index}>
//                                                     <div className="custom-select">
//                                                         <select
//                                                             value={selectValues[index] || ''}
//                                                             onChange={(e) =>
//                                                                 handleSelectChange(index, parseInt(e.target.value))
//                                                             }
//                                                         >
//                                                             {options.map((option) => (
//                                                                 <option key={option.value} value={option.value}>
//                                                                     {option.label}
//                                                                 </option>
//                                                             ))}
//                                                         </select>
//                                                     </div>
//                                                 </div>
//                                             ))}
//                                             {optionsList.length > 5 && (
//                                                 <div className="col-lg-6 col-md-6">
//                                                     <button
//                                                         type="button"
//                                                         className="show_all d-contents border-0"
//                                                         onClick={toggleShowAll}
//                                                     >
//                                                         <div className="show_all_button">
//                                                             {showAll ? 'Show Less' : 'Show All'}
//                                                             <img
//                                                                 className="ms-2"
//                                                                 src="/assets/img/button_arrow.png"
//                                                                 alt=""
//                                                             />
//                                                         </div>
//                                                     </button>
//                                                 </div>
//                                             )}
//                                         </div>
//                                     </form>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CustomSelect;

// import React, { useState } from 'react';
// import optionsList from '../../Dynamic-Data/home/international_companies-section/Custom_Select.jsx';

// const CustomSelect = () => {
//     const [selectValues, setSelectValues] = useState([]);
//     const [showAll, setShowAll] = useState(false);

//     const handleSelectChange = (index, value) => {
//         const newValues = [...selectValues];
//         newValues[index] = value;
//         setSelectValues(newValues);
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         console.log('Selected Values:', selectValues);
//     };

//     const toggleShowAll = () => {
//         setShowAll(!showAll);
//     };

//     return (
//         <div className="international_companies">
//             <div className="container-fluid international_companies_container">
//                 <div className="row justify-content-center faqs_card">
//                     <div className="col-lg-10">
//                         <div className="ps-lg-2 pe-lg-4">
//                             <div className="card">
//                                 <div className="card-body">
//                                     <form onSubmit={handleSubmit}>
//                                         <div className="row g-3">
//                                             {optionsList.map((options, index) => (
//                                                 <div
//                                                     key={index}
//                                                     className={`col-lg-6 col-md-6 ${index >= 5 && !showAll ? 'd-none' : ''}`}
//                                                 >
//                                                     <div className="custom-select">
//                                                         <select
//                                                             value={selectValues[index] || ''}
//                                                             onChange={(e) =>
//                                                                 handleSelectChange(index, parseInt(e.target.value))
//                                                             }
//                                                         >
//                                                             {options.map((option) => (
//                                                                 <option key={option.value} value={option.value}>
//                                                                     {option.label}
//                                                                 </option>
//                                                             ))}
//                                                         </select>
//                                                     </div>
//                                                 </div>
//                                             ))}
//                                         </div>
//                                         {optionsList.length > 5 && (
//                                             <div className="row g-3 mt-3">
//                                                 <div className="col-lg-6 col-md-6">
//                                                     <button
//                                                         type="button"
//                                                         className="show_all d-contents border-0"
//                                                         onClick={toggleShowAll}
//                                                     >
//                                                         <div className="show_all_button">
//                                                             {showAll ? 'Show Less' : 'Show All'}
//                                                             <img
//                                                                 className="ms-2"
//                                                                 src="/assets/img/button_arrow.png"
//                                                                 alt=""
//                                                             />
//                                                         </div>
//                                                     </button>
//                                                 </div>
//                                             </div>
//                                         )}
//                                     </form>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CustomSelect;

// import React, { useState } from 'react';
// import optionsList from '../../Dynamic-Data/home/international_companies-section/Custom_Select.jsx';

// const CustomSelect = () => {
//     // Initialize state for select values
//     const [selectValues, setSelectValues] = useState([]);

//     const handleSelectChange = (index, value) => {
//         const newValues = [...selectValues];
//         newValues[index] = value;
//         setSelectValues(newValues);
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         console.log('Selected Values:', selectValues);
//     };

//     return (
//         <div className="international_companies">
//             <div className="container-fluid international_companies_container">
//                 <div className="row justify-content-center faqs_card">
//                     <div className="col-lg-10">
//                         <div className="ps-lg-2 pe-lg-4">
//                             <div className="card">
//                                 <div className="card-body">
//                                     <form onSubmit={handleSubmit}>
//                                         <div className="row g-3">
//                                             {optionsList.map((options, index) => (
//                                                 <div className="col-lg-6 col-md-6" key={index}>
//                                                     <div className="custom-select">
//                                                         <select
//                                                             value={selectValues[index] || ''}
//                                                             onChange={(e) =>
//                                                                 handleSelectChange(index, parseInt(e.target.value))
//                                                             }
//                                                         >
//                                                             {options.map((option) => (
//                                                                 <option key={option.value} value={option.value}>
//                                                                     {option.label}
//                                                                 </option>
//                                                             ))}
//                                                         </select>
//                                                     </div>
//                                                 </div>
//                                             ))}
//                                             <div className="col-lg-6 col-md-6">
//                                                 <button type="submit" className="show_all d-contents border-0">
//                                                     <div className="show_all_button">
//                                                         Show All
//                                                         <img className="ms-2" src="/assets/img/button_arrow.png" alt="" />
//                                                     </div>
//                                                 </button>
//                                             </div>
//                                         </div>
//                                     </form>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CustomSelect;


// import React, { useState } from 'react';
// import optionsList from '../../Dynamic-Data/home/international_companies-section/Custom_Select.jsx';


// const Custom_select = () => {
//     // Initialize state for select values
//     const [selectValues, setSelectValues] = useState([]);

//     const handleSelectChange = (index, value) => {
//         const newValues = [...selectValues];
//         newValues[index] = value;
//         setSelectValues(newValues);
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         console.log('Selected Values:', selectValues);
//     };

//     // Define unique options for each select element
//     // const optionsList = [
//     //     [
//     //         { value: 0, label: 'Existing / Prospective degree 1' },
//     //         { value: 1, label: 'Low, economics and social sciences 1' },
//     //         { value: 2, label: 'Language media and cultural studies 1' },
//     //         { value: 3, label: 'Engineering 1' },
//     //     ],
//     //     [
//     //         { value: 0, label: 'Low, economics and social sciences 2' },
//     //         { value: 1, label: 'Low, economics and social sciences 2' },
//     //         { value: 2, label: 'Language media and cultural studies 2' },
//     //         { value: 3, label: 'Engineering 2' },
//     //     ],
//     //     [
//     //         { value: 0, label: 'Language media and cultural studies 3' },
//     //         { value: 1, label: 'Low, economics and social sciences 3' },
//     //         { value: 2, label: 'Language media and cultural studies 3' },
//     //         { value: 3, label: 'Engineering 3' },
//     //     ],
//     //     [
//     //         { value: 0, label: 'Engineering 4' },
//     //         { value: 1, label: 'Low, economics and social sciences 4' },
//     //         { value: 2, label: 'Language media and cultural studies 4' },
//     //         { value: 3, label: 'Engineering 4' },
//     //     ],
//     //     [
//     //         { value: 0, label: 'Existing / Prospective degree 5' },
//     //         { value: 1, label: 'Low, economics and social sciences 5' },
//     //         { value: 2, label: 'Language media and cultural studies 5' },
//     //         { value: 3, label: 'Engineering 5' },
//     //     ],
//     // ];

//     return (
//         <div className="international_companies">
//             <div className="container-fluid international_companies_container">
//                 <div className="row justify-content-center faqs_card">
//                     <div className="col-lg-10">
//                         <div className="ps-lg-2 pe-lg-4">
//                             <div className="card">
//                                 <div className="card-body">
//                                     <form onSubmit={handleSubmit}>
//                                         <div className="row g-3">
//                                             {optionsList.map((options, index) => (
//                                                 <div className="col-lg-6 col-md-6" key={index}>
//                                                     <div className="custom-select">
//                                                         <select
//                                                             value={selectValues[index] || ''}
//                                                             onChange={(e) =>
//                                                                 handleSelectChange(index, parseInt(e.target.value))
//                                                             }
//                                                         >
//                                                             {options.map((option) => (
//                                                                 <option key={option.value} value={option.value}>
//                                                                     {option.label}
//                                                                 </option>
//                                                             ))}
//                                                         </select>
//                                                     </div>
//                                                 </div>
//                                             ))}
//                                             <div className="col-lg-6 col-md-6">
//                                                 <button type="submit" className="show_all d-contents border-0">
//                                                     <div className="show_all_button">
//                                                         Show All
//                                                         <img className="ms-2" src="assets/img/button_arrow.png" alt="" />
//                                                     </div>
//                                                 </button>
//                                             </div>
//                                         </div>
//                                     </form>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Custom_select;