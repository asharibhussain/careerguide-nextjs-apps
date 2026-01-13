// RefineSearchComponent.js
import React, { useState, useEffect } from 'react';
// import { useCustomSelect } from '@/utils/helpers/customSelect';

const RefineSearchComponent = () => {
    // useCustomSelect();
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
    return (
        // <div className="col-lg-4 mb-3">
        //     <div className="card refine_search_card">
        //         <div className="card-header d-flex justify-content-between">
        //             <h3>Refine Search</h3>
        //             <div>
        //                 <button
        //                     className="bg-transparent border-0 d-lg-none p-0"
        //                     type="button"
        //                     data-bs-toggle="offcanvas"
        //                     data-bs-target="#offcanvasRight"
        //                     aria-controls="offcanvasRight"
        //                 >
        //                     <img src="assets/img/canvas_open.svg" alt="" />
        //                 </button>
        //                 <div
        //                     className="offcanvas offcanvas-end"
        //                     tabIndex={-1}
        //                     id="offcanvasRight"
        //                     aria-labelledby="offcanvasRightLabel"
        //                 >
        //                     <div className="offcanvas-header">
        //                         <h5 id="offcanvasRightLabel">Refine Search</h5>
        //                         <button
        //                             type="button"
        //                             className="btn-close text-reset"
        //                             data-bs-dismiss="offcanvas"
        //                             aria-label="Close"
        //                         />
        //                     </div>
        //                     <div className="offcanvas-body">
        //                         <div className="card-body search_body">
        //                             <div className="label border-bottom pb-3 mb-3">
        //                                 <label htmlFor="Work Experience">Work Experience</label>
        //                                 <div className="custom-select">
        //                                     <select>
        //                                         <option value={0}>
        //                                             Existing / Prospective degree
        //                                         </option>
        //                                         <option value={1}>
        //                                             Low, economics and social sciences
        //                                         </option>
        //                                         <option value={2}>
        //                                             Language media and cultural studies
        //                                         </option>
        //                                         <option value={3}>Engineering</option>
        //                                     </select>
        //                                 </div>
        //                             </div>
        //                             <div className="heading_search">
        //                                 <h5>My Studies</h5>
        //                             </div>
        //                             <div className="label pt-2 pb-3">
        //                                 <label htmlFor="Work Experience">My Field of Study</label>
        //                                 <div className="custom-select">
        //                                     <select>
        //                                         <option value={0}>
        //                                             Existing / Prospective degree
        //                                         </option>
        //                                         <option value={1}>
        //                                             Low, economics and social sciences
        //                                         </option>
        //                                         <option value={2}>
        //                                             Language media and cultural studies
        //                                         </option>
        //                                         <option value={3}>Engineering</option>
        //                                     </select>
        //                                 </div>
        //                             </div>
        //                             <div className="label pb-3">
        //                                 <label htmlFor="Work Experience">My Couse of Study</label>
        //                                 <div className="custom-select">
        //                                     <select>
        //                                         <option value={0}>
        //                                             Existing / Prospective degree
        //                                         </option>
        //                                         <option value={1}>
        //                                             Low, economics and social sciences
        //                                         </option>
        //                                         <option value={2}>
        //                                             Language media and cultural studies
        //                                         </option>
        //                                         <option value={3}>Engineering</option>
        //                                     </select>
        //                                 </div>
        //                             </div>
        //                             <div className="label pb-3">
        //                                 <label htmlFor="Work Experience">My Subject</label>
        //                                 <div className="custom-select">
        //                                     <select>
        //                                         <option value={0}>
        //                                             Existing / Prospective degree
        //                                         </option>
        //                                         <option value={1}>
        //                                             Low, economics and social sciences
        //                                         </option>
        //                                         <option value={2}>
        //                                             Language media and cultural studies
        //                                         </option>
        //                                         <option value={3}>Engineering</option>
        //                                     </select>
        //                                 </div>
        //                             </div>
        //                             <div className="label border-bottom pb-3 mb-3">
        //                                 <label htmlFor="Work Experience">My degree</label>
        //                                 <div className="custom-select">
        //                                     <select>
        //                                         <option value={0}>
        //                                             Existing / Prospective degree
        //                                         </option>
        //                                         <option value={1}>
        //                                             Low, economics and social sciences
        //                                         </option>
        //                                         <option value={2}>
        //                                             Language media and cultural studies
        //                                         </option>
        //                                         <option value={3}>Engineering</option>
        //                                     </select>
        //                                 </div>
        //                                 <div className="search_result pt-3 ">
        //                                     <a href="#">
        //                                         <div className="search_button">
        //                                             152 Search Results
        //                                         </div>
        //                                     </a>
        //                                 </div>
        //                             </div>
        //                             <div className="heading_search">
        //                                 <h5>General search criteria</h5>
        //                             </div>
        //                             <div className="label pt-2 pb-3">
        //                                 <label htmlFor="Work Experience">My Couse of Study</label>
        //                                 <div className="custom-select">
        //                                     <select>
        //                                         <option value={0}>
        //                                             Existing / Prospective degree
        //                                         </option>
        //                                         <option value={1}>
        //                                             Low, economics and social sciences
        //                                         </option>
        //                                         <option value={2}>
        //                                             Language media and cultural studies
        //                                         </option>
        //                                         <option value={3}>Engineering</option>
        //                                     </select>
        //                                 </div>
        //                             </div>
        //                             <div className="label pb-3">
        //                                 <label htmlFor="Work Experience">My Subject</label>
        //                                 <div className="custom-select">
        //                                     <select>
        //                                         <option value={0}>
        //                                             Existing / Prospective degree
        //                                         </option>
        //                                         <option value={1}>
        //                                             Low, economics and social sciences
        //                                         </option>
        //                                         <option value={2}>
        //                                             Language media and cultural studies
        //                                         </option>
        //                                         <option value={3}>Engineering</option>
        //                                     </select>
        //                                 </div>
        //                             </div>
        //                             <div className="label border-bottom pb-3 mb-3">
        //                                 <label htmlFor="Work Experience">My degree</label>
        //                                 <div className="custom-select">
        //                                     <select>
        //                                         <option value={0}>
        //                                             Existing / Prospective degree
        //                                         </option>
        //                                         <option value={1}>
        //                                             Low, economics and social sciences
        //                                         </option>
        //                                         <option value={2}>
        //                                             Language media and cultural studies
        //                                         </option>
        //                                         <option value={3}>Engineering</option>
        //                                     </select>
        //                                 </div>
        //                                 <div className="search_result pt-3 ">
        //                                     <a href="#">
        //                                         <div className="search_button">
        //                                             152 Search Results
        //                                         </div>
        //                                     </a>
        //                                 </div>
        //                             </div>
        //                             <div className="heading_search">
        //                                 <h5>General search criteria</h5>
        //                             </div>
        //                             <div className="label pt-2 pb-3">
        //                                 <label htmlFor="Work Experience">My Couse of Study</label>
        //                                 <div className="custom-select">
        //                                     <select>
        //                                         <option value={0}>
        //                                             Existing / Prospective degree
        //                                         </option>
        //                                         <option value={1}>
        //                                             Low, economics and social sciences
        //                                         </option>
        //                                         <option value={2}>
        //                                             Language media and cultural studies
        //                                         </option>
        //                                         <option value={3}>Engineering</option>
        //                                     </select>
        //                                 </div>
        //                             </div>
        //                             <div className="label">
        //                                 <label htmlFor="Work Experience">My Subject</label>
        //                                 <div className="custom-select">
        //                                     <select>
        //                                         <option value={0}>
        //                                             Existing / Prospective degree
        //                                         </option>
        //                                         <option value={1}>
        //                                             Low, economics and social sciences
        //                                         </option>
        //                                         <option value={2}>
        //                                             Language media and cultural studies
        //                                         </option>
        //                                         <option value={3}>Engineering</option>
        //                                     </select>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="card-body search_body d-lg-block d-none">
        //             <div className="label border-bottom pb-3 mb-3">
        //                 <label htmlFor="Work Experience">Work Experience</label>
        //                 <div className="custom-select">
        //                     <select>
        //                         <option value={0}>Existing / Prospective degree</option>
        //                         <option value={1}>Low, economics and social sciences</option>
        //                         <option value={2}>Language media and cultural studies</option>
        //                         <option value={3}>Engineering</option>
        //                     </select>
        //                 </div>
        //             </div>
        //             <div className="heading_search">
        //                 <h5>My Studies</h5>
        //             </div>
        //             <div className="label pt-2 pb-3">
        //                 <label htmlFor="Work Experience">My Field of Study</label>
        //                 <div className="custom-select">
        //                     <select>
        //                         <option value={0}>Existing / Prospective degree</option>
        //                         <option value={1}>Low, economics and social sciences</option>
        //                         <option value={2}>Language media and cultural studies</option>
        //                         <option value={3}>Engineering</option>
        //                     </select>
        //                 </div>
        //             </div>
        //             <div className="label pb-3">
        //                 <label htmlFor="Work Experience">My Couse of Study</label>
        //                 <div className="custom-select">
        //                     <select>
        //                         <option value={0}>Existing / Prospective degree</option>
        //                         <option value={1}>Low, economics and social sciences</option>
        //                         <option value={2}>Language media and cultural studies</option>
        //                         <option value={3}>Engineering</option>
        //                     </select>
        //                 </div>
        //             </div>
        //             <div className="label pb-3">
        //                 <label htmlFor="Work Experience">My Subject</label>
        //                 <div className="custom-select">
        //                     <select>
        //                         <option value={0}>Existing / Prospective degree</option>
        //                         <option value={1}>Low, economics and social sciences</option>
        //                         <option value={2}>Language media and cultural studies</option>
        //                         <option value={3}>Engineering</option>
        //                     </select>
        //                 </div>
        //             </div>
        //             <div className="label border-bottom pb-3 mb-3">
        //                 <label htmlFor="Work Experience">My degree</label>
        //                 <div className="custom-select">
        //                     <select>
        //                         <option value={0}>Existing / Prospective degree</option>
        //                         <option value={1}>Low, economics and social sciences</option>
        //                         <option value={2}>Language media and cultural studies</option>
        //                         <option value={3}>Engineering</option>
        //                     </select>
        //                 </div>
        //                 <div className="search_result pt-3 ">
        //                     <a href="#">
        //                         <div className="search_button">152 Search Results</div>
        //                     </a>
        //                 </div>
        //             </div>
        //             <div className="heading_search">
        //                 <h5>General search criteria</h5>
        //             </div>
        //             <div className="label pt-2 pb-3">
        //                 <label htmlFor="Work Experience">My Couse of Study</label>
        //                 <div className="custom-select">
        //                     <select>
        //                         <option value={0}>Existing / Prospective degree</option>
        //                         <option value={1}>Low, economics and social sciences</option>
        //                         <option value={2}>Language media and cultural studies</option>
        //                         <option value={3}>Engineering</option>
        //                     </select>
        //                 </div>
        //             </div>
        //             <div className="label pb-3">
        //                 <label htmlFor="Work Experience">My Subject</label>
        //                 <div className="custom-select">
        //                     <select>
        //                         <option value={0}>Existing / Prospective degree</option>
        //                         <option value={1}>Low, economics and social sciences</option>
        //                         <option value={2}>Language media and cultural studies</option>
        //                         <option value={3}>Engineering</option>
        //                     </select>
        //                 </div>
        //             </div>
        //             <div className="label border-bottom pb-3 mb-3">
        //                 <label htmlFor="Work Experience">My degree</label>
        //                 <div className="custom-select">
        //                     <select>
        //                         <option value={0}>Existing / Prospective degree</option>
        //                         <option value={1}>Low, economics and social sciences</option>
        //                         <option value={2}>Language media and cultural studies</option>
        //                         <option value={3}>Engineering</option>
        //                     </select>
        //                 </div>
        //                 <div className="search_result pt-3 ">
        //                     <a href="#">
        //                         <div className="search_button">152 Search Results</div>
        //                     </a>
        //                 </div>
        //             </div>
        //             <div className="heading_search">
        //                 <h5>General search criteria</h5>
        //             </div>
        //             <div className="label pt-2 pb-3">
        //                 <label htmlFor="Work Experience">My Couse of Study</label>
        //                 <div className="custom-select">
        //                     <select>
        //                         <option value={0}>Existing / Prospective degree</option>
        //                         <option value={1}>Low, economics and social sciences</option>
        //                         <option value={2}>Language media and cultural studies</option>
        //                         <option value={3}>Engineering</option>
        //                     </select>
        //                 </div>
        //             </div>
        //             <div className="label">
        //                 <label htmlFor="Work Experience">My Subject</label>
        //                 <div className="custom-select">
        //                     <select>
        //                         <option value={0}>Existing / Prospective degree</option>
        //                         <option value={1}>Low, economics and social sciences</option>
        //                         <option value={2}>Language media and cultural studies</option>
        //                         <option value={3}>Engineering</option>
        //                     </select>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className="card refine_search_card">
        <div className="card-header d-flex justify-content-between">
            <h3>Refine Search</h3>
            <div>
                <button
                    className="bg-transparent border-0 d-lg-none p-0"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight"
                >
                    <img src="assets/img/canvas_open.svg" alt="" />
                </button>
                <div
                    className="offcanvas offcanvas-end"
                    tabIndex={-1}
                    id="offcanvasRight"
                    aria-labelledby="offcanvasRightLabel"
                >
                    <div className="offcanvas-header">
                        <h5 id="offcanvasRightLabel">Refine Search</h5>
                        <button
                            type="button"
                            className="btn-close text-reset"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                        />
                    </div>
                    <div className="offcanvas-body">
                        <div className="card-body search_body">
                            <div className="label border-bottom pb-3 mb-3">
                                <label htmlFor="Work Experience">Work Experience</label>
                                <div className="custom-select">
                                    <select>
                                        <option value={0}>
                                            Existing / Prospective degree
                                        </option>
                                        <option value={1}>
                                            Low, economics and social sciences
                                        </option>
                                        <option value={2}>
                                            Language media and cultural studies
                                        </option>
                                        <option value={3}>Engineering</option>
                                    </select>
                                </div>
                            </div>
                            <div className="heading_search">
                                <h5>My Studies</h5>
                            </div>
                            <div className="label pt-2 pb-3">
                                <label htmlFor="Work Experience">My Field of Study</label>
                                <div className="custom-select">
                                    <select>
                                        <option value={0}>
                                            Existing / Prospective degree
                                        </option>
                                        <option value={1}>
                                            Low, economics and social sciences
                                        </option>
                                        <option value={2}>
                                            Language media and cultural studies
                                        </option>
                                        <option value={3}>Engineering</option>
                                    </select>
                                </div>
                            </div>
                            <div className="label pb-3">
                                <label htmlFor="Work Experience">My Couse of Study</label>
                                <div className="custom-select">
                                    <select>
                                        <option value={0}>
                                            Existing / Prospective degree
                                        </option>
                                        <option value={1}>
                                            Low, economics and social sciences
                                        </option>
                                        <option value={2}>
                                            Language media and cultural studies
                                        </option>
                                        <option value={3}>Engineering</option>
                                    </select>
                                </div>
                            </div>
                            <div className="label pb-3">
                                <label htmlFor="Work Experience">My Subject</label>
                                <div className="custom-select">
                                    <select>
                                        <option value={0}>
                                            Existing / Prospective degree
                                        </option>
                                        <option value={1}>
                                            Low, economics and social sciences
                                        </option>
                                        <option value={2}>
                                            Language media and cultural studies
                                        </option>
                                        <option value={3}>Engineering</option>
                                    </select>
                                </div>
                            </div>
                            <div className="label border-bottom pb-3 mb-3">
                                <label htmlFor="Work Experience">My degree</label>
                                <div className="custom-select">
                                    <select>
                                        <option value={0}>
                                            Existing / Prospective degree
                                        </option>
                                        <option value={1}>
                                            Low, economics and social sciences
                                        </option>
                                        <option value={2}>
                                            Language media and cultural studies
                                        </option>
                                        <option value={3}>Engineering</option>
                                    </select>
                                </div>
                                <div className="search_result pt-3 ">
                                    <a href="#">
                                        <div className="search_button">
                                            152 Search Results
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="heading_search">
                                <h5>General search criteria</h5>
                            </div>
                            <div className="label pt-2 pb-3">
                                <label htmlFor="Work Experience">My Couse of Study</label>
                                <div className="custom-select">
                                    <select>
                                        <option value={0}>
                                            Existing / Prospective degree
                                        </option>
                                        <option value={1}>
                                            Low, economics and social sciences
                                        </option>
                                        <option value={2}>
                                            Language media and cultural studies
                                        </option>
                                        <option value={3}>Engineering</option>
                                    </select>
                                </div>
                            </div>
                            <div className="label pb-3">
                                <label htmlFor="Work Experience">My Subject</label>
                                <div className="custom-select">
                                    <select>
                                        <option value={0}>
                                            Existing / Prospective degree
                                        </option>
                                        <option value={1}>
                                            Low, economics and social sciences
                                        </option>
                                        <option value={2}>
                                            Language media and cultural studies
                                        </option>
                                        <option value={3}>Engineering</option>
                                    </select>
                                </div>
                            </div>
                            <div className="label border-bottom pb-3 mb-3">
                                <label htmlFor="Work Experience">My degree</label>
                                <div className="custom-select">
                                    <select>
                                        <option value={0}>
                                            Existing / Prospective degree
                                        </option>
                                        <option value={1}>
                                            Low, economics and social sciences
                                        </option>
                                        <option value={2}>
                                            Language media and cultural studies
                                        </option>
                                        <option value={3}>Engineering</option>
                                    </select>
                                </div>
                                <div className="search_result pt-3 ">
                                    <a href="#">
                                        <div className="search_button">
                                            152 Search Results
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="heading_search">
                                <h5>General search criteria</h5>
                            </div>
                            <div className="label pt-2 pb-3">
                                <label htmlFor="Work Experience">My Couse of Study</label>
                                <div className="custom-select">
                                    <select>
                                        <option value={0}>
                                            Existing / Prospective degree
                                        </option>
                                        <option value={1}>
                                            Low, economics and social sciences
                                        </option>
                                        <option value={2}>
                                            Language media and cultural studies
                                        </option>
                                        <option value={3}>Engineering</option>
                                    </select>
                                </div>
                            </div>
                            <div className="label">
                                <label htmlFor="Work Experience">My Subject</label>
                                <div className="custom-select">
                                    <select>
                                        <option value={0}>
                                            Existing / Prospective degree
                                        </option>
                                        <option value={1}>
                                            Low, economics and social sciences
                                        </option>
                                        <option value={2}>
                                            Language media and cultural studies
                                        </option>
                                        <option value={3}>Engineering</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="card-body search_body d-lg-block d-none">
            <div className="label border-bottom pb-3 mb-3">
                <label htmlFor="Work Experience">Work Experience</label>
                <div className="custom-select">
                    <select>
                        <option value={0}>Existing / Prospective degree</option>
                        <option value={1}>Low, economics and social sciences</option>
                        <option value={2}>Language media and cultural studies</option>
                        <option value={3}>Engineering</option>
                    </select>
                </div>
            </div>
            <div className="heading_search">
                <h5>My Studies</h5>
            </div>
            <div className="label pt-2 pb-3">
                <label htmlFor="Work Experience">My Field of Study</label>
                <div className="custom-select">
                    <select>
                        <option value={0}>Existing / Prospective degree</option>
                        <option value={1}>Low, economics and social sciences</option>
                        <option value={2}>Language media and cultural studies</option>
                        <option value={3}>Engineering</option>
                    </select>
                </div>
            </div>
            <div className="label pb-3">
                <label htmlFor="Work Experience">My Couse of Study</label>
                <div className="custom-select">
                    <select>
                        <option value={0}>Existing / Prospective degree</option>
                        <option value={1}>Low, economics and social sciences</option>
                        <option value={2}>Language media and cultural studies</option>
                        <option value={3}>Engineering</option>
                    </select>
                </div>
            </div>
            <div className="label pb-3">
                <label htmlFor="Work Experience">My Subject</label>
                <div className="custom-select">
                    <select>
                        <option value={0}>Existing / Prospective degree</option>
                        <option value={1}>Low, economics and social sciences</option>
                        <option value={2}>Language media and cultural studies</option>
                        <option value={3}>Engineering</option>
                    </select>
                </div>
            </div>
            <div className="label border-bottom pb-3 mb-3">
                <label htmlFor="Work Experience">My degree</label>
                <div className="custom-select">
                    <select>
                        <option value={0}>Existing / Prospective degree</option>
                        <option value={1}>Low, economics and social sciences</option>
                        <option value={2}>Language media and cultural studies</option>
                        <option value={3}>Engineering</option>
                    </select>
                </div>
                <div className="search_result pt-3 ">
                    <a href="#">
                        <div className="search_button">152 Search Results</div>
                    </a>
                </div>
            </div>
            <div className="heading_search">
                <h5>General search criteria</h5>
            </div>
            <div className="label pt-2 pb-3">
                <label htmlFor="Work Experience">My Couse of Study</label>
                <div className="custom-select">
                    <select>
                        <option value={0}>Existing / Prospective degree</option>
                        <option value={1}>Low, economics and social sciences</option>
                        <option value={2}>Language media and cultural studies</option>
                        <option value={3}>Engineering</option>
                    </select>
                </div>
            </div>
            <div className="label pb-3">
                <label htmlFor="Work Experience">My Subject</label>
                <div className="custom-select">
                    <select>
                        <option value={0}>Existing / Prospective degree</option>
                        <option value={1}>Low, economics and social sciences</option>
                        <option value={2}>Language media and cultural studies</option>
                        <option value={3}>Engineering</option>
                    </select>
                </div>
            </div>
            <div className="label border-bottom pb-3 mb-3">
                <label htmlFor="Work Experience">My degree</label>
                <div className="custom-select">
                    <select>
                        <option value={0}>Existing / Prospective degree</option>
                        <option value={1}>Low, economics and social sciences</option>
                        <option value={2}>Language media and cultural studies</option>
                        <option value={3}>Engineering</option>
                    </select>
                </div>
                <div className="search_result pt-3 ">
                    <a href="#">
                        <div className="search_button">152 Search Results</div>
                    </a>
                </div>
            </div>
            <div className="heading_search">
                <h5>General search criteria</h5>
            </div>
            <div className="label pt-2 pb-3">
                <label htmlFor="Work Experience">My Couse of Study</label>
                <div className="custom-select">
                    <select>
                        <option value={0}>Existing / Prospective degree</option>
                        <option value={1}>Low, economics and social sciences</option>
                        <option value={2}>Language media and cultural studies</option>
                        <option value={3}>Engineering</option>
                    </select>
                </div>
            </div>
            <div className="label">
                <label htmlFor="Work Experience">My Subject</label>
                <div className="custom-select">
                    <select>
                        <option value={0}>Existing / Prospective degree</option>
                        <option value={1}>Low, economics and social sciences</option>
                        <option value={2}>Language media and cultural studies</option>
                        <option value={3}>Engineering</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
    );
};

export default RefineSearchComponent;
