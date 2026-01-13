// import React, { useState } from 'react';

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
//     const optionsList = [
//         [
//             { value: 0, label: 'Existing / Prospective degree 1' },
//             { value: 1, label: 'Low, economics and social sciences 1' },
//             { value: 2, label: 'Language media and cultural studies 1' },
//             { value: 3, label: 'Engineering 1' },
//         ],
//         [
//             { value: 0, label: 'Low, economics and social sciences 2' },
//             { value: 1, label: 'Low, economics and social sciences 2' },
//             { value: 2, label: 'Language media and cultural studies 2' },
//             { value: 3, label: 'Engineering 2' },
//         ],
//         [
//             { value: 0, label: 'Language media and cultural studies 3' },
//             { value: 1, label: 'Low, economics and social sciences 3' },
//             { value: 2, label: 'Language media and cultural studies 3' },
//             { value: 3, label: 'Engineering 3' },
//         ],
//         [
//             { value: 0, label: 'Engineering 4' },
//             { value: 1, label: 'Low, economics and social sciences 4' },
//             { value: 2, label: 'Language media and cultural studies 4' },
//             { value: 3, label: 'Engineering 4' },
//         ],
//         [
//             { value: 0, label: 'Existing / Prospective degree 5' },
//             { value: 1, label: 'Low, economics and social sciences 5' },
//             { value: 2, label: 'Language media and cultural studies 5' },
//             { value: 3, label: 'Engineering 5' },
//         ],
//     ];

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

// export default custom_select;


// // import { useState } from 'react';

// // const DynamicForm = () => {
// //     // Initialize state for 5 select elements
// //     const [selectValues, setSelectValues] = useState(Array(6).fill(0));

// //     const handleSelectChange = (index, value) => {
// //         const newValues = [...selectValues];
// //         newValues[index] = value;
// //         setSelectValues(newValues);
// //     };

// //     const handleSubmit = (event) => {
// //         event.preventDefault();
// //         console.log('Selected Values:', selectValues);
// //     };

// //     // Define unique options for each select element
// //     const optionsList = [
// //         [
// //             { value: 0, label: 'Existing / Prospective degree 1' },
// //             { value: 1, label: 'Low, economics and social sciences 1' },
// //             { value: 2, label: 'Language media and cultural studies 1' },
// //             { value: 3, label: 'Engineering 1' },
// //         ],
// //         [
// //             { value: 0, label: 'Low, economics and social sciences 2' },
// //             { value: 1, label: 'Low, economics and social sciences 2' },
// //             { value: 2, label: 'Language media and cultural studies 2' },
// //             { value: 3, label: 'Engineering 2' },
// //         ],
// //         [
// //             { value: 0, label: 'Language media and cultural studies 3' },
// //             { value: 1, label: 'Low, economics and social sciences 3' },
// //             { value: 2, label: 'Language media and cultural studies 3' },
// //             { value: 3, label: 'Engineering 3' },
// //         ],
// //         [
// //             { value: 0, label: 'Engineering 4' },
// //             { value: 1, label: 'Low, economics and social sciences 4' },
// //             { value: 2, label: 'Language media and cultural studies 4' },
// //             { value: 3, label: 'Engineering 4' },
// //         ],
// //         [
// //             { value: 0, label: 'Existing / Prospective degree 5' },
// //             { value: 1, label: 'Low, economics and social sciences 5' },
// //             { value: 2, label: 'Language media and cultural studies 5' },
// //             { value: 3, label: 'Engineering 5' },
// //         ],
// //         [
// //             { value: 0, label: 'Asharib hussain' },
// //             { value: 1, label: 'Low, economics and social sciences 5' },
// //             { value: 2, label: 'Language media and cultural studies 5' },
// //             { value: 3, label: 'Engineering 5' },
// //         ],
// //     ];

// //     return (
// //         <div className="international_companies">
// //             <div className="container-fluid international_companies_container">
// //                 <div className="row justify-content-center faqs_card">
// //                     <div className="col-lg-10">
// //                         <div className="ps-lg-2 pe-lg-4">
// //                             <div className="card">
// //                                 <div className="card-body">
// //                                     <form onSubmit={handleSubmit}>
// //                                         <div className="row g-3">
// //                                             {selectValues.map((value, index) => (
// //                                                 <div className="col-lg-6 col-md-6" key={index}>
// //                                                     <div className="custom-select">
// //                                                         <select
// //                                                             value={value}
// //                                                             onChange={(e) =>
// //                                                                 handleSelectChange(index, parseInt(e.target.value))
// //                                                             }
// //                                                         >
// //                                                             {optionsList[index].map((option) => (
// //                                                                 <option key={option.value} value={option.value}>
// //                                                                     {option.label}
// //                                                                 </option>
// //                                                             ))}
// //                                                         </select>
// //                                                     </div>
// //                                                 </div>
// //                                             ))}
// //                                             <div className="col-lg-6 col-md-6">
// //                                                 <button type="submit" className="show_all d-contents border-0">
// //                                                     <div className="show_all_button">
// //                                                         Show All
// //                                                         <img className="ms-2" src="assets/img/button_arrow.png" alt="" />
// //                                                     </div>
// //                                                 </button>
// //                                             </div>
// //                                         </div>
// //                                     </form>
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default DynamicForm;

// // components/DynamicForm.js
// // import { useState } from 'react';

// // const DynamicForm = () => {
// //     const [selectValues, setSelectValues] = useState(Array(5).fill(0)); // Initialize state for 5 select elements

// //     const handleSelectChange = (index, value) => {
// //         const newValues = [...selectValues];
// //         newValues[index] = value;
// //         setSelectValues(newValues);
// //     };

// //     const handleSubmit = (event) => {
// //         event.preventDefault();
// //         console.log('Selected Values:', selectValues);
// //     };

// //     // Define unique options for each select element
// //     const optionsList = [
// //         [
// //             { value: 0, label: 'Existing / Prospective degree 1' },
// //             { value: 1, label: 'Low, economics and social sciences 1' },
// //             { value: 2, label: 'Language media and cultural studies 1' },
// //             { value: 3, label: 'Engineering 1' },
// //         ],
// //         [
// //             { value: 0, label: 'Low, economics and social sciences 2' },
// //             { value: 1, label: 'Low, economics and social sciences 2' },
// //             { value: 2, label: 'Language media and cultural studies 2' },
// //             { value: 3, label: 'Engineering 2' },
// //         ],
// //         [
// //             { value: 0, label: 'Language media and cultural studies 3' },
// //             { value: 1, label: 'Low, economics and social sciences 3' },
// //             { value: 2, label: 'Language media and cultural studies 3' },
// //             { value: 3, label: 'Engineering 3' },
// //         ],
// //         [
// //             { value: 0, label: 'Engineering 4' },
// //             { value: 1, label: 'Low, economics and social sciences 4' },
// //             { value: 2, label: 'Language media and cultural studies 4' },
// //             { value: 3, label: 'Engineering 4' },
// //         ],
// //         [
// //             { value: 0, label: 'Existing / Prospective degree 5' },
// //             { value: 1, label: 'Low, economics and social sciences 5' },
// //             { value: 2, label: 'Language media and cultural studies 5' },
// //             { value: 3, label: 'Engineering 5' },
// //         ],
// //     ];

// //     return (
// //         <div className="international_companies">
// //             <div className="container-fluid international_companies_container">
// //                 <div className="row justify-content-center faqs_card">
// //                     <div className="col-lg-10">
// //                         <div className="ps-lg-2 pe-lg-4">
// //                             <div className="card">
// //                                 <div className="card-body">
// //                                     <form onSubmit={handleSubmit}>
// //                                         <div className="row g-3">
// //                                             {selectValues.map((value, index) => (
// //                                                 <div className="col-lg-6 col-md-6" key={index}>
// //                                                     <div className="custom-select">
// //                                                         <select
// //                                                             value={value}
// //                                                             onChange={(e) =>
// //                                                                 handleSelectChange(index, parseInt(e.target.value))
// //                                                             }
// //                                                         >
// //                                                             {optionsList[index].map((option) => (
// //                                                                 <option key={option.value} value={option.value}>
// //                                                                     {option.label}
// //                                                                 </option>
// //                                                             ))}
// //                                                         </select>
// //                                                     </div>
// //                                                 </div>
// //                                             ))}
// //                                             <div className="col-lg-6 col-md-6">
// //                                                 <button
// //                                                     type="submit"
// //                                                     className="show_all d-contents border-0"
// //                                                 >
// //                                                     <div className="show_all_button">
// //                                                         Show All
// //                                                         <img
// //                                                             className="ms-2"
// //                                                             src="assets/img/button_arrow.png"
// //                                                             alt=""
// //                                                         />
// //                                                     </div>
// //                                                 </button>
// //                                             </div>
// //                                         </div>
// //                                     </form>
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default DynamicForm;

// // components/DynamicForm.js
// // import { useState } from 'react';

// // const DynamicForm = () => {
// //   const [selectValues, setSelectValues] = useState(Array(5).fill(0)); // Initialize state for 5 select elements

// //   const handleSelectChange = (index, value) => {
// //     const newValues = [...selectValues];
// //     newValues[index] = value;
// //     setSelectValues(newValues);
// //   };

// //   const handleSubmit = (event) => {
// //     event.preventDefault();
// //     console.log('Selected Values:', selectValues);
// //   };

// //   const options = [
// //     { value: 0, label: 'Existing / Prospective degree' },
// //     { value: 1, label: 'Low, economics and social sciences' },
// //     { value: 2, label: 'Language media and cultural studies' },
// //     { value: 3, label: 'Engineering' },
// //   ];

// //   return (
// //     <div className="international_companies">
// //       <div className="container-fluid international_companies_container">
// //         <div className="row justify-content-center faqs_card">
// //           <div className="col-lg-10">
// //             <div className="ps-lg-2 pe-lg-4">
// //               <div className="card">
// //                 <div className="card-body">
// //                   <form onSubmit={handleSubmit}>
// //                     <div className="row g-3">
// //                       {selectValues.map((value, index) => (
// //                         <div className="col-lg-6 col-md-6" key={index}>
// //                           <div className="custom-select">
// //                             <select
// //                               value={value}
// //                               onChange={(e) =>
// //                                 handleSelectChange(index, parseInt(e.target.value))
// //                               }
// //                             >
// //                               {options.map((option) => (
// //                                 <option key={option.value} value={option.value}>
// //                                   {option.label}
// //                                 </option>
// //                               ))}
// //                             </select>
// //                           </div>
// //                         </div>
// //                       ))}
// //                       <div className="col-lg-6 col-md-6">
// //                         <button
// //                           type="submit"
// //                           className="show_all d-contents border-0"
// //                         >
// //                           <div className="show_all_button">
// //                             Show All
// //                             <img
// //                               className="ms-2"
// //                               src="assets/img/button_arrow.png"
// //                               alt=""
// //                             />
// //                           </div>
// //                         </button>
// //                       </div>
// //                     </div>
// //                   </form>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default DynamicForm;



// // import React, { useState } from 'react';

// // const YourComponent = () => {
// //     // Define options
// //     const options = [
// //         { value: 1, label: 'Option 1' },
// //         { value: 2, label: 'Option 2' },
// //         { value: 3, label: 'Option 3' }
// //     ];

// //     // Initialize selectedOptions state
// //     const [selectedOptions, setSelectedOptions] = useState(Array(options.length).fill(options[0].value));

// //     // Function to handle select change
// //     const handleSelectChange = (index, value) => {
// //         const newSelectedOptions = [...selectedOptions];
// //         newSelectedOptions[index] = value;
// //         setSelectedOptions(newSelectedOptions);
// //     };

// //     const handleSubmit = (event) => {
// //         event.preventDefault();
// //         // Your form submission logic
// //     };

// //     return (
// //         <div className="international_companies">
// //             <div className="container-fluid international_companies_container">
// //                 <div className="row justify-content-center faqs_card">
// //                     <div className="col-lg-10">
// //                         <div className=" ps-lg-2 pe-lg-4">
// //                             <div className="card">
// //                                 <div className="card-body">
// //                                     <form onSubmit={handleSubmit}>
// //                                         <div className="row g-3">
// //                                             {options.map((option, index) => (
// //                                                 <div key={index} className="col-lg-6 col-md-6">
// //                                                     <div className="custom-select">
// //                                                         <select value={selectedOptions[index]} onChange={(e) => handleSelectChange(index, parseInt(e.target.value))}>
// //                                                             {options.map((opt) => (
// //                                                                 <option key={opt.value} value={opt.value}>{opt.label}</option>
// //                                                             ))}
// //                                                         </select>
// //                                                         <span className="custom-arrow"></span>
// //                                                     </div>
// //                                                 </div>
// //                                             ))}
// //                                             <div className="col-lg-6 col-md-6">
// //                                                 <button type="submit" className="show_all d-contents border-0">
// //                                                     <div className="show_all_button">
// //                                                         Show All{' '}
// //                                                         <img className="ms-2" src="assets/img/button_arrow.png" alt="" />
// //                                                     </div>
// //                                                 </button>
// //                                             </div>
// //                                         </div>
// //                                     </form>
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default YourComponent;






// // import React, { useState } from 'react';

// // const options = [
// //     { value: 0, label: 'Existing / Prospective degree' },
// //     { value: 1, label: 'Low, economics and social sciences' },
// //     { value: 2, label: 'Language media and cultural studies' },
// //     { value: 3, label: 'Language media and cultural studies' },
// //     { value: 4, label: 'Asharib Hussain' },
// //     { value: 5, label: 'Engineering' }
// // ];

// // const DynamicSelect = () => {
// //     // Initialize selectedDate state
// //     const [selectedDate, setSelectedDate] = useState(Array(selectedOptions.length).fill(''));

// //     // Function to handle date selection change
// //     const handleSelectChange = (index, value) => {
// //         const newSelectedDate = [...selectedDate];
// //         newSelectedDate[index] = value;
// //         setSelectedDate(newSelectedDate);
// //     };

// //     const handleSubmit = (event) => {
// //         event.preventDefault();
// //         // Your form submission logic
// //     };

// //     return (
// //         <div className="international_companies">
// //             <div className="container-fluid international_companies_container">
// //                 <div className="row justify-content-center faqs_card">
// //                     <div className="col-lg-10">
// //                         <div className=" ps-lg-2 pe-lg-4">
// //                             <div className="card">
// //                                 <div className="card-body">
// //                                     <form onSubmit={handleSubmit}>
// //                                         <div className="row g-3">
// //                                             {selectedOptions.map((value, index) => (
// //                                                 <div key={index} className="col-lg-6 col-md-6">
// //                                                     <div className="custom-select">
// //                                                         <select value={selectedDate[index]} onChange={(e) => handleSelectChange(index, parseInt(e.target.value))}>
// //                                                             {options.map((option) => (
// //                                                                 <option key={option.value} value={option.value}>{option.label}</option>
// //                                                             ))}
// //                                                         </select>
// //                                                     </div>
// //                                                 </div>
// //                                             ))}
// //                                             <div className="col-lg-6 col-md-6">
// //                                                 <button type="submit" className="show_all d-contents border-0">
// //                                                     <div className="show_all_button">
// //                                                         Show All{' '}
// //                                                         <img className="ms-2" src="assets/img/button_arrow.png" alt="" />
// //                                                     </div>
// //                                                 </button>
// //                                             </div>
// //                                         </div>
// //                                     </form>
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>
// //         </div>

// //         // <div className="international_companies">
// //         //     <div className="container-fluid international_companies_container">
// //         //         <div className="row justify-content-center faqs_card">
// //         //             <div className="col-lg-10">
// //         //                 <div className=" ps-lg-2 pe-lg-4">
// //         //                     <div className="card">
// //         //                         <div className="card-body">
// //         //                             <form onSubmit={handleSubmit}>
// //         //                                 <div className="row g-3">
// //         //                                     {selectedOptions.map((value, index) => (
// //         //                                         <div key={index} className="col-lg-6 col-md-6">
// //         //                                             <div className="custom-select">
// //         //                                                 <select value={value} onChange={(e) => handleSelectChange(index, parseInt(e.target.value))}>
// //         //                                                     {options.map((option) => (
// //         //                                                         <option key={option.value} value={option.value}>{option.label}</option>
// //         //                                                     ))}
// //         //                                                 </select>
// //         //                                             </div>
// //         //                                         </div>
// //         //                                     ))}
// //         //                                     <div className="col-lg-6 col-md-6">
// //         //                                         <button type="submit" className="show_all d-contents border-0">
// //         //                                             <div className="show_all_button">
// //         //                                                 Show All{' '}
// //         //                                                 <img className="ms-2" src="assets/img/button_arrow.png" alt="" />
// //         //                                             </div>
// //         //                                         </button>
// //         //                                     </div>
// //         //                                 </div>
// //         //                             </form>
// //         //                         </div>
// //         //                     </div>
// //         //                 </div>
// //         //             </div>
// //         //         </div>
// //         //     </div>
// //         // </div>
// //     );
// // }

// // export default DynamicSelect;
