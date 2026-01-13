import React, { useState, useEffect } from 'react';
import CompanyData from "@/Dynamic-Data/Components/common/Select_Information_coustum/Data_Select_Information";
// import { useCustomSelect } from '@/utils/helpers/customSelect';

const select_Information = () => {
    // useCustomSelect();
    // useEffect(() => {
    //     // Your existing JavaScript code here
    //     var x, i, j, l, ll, selElmnt, a, b, c;
    //     /* Look for any elements with the class "custom-select": */
    //     x = document.getElementsByClassName("custom-select");
    //     l = x.length;
    //     for (i = 0; i < l; i++) {
    //         selElmnt = x[i].getElementsByTagName("select")[0];
    //         ll = selElmnt.length;
    //         /* For each element, create a new DIV that will act as the selected item: */
    //         a = document.createElement("DIV");
    //         a.setAttribute("class", "select-selected");
    //         a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    //         x[i].appendChild(a);
    //         /* For each element, create a new DIV that will contain the option list: */
    //         b = document.createElement("DIV");
    //         b.setAttribute("class", "select-items select-hide");
    //         for (j = 1; j < ll; j++) {
    //             /* For each option in the original select element,
    //             create a new DIV that will act as an option item: */
    //             c = document.createElement("DIV");
    //             c.innerHTML = selElmnt.options[j].innerHTML;
    //             c.addEventListener("click", function (e) {
    //                 /* When an item is clicked, update the original select box
    //                 and the selected item: */
    //                 var y, k, s, h, sl, yl;
    //                 s = this.parentNode.parentNode.getElementsByTagName("select")[0];
    //                 sl = s.length;
    //                 h = this.parentNode.previousSibling;
    //                 for (k = 0; k < sl; k++) {
    //                     if (s.options[k].innerHTML === this.innerHTML) {
    //                         s.selectedIndex = k;
    //                         h.innerHTML = this.innerHTML;
    //                         y = this.parentNode.getElementsByClassName("same-as-selected");
    //                         yl = y.length;
    //                         for (var m = 0; m < yl; m++) {
    //                             y[m].removeAttribute("class");
    //                         }
    //                         this.setAttribute("class", "same-as-selected");
    //                         break;
    //                     }
    //                 }
    //                 h.click();
    //             });
    //             b.appendChild(c);
    //         }
    //         x[i].appendChild(b);
    //         a.addEventListener("click", function (e) {
    //             /* When the select box is clicked, close any other select boxes,
    //             and open/close the current select box: */
    //             e.stopPropagation();
    //             closeAllSelect(this);
    //             this.nextSibling.classList.toggle("select-hide");
    //             this.classList.toggle("select-arrow-active");
    //         });
    //     }

    //     function closeAllSelect(elmnt) {
    //         /* A function that will close all select boxes in the document,
    //         except the current select box: */
    //         var x, y, xl, yl, arrNo = [];
    //         x = document.getElementsByClassName("select-items");
    //         y = document.getElementsByClassName("select-selected");
    //         xl = x.length;
    //         yl = y.length;
    //         for (var i = 0; i < yl; i++) {
    //             if (elmnt === y[i]) {
    //                 arrNo.push(i);
    //             } else {
    //                 y[i].classList.remove("select-arrow-active");
    //             }
    //         }
    //         for (var j = 0; j < xl; j++) {
    //             if (arrNo.indexOf(j)) {
    //                 x[j].classList.add("select-hide");
    //             }
    //         }
    //     }

    //     /* If the user clicks anywhere outside the select box,
    //     then close all select boxes: */
    //     document.addEventListener("click", closeAllSelect);

    //     // Clean up event listener on unmount
    //     return () => {
    //         document.removeEventListener("click", closeAllSelect);
    //     };
    // }, []);
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

export default select_Information;