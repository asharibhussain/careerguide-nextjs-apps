// utils/customSelect.js

import { useEffect } from 'react';

export function useCustomSelect() {
    useEffect(() => {
        function initializeCustomSelect() {
            var x, i, j, l, ll, selElmnt, a, b, c;
            /* Look for any elements with the class "custom-select": */
            x = document.getElementsByClassName("custom-select");
            l = x.length;
            for (i = 0; i < l; i++) {
                selElmnt = x[i].getElementsByTagName("select")[0];
                ll = selElmnt.length;
                /* For each element, create a new DIV that will act as the selected item: */
                a = document.createElement("DIV");
                a.setAttribute("class", "select-selected");
                a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
                x[i].appendChild(a);
                /* For each element, create a new DIV that will contain the option list: */
                b = document.createElement("DIV");
                b.setAttribute("class", "select-items select-hide");
                for (j = 1; j < ll; j++) {
                    /* For each option in the original select element,
                    create a new DIV that will act as an option item: */
                    c = document.createElement("DIV");
                    c.innerHTML = selElmnt.options[j].innerHTML;
                    c.addEventListener("click", function (e) {
                        /* When an item is clicked, update the original select box
                        and the selected item: */
                        var y, k, s, h, sl, yl;
                        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                        sl = s.length;
                        h = this.parentNode.previousSibling;
                        for (k = 0; k < sl; k++) {
                            if (s.options[k].innerHTML === this.innerHTML) {
                                s.selectedIndex = k;
                                h.innerHTML = this.innerHTML;
                                y = this.parentNode.getElementsByClassName("same-as-selected");
                                yl = y.length;
                                for (var m = 0; m < yl; m++) {
                                    y[m].removeAttribute("class");
                                }
                                this.setAttribute("class", "same-as-selected");
                                break;
                            }
                        }
                        h.click();
                    });
                    b.appendChild(c);
                }
                x[i].appendChild(b);
                a.addEventListener("click", function (e) {
                    /* When the select box is clicked, close any other select boxes,
                    and open/close the current select box: */
                    e.stopPropagation();
                    closeAllSelect(this);
                    this.nextSibling.classList.toggle("select-hide");
                    this.classList.toggle("select-arrow-active");
                });
            }

            function closeAllSelect(elmnt) {
                /* A function that will close all select boxes in the document,
                except the current select box: */
                var x, y, xl, yl, arrNo = [];
                x = document.getElementsByClassName("select-items");
                y = document.getElementsByClassName("select-selected");
                xl = x.length;
                yl = y.length;
                for (var i = 0; i < yl; i++) {
                    if (elmnt === y[i]) {
                        arrNo.push(i);
                    } else {
                        y[i].classList.remove("select-arrow-active");
                    }
                }
                for (var j = 0; j < xl; j++) {
                    if (arrNo.indexOf(j)) {
                        x[j].classList.add("select-hide");
                    }
                }
            }

            /* If the user clicks anywhere outside the select box,
            then close all select boxes: */
            document.addEventListener("click", closeAllSelect);

            // Clean up event listener on unmount
            return () => {
                document.removeEventListener("click", closeAllSelect);
            };
        }

        // Initialize custom select functionality
        initializeCustomSelect();

        // Clean up function (no dependencies, so it runs only once on mount)
        return () => {};
    }, []);
}
