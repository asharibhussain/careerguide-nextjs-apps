// JobApplicationForm.jsx
import React, { useEffect } from 'react';

const JobApplicationForm = () => {
    useEffect(() => {
        const dropZone = document.querySelector("#drop-zone");
        const inputElement = document.querySelector("#myfile");
        const img = document.querySelector("#imagee");
        const upload_icon = document.querySelector("#upload_icon");
        let p = document.querySelector("#Pp");

        inputElement.addEventListener("change", function (e) {
            const clickFile = this.files[0];
            if (clickFile) {
                img.style = "display:block;";
                p.style = "display: none";
                upload_icon.style = "display: none";
                const reader = new FileReader();
                reader.readAsDataURL(clickFile);
                reader.onloadend = function () {
                    const result = reader.result;
                    if (clickFile.type == "application/pdf") {
                        var src =
                            "data:image/png;base64,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";
                    } else if (
                        clickFile.type ==
                        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    ) {
                        var scr =
                            "data:image/png;base64,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";
                    } else {
                        var src =
                            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAZlBMVEX///8AAAAeHh7u7u59fX3c3NyWlpalpaW7u7tLS0tWVlbIyMjV1dXn5+fLy8tOTk4xMTE+Pj4UFBT39/ednZ2/v78mJiZycnJeXl5oaGjy8vLh4eEODg5BQUFZWVmPj48uLi6tra2njXhCAAAEG0lEQVR4nO3d63aiMBSGYRBFWkFAGI+1tPd/k9PDrFmGzgZ3SNg7zvf+7QrkKTVRcZwoGq9J2lNZ7eK5eztmzR3Tm1qzSuvZbX97XnkH5t1CzvfZ1q/v3Apev+/2v3wCk4O076PKIzE/Suu+8kfMS2nbn/aeHouFjiv4lRfieSnNum3jQbiWRpm5v4oX8W3CbOF8uUmlSf1cr6jFi7ToR46JrbTnH705XW6q/uHLNnd5/ME2lNHhctP0Dn3N3B17PFLocNPobRXVxdmR74kWuruKvWfcs17BQeHO1VV8Nf9GHR313gaE8ZujFdXc7js3B727IaGrTWPv54//zgaFjjYN852LxMUhGQ0L452L37hqoZNNQ7nQweNGu3D6VVQvnLxpqBdO3jT0C6cSAxDGi0nLTQjCactNGMIpm0YgwgnEUIT2t21CEdqvqMEIrYnhCG1v2wQktFxughJa7YthCW2uYmBCi9s2gQktVtTQhHxicEL2O3Cywq2FkLvcyApzu4/QsW6uyApXT1bCknMOWWHTWQljzmojK4wyu3vsJ8YphIXFyUpYM04hLIzerT7yuWCcQVrYv0X7gMLI5kN1YQkTC2JYwqhZsh+LgQmjJuM+GEMTfvylbtqS8wQuPOHHdSwuq6G2wQvHOj+8MIGQDEItQUgHoZYgpINQSxDSQaglCOkg1BKEdBBqCUI6CLUEIR2EWoKQDkItQUgHoZYgpINQSxDSQaglCOkg1JIf4Xsq2fsMQtnvizQ/kO9H+Dwn6EfPEEIIIYTegxBCCCH03xzCx39emq0lM79oFK8P6SDUEoR0EGoJQjoItQQhHYRagpAOQi1BSAehliCk+7+Fm0wy88sD/Qjtvi7OVU8zCB//HWEI/QYhhBBC6D8IIYTws8e/y50uJUtnEGoKQjoItQQhHYRagpAOQi1BSAehliCkg1BLENJBqCUI6YaEw//jhIsK43yN8TPzP1cL9S73wThfbvzsMe5yLweEj/GeN4QQQgghhBBCCCGE04WHJ89dzTvZq/r2h+azcrw+pINQSxDSQaglCOkg1BKEdBBqCUI6CLUEIR2EWoKQDkIt2Qv3xsittxlObWvMc88YWRsjO28znFpnzLNmjHw1Rl69zXBqV2Oer4yRB2NknI2PECkzp3kYH/G3tTm0uowPEehSmdNcM8Y25tD4qvEqZtfeLBvO6N5vJ47LNvc1U6vy9scdoop1gLY/PIBalrB4kZ4vu5dinHVbKj1hduk4yuhSjx9TVTV7vV+PH1RVnK3iu/NSes6slme2MCqO0rNmdGQuM9/lsv/ynlNpuVnnoVzFo/WzkeQwfnQFHSa8RD+3+jeNurVYZG7Ku8X4SQRbdJOfLzerVO91rNMV6wUFiUzaU1ntpDlGu6o8tck9vN96lmz8f+2LHAAAAABJRU5ErkJggg==";
                    }
                    img.src = src;
                    img.alt = clickFile.name;
                };
            }
        });
        dropZone.addEventListener("click", () => inputElement.click());
        dropZone.addEventListener("dragover", (e) => {
            e.preventDefault();
        });
        dropZone.addEventListener("drop", (e) => {
            e.preventDefault();
            img.style = "display:block;";
            let file = e.dataTransfer.files[0];

            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = function () {
                e.preventDefault();
                p.style = "display: none";
                upload_icon.style = "display: none";
                let src = this.result;
                img.src = src;
                img.alt = file.name;
            };
        });
        const dropZone1 = document.querySelector("#drop-zone-dup");
        const inputElement1 = document.querySelector("#myfile_dup");
        const img1 = document.querySelector("#imagee_dup");
        const upload_icon_dup = document.querySelector("#upload_icon_dup");
        let p1 = document.querySelector("#Pp_dup");
        inputElement1.addEventListener("change", function (e) {
            const clickFile1 = this.files[0];
            if (clickFile1) {
                img1.style = "display:block;";
                p1.style = "display: none";
                upload_icon_dup.style = "display: none";
                const reader1 = new FileReader();
                reader1.readAsDataURL(clickFile1);
                reader1.onloadend = function () {
                    const result = reader1.result;
                    if (clickFile1.type == "application/pdf") {
                        var src1 =
                            "data:image/png;base64,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";
                    } else if (
                        clickFile1.type ==
                        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    ) {
                        var scr1 =
                            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOcAAADaCAMAAABqzqVhAAAAk1BMVEX///8qVpkoU5UpVJYpVJcsWZ0qVZgqV5osWp4oUpQrWJwpU5YrWJsrWZwjUpcVS5SyvtUbTpV8kbpaeKsARpGWp8e7xdn4+vygr8xCZqGLncDN1ePq7fNhfa4yXJzEzN7c4uwAQo/Z3+vy9Picq8lwiLUVTpgASJZ/lLsAP49ceaypttBMbaZTcKQKRo90irUANYv9i2M+AAAJlElEQVR4nO3da2OiOhMAYNlaWrVNTI13RfACnqr0/f+/7iUJyEzw7NqzWEPMfNqtCj5chklIsNW6ayzm/dmpf9/vcNtYzA/7YxpxylJLnYtVJqRRShnpiLDPuVhNPqZK2Pv161evZ51TCtOzUIVVTimMuBSK+PXLNqcSyn34JMM6Zyb8mqZyH7azeHqyzhkKIc0uFoQ8tYuwyhmutl9ByillvbYvWbY5M+EuyzSUkp6fh2XOQpidhp7n+WXY4hxLIS+EKqxyjsPRdheITMOIh8MSZyYc7gK5D/0XEZ51TimMSuGLbU61DxMeM/LSFfFimxMIvTcZtjnH69FwGVCaCSXt7c02pxS+KuH7ezcPm5xS2E1oTEj3+fn5XYRlznV/tnxN4lyo4medncH+41Yxm6xzZybsPr++vj+D+GEnuV0wxoOVdL6quKezrS+p1mhHu4dweh5dPobT49vHcHrR5jGcbGKCk1F+q6BMfjUyMMBJb1kn9Kn6cgY4b1oPOadzOqdzOqdzOqdzOqdzOqdzOucfnexrUl+szHV2CKst+MxgZ439Q2zonM7pnM7pnA/vZLS2iAy+frL9qL5Ym+t8lPrWOZ3TOZ3TOZ3TOZ3TOR/DSQ+tcX1hrrPD6hsX9c/d2mW9HiG/n//Z5Ha2aDqnnEc8ZS/Tzx1putP326SYfwWcbHbor+brcKNOlwVvqNPP9hcXu4sF09POrzijsbYy451ylLnu9Kf90WodLnLNJ9GcbR+v7IuZ6uxSmiRJFAfH5W6/JJqT4aw2ZJqTLPHKgp6hzu4x21ub4uCbU81J8d23FdWc2toWkan59u0dfU+uOfkCO7jmpCO8HdLfO3vt2oJ+87jFkgg7s0/hYD528hC9PGO/dwbT2iLYfs8ZoyMz8JCT7LSFqUQEnDjdHju/r29HrdvFH5wMbZcdQU520BamEtGZ2QvQq2Nubh2Pd9mQISfXO71VIirT7Rd6dZ6a68SJaBRjp94oUImoTEMT9OqEmut8TzbgzWsKnf60sjSZiEonvuwsicHOeA7evEmgk+ltn1ZrQKBTu+zQnsFOho498gKctJofZSI6V30UvRZGJvcn4EQ0IMCp7S4RIwqc5KityWTn2zN894yVTo9WlyYT0bnq26PX9sxkJ05Eh7h06kW6DJGIzmkIX17fidFOChORqOQLJ9NLKxEiEZ3TEPxkaxOZ3d+HEpGo5Asn2gBFiER0dsIjISvizXbiRBR3z85IrxJEiERUpFuGXhkys51dlIimXuG8UCW0VCIq0u0AvXIif3KS5ay+0K95f+43QYnoixRO8nFxu1G/cGplRGr6uFR0Hm5Z4WTlUQavo1kiKtItOgzX3PRxUjG8PGSVfO4EbWi4IWascOLWzIGa7kStq5DnTlgloA1BCyfOUztmurMLW8vjwgmzDNwQWSLK0y3uVCE9452omfmeP08KLGiDemkLJ74eLaIr7iPd2ZnAE22pHroEuzRX/4MbYkDydIvWNKLmO1EimjHlBI2V4T8oEeVO3GrbM/Od6ErZV04P9KcMUP/IiObpNoSrmZJr7n/WNy71P93/hJXPnKrbLSD3UHQqhjxPt3At4+iK+7xsNq8v0Fa+0pmA82/BpRN0aYaJjxIRbcs0hMrCedqE8QkUJqJYOsGfsiWglslJnqAMlYVD1gRnDL/AUSZcXv5hzzzUsTdj1T7Nwd2fZ3yNk8AOkA+RiGDXT0BwdlOJKEWtU96McTXwXJuIAxe0RcaR56EuFJWIIljcr6NmOBPwgZVIuODiOBcta9QlJhIRbmSLIr4JTtj0CEXCTcq9tRVdtqiLUyQicoIr+WLNcKJEFIk/lP9dii54VPyIRIQb2aTXDCdKRK9+F56P8vOIJRIRamQvooaM70M961klH5cXjQUX44fQG0QiSuEld5Q2xIkS0ZB1QVfKiMpxUnoiimDlMGNNccKivE+7oKtgxqQTdZKcCG5kyyK+EU6YiNYJ7NKc+mp/wu84Y+iCOubXjdekk82itkB95Fc7YZ7ZROAG0Zir8X0oU40oKpDm6XVOA8alojzDwM6b5842LJlCjq4zW3ql04DxfTARnaLw/O8Jy8elok6kFDWyl6Q5TvjF9wC9I4UT1u1H1KfJes1xxuBAPICD2PNyJ7qtNnsB/wmLNNQEJ0xEq3IZWZWQO1HfyQj+p08b5IR1eVju26xKyJ3+G1joAq7lgzTICSv3TVkTZFVCMT4eVUAw3Qa9JjmT8PyRcSk6krMT9Z2Ubxb366911vh8cfpf53XEFwdT8nK+Q2UL5rGiVzuPy9pioA+xvNZ5YfCXuKlZOi8OP2mVRfwV9e0dx6WW8wAGFz58YKXTvzCcSMSxc7Xz/nW82KEXPvxFwDydC8PDREQNm0d3ifHmAeeF4X5ZrNOGOWP9yWJi+Cacd3XxDM4O7YY5L+TTFYVObdhiHjtDfnfvaif5rHx2yNA8uujC4lu03TBnl1Q+O2gjZ2W4fEvNnGuYs5qIOJ4Xeek592LQbcOcVE9EoeYk++ri96RxzmppzLCzHVQXL2bONcxZKew+iDaftzLPo7URU3Ma5nzRE1Hg687KiFw5c65hzjctEW24Pj8bz40QMWTfcJryex3aAOo51Z2VeXWtE/mGs85xqclfPFeALA/91XpRzFKeMN2J+k5k0PZ3nE9wavffxV/NQycsppQnUcS70+Nn4FWeK8C13v61nCF4tdOEfhM8397zCSmYwEk+Dmhi+oE23Plvz4kg5+dCsGA62E3bljplqOG34jEfauKc1U4VzvnIzp7friuMdr4EtYVvsNOU+tY5ndM5ndM5ndM5ndM5ndM5v/H7DrvtsLZwv3d1f+ej9Cc4p3M6p3M658847/1cgZ+qh2ar+iI01/ko9a1zOqdzOqdzOqdzOqdzOqdzNs/5E+OMfQOcHVJfO7sS6ieN2icTnO36xhlXQn01tjXDeeuIFg/hFLO2H8DJxIxG650+l8+AiBnp3jvf3jAYzX+GYTTcTRMaE9K9m3P6ObhVLGfoxm+42u6CJBH71rJ66FJIbSy1VjtljDPt15TSOCZWO/OQWnkke1Y7gZZzKrQ2O1UsVhOxb2nMfKudKjLtx5SKfet7NjtVlFri2+xUAbRWO1UI7ZGftdY6Vch9G2VaRto2O1UsVoePI+UplVp7nSrOWkIMeY7LLWMxP+yPTO7bns1OFVKbRpm2Y7VThdRGYt92ejY7VQjtiYqkTDo2O1VILZNHcsdmp4pSS4jNThUbdSSnKSNWO1Vs5v3Zkv2E8//GxZDId3TSegAAAABJRU5ErkJggg==";
                    } else {
                        var src1 =
                            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAZlBMVEX///8AAAAeHh7u7u59fX3c3NyWlpalpaW7u7tLS0tWVlbIyMjV1dXn5+fLy8tOTk4xMTE+Pj4UFBT39/ednZ2/v78mJiZycnJeXl5oaGjy8vLh4eEODg5BQUFZWVmPj48uLi6tra2njXhCAAAEG0lEQVR4nO3d63aiMBSGYRBFWkFAGI+1tPd/k9PDrFmGzgZ3SNg7zvf+7QrkKTVRcZwoGq9J2lNZ7eK5eztmzR3Tm1qzSuvZbX97XnkH5t1CzvfZ1q/v3Apev+/2v3wCk4O076PKIzE/Suu+8kfMS2nbn/aeHouFjiv4lRfieSnNum3jQbiWRpm5v4oX8W3CbOF8uUmlSf1cr6jFi7ToR46JrbTnH705XW6q/uHLNnd5/ME2lNHhctP0Dn3N3B17PFLocNPobRXVxdmR74kWuruKvWfcs17BQeHO1VV8Nf9GHR313gaE8ZujFdXc7js3B727IaGrTWPv54//zgaFjjYN852LxMUhGQ0L452L37hqoZNNQ7nQweNGu3D6VVQvnLxpqBdO3jT0C6cSAxDGi0nLTQjCactNGMIpm0YgwgnEUIT2t21CEdqvqMEIrYnhCG1v2wQktFxughJa7YthCW2uYmBCi9s2gQktVtTQhHxicEL2O3Cywq2FkLvcyApzu4/QsW6uyApXT1bCknMOWWHTWQljzmojK4wyu3vsJ8YphIXFyUpYM04hLIzerT7yuWCcQVrYv0X7gMLI5kN1YQkTC2JYwqhZsh+LgQmjJuM+GEMTfvylbtqS8wQuPOHHdSwuq6G2wQvHOj+8MIGQDEItQUgHoZYgpINQSxDSQaglCOkg1BKEdBBqCUI6CLUEIR2EWoKQDkItQUgHoZYgpINQSxDSQaglCOkg1JIf4Xsq2fsMQtnvizQ/kO9H+Dwn6EfPEEIIIYTegxBCCCH03xzCx39emq0lM79oFK8P6SDUEoR0EGoJQjoItQQhHYRagpAOQi1BSAehliCk+7+Fm0wy88sD/Qjtvi7OVU8zCB//HWEI/QYhhBBC6D8IIYTws8e/y50uJUtnEGoKQjoItQQhHYRagpAOQi1BSAehliCkg1BLENJBqCUI6YaEw//jhIsK43yN8TPzP1cL9S73wThfbvzsMe5yLweEj/GeN4QQQgghhBBCCCGE04WHJ89dzTvZq/r2h+azcrw+pINQSxDSQaglCOkg1BKEdBBqCUI6CLUEIR2EWoKQDkIt2Qv3xsittxlObWvMc88YWRsjO28znFpnzLNmjHw1Rl69zXBqV2Oer4yRB2NknI2PECkzp3kYH/G3tTm0uowPEehSmdNcM8Y25tD4qvEqZtfeLBvO6N5vJ47LNvc1U6vy9scdoop1gLY/PIBalrB4kZ4vu5dinHVbKj1hduk4yuhSjx9TVTV7vV+PH1RVnK3iu/NSes6slme2MCqO0rNmdGQuM9/lsv/ynlNpuVnnoVzFo/WzkeQwfnQFHSa8RD+3+jeNurVYZG7Ku8X4SQRbdJOfLzerVO91rNMV6wUFiUzaU1ntpDlGu6o8tck9vN96lmz8f+2LHAAAAABJRU5ErkJggg==";
                    }
                    img1.src = src1;
                    img1.alt = clickFile1.name;
                };
            }
        });

        dropZone1.addEventListener("click", () => inputElement1.click());
        dropZone1.addEventListener("dragover", (e) => {
            e.preventDefault();
        });
        dropZone1.addEventListener("drop", (e) => {
            e.preventDefault();
            img1.style = "display:block;";
            let file1 = e.dataTransfer.files[0];

            const reader1 = new FileReader();
            reader1.readAsDataURL(file1);
            reader1.onloadend = function () {
                e.preventDefault();
                p1.style = "display: none";
                upload_icon_dup.style = "display: none";
                let src1 = this.result;
                img1.src = src1;
                img1.alt = file1.name;
            };
        });
    }, []);
    return (
        <div className="card job_details_form_card">
            <div className="card-body">
                <h1 className="card-title">
                    Complete the form below to apply for this job.
                </h1>
                <div>
                    <form action="" method="post">

                        <div className="gap_fieds">
                            <label htmlFor="" className="form-label label_fields">First Name</label>
                            <input type="text" name="" id="" className="form-control input_form" placeholder="First name" />
                        </div>

                        <div className="gap_fieds">
                            <label htmlFor="" className="form-label label_fields">Last Name</label>
                            <input type="text" name="" id="" className="form-control input_form" placeholder="Last name" />
                        </div>

                        <div className="gap_fieds">
                            <label htmlFor="" className="form-label label_fields">Mobile Phone</label>
                            <input type="tel" name="" id="" className="form-control input_form" placeholder="+44 01234 567 890" />
                        </div>

                        <div className="gap_fieds">
                            <label htmlFor="" className="form-label label_fields">Email Address:</label>
                            <input type="email" name="" id="" className="form-control input_form" placeholder="Email address" />
                        </div>

                        <div className="gap_fieds">
                            <div>
                                <label htmlFor="" className="form-label label_fields">Telephone availability</label>
                            </div>
                            <div className="custom-select">
                                <select>
                                    <option value="0">Select time</option>
                                    <option value="1">Morning - 8:00 a.m - 12:00 p.m</option>
                                    <option value="2">Morning - 8:00 a.m - 12:00 p.m</option>
                                    <option value="3">Morning - 8:00 a.m - 12:00 p.m</option>
                                    <option value="4">Available all day</option>
                                </select>
                            </div>
                        </div>

                        <div className="gap_fieds">
                            <label htmlFor="" className="form-label label_fields">Available from</label>
                            <input type="date" name="" id="" className="form-control input_form" placeholder="Select date" />
                        </div>

                        <div className="gap_fieds">
                            <label htmlFor="" className="form-label label_fields">I have a resume</label>
                            <div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="option1" />
                                    <label className="form-check-label" htmlFor="flexRadioDefault1">Yes</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked value="option2" />
                                    <label className="form-check-label" htmlFor="flexRadioDefault2">No</label>
                                </div>
                            </div>
                        </div>

                        <div className="gap_fieds">
                            <div id="drop-zone">
                                <img src="" alt="" id="imagee" />
                                <div className="upload_img">
                                    <img id="upload_icon" src="/assets/img/application/upload.svg" alt="" />
                                    <p id="Pp">Drag & drop or <span>Choose file</span> to upload</p>
                                    <small>Maximum file size 10 MB</small>
                                </div>
                                <input type="file" id="myfile" hidden />
                            </div>
                        </div>

                        <div className="gap_fieds">
                            <div className="d-flex justify-content-between alert_msg p-3 align-items-center">
                                <div>
                                    <div className="d-flex align-items-center gap-2">
                                        <img src="/assets/img/application/pdf.svg" alt="" />
                                        <p className="mb-0">Curriculum-vitae.pdf</p>
                                    </div>
                                </div>
                                <div>
                                    <form action="">
                                        <button className="bg-transparent border-0">
                                            <img src="/assets/img/application/cross.svg" alt="" />
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="gap_fieds">
                            <div className="other-documents-para">
                                <p>
                                    Do you have any other documents, such as a cover letter, references or certificates, that are relevant to this application?
                                </p>
                            </div>
                            <div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="first_yes" id="first_yes1" checked value="option1" />
                                    <label className="form-check-label" htmlFor="first_yes1">Yes</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="first_yes" id="first_yes2" value="option2" />
                                    <label className="form-check-label" htmlFor="first_yes2">No</label>
                                </div>
                            </div>
                        </div>

                        <div className="gap_fieds">
                            <div id="drop-zone-dup">
                                <img src="" alt="" id="imagee_dup" />
                                <div className="upload_img">
                                    <img id="upload_icon_dup" src="/assets/img/application/upload.svg" alt="" />
                                    <p id="Pp_dup">Drag & drop or <span>Choose file</span> to upload</p>
                                    <small>Maximum file size 10 MB</small>
                                </div>
                                <input type="file" id="myfile_dup" hidden />
                            </div>
                        </div>

                        <div className="gap_fieds checkbox_field">
                            <div className="d-flex align-items-start gap-2">
                                <input className="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" />
                                <div className="heading_para_detail">
                                    <h6>
                                        I accept the processing of my data by automated systems
                                    </h6>
                                    <p className="accept_para">
                                        Randstad uses automated systems to compare your applicant profile with open positions (matching). Your applicant profile will be distorted to make it more difficult to identify you before it is used for training in our automated systems ( Find out more ). We are constantly improving our automated systems to achieve the best possible matching results. Randstad can use my applicant profile for training! You can revoke this decision at any time by contacting concernedrechte@randstad.de .
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="gap_fieds checkbox_field">
                            <div className="d-flex align-items-center gap-2">
                                <input className="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" />
                                <div className="heading_para_detail">
                                    <h6>
                                        I am at least 18 years old
                                    </h6>
                                </div>
                            </div>
                        </div>

                        <div className="gap_fieds checkbox_field">
                            <div className="d-flex align-items-center gap-2">
                                <input className="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" />
                                <div className="heading_para_detail">
                                    <h6>
                                        I accept the <a href="#">Terms and Conditions</a>
                                    </h6>
                                </div>
                            </div>
                        </div>

                        <div className="gap_fieds checkbox_field">
                            <div className="d-flex align-items-start gap-2">
                                <input className="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" />
                                <div className="heading_para_detail">
                                    <h6>
                                        Consent: Further information on data processing by Randstad:<a href="#"> Data protection information</a>
                                    </h6>
                                </div>
                            </div>
                        </div>

                        <div className="gap_btn">
                            <button type="submit" className="submit_btn">
                                Submit application
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default JobApplicationForm;
