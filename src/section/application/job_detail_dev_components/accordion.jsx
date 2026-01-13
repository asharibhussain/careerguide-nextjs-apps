import React, { useEffect, useState } from 'react';
import sections from '@/Dynamic-Data/application/job_detail_dev_components/date_accordion';

const Accordion = () => {


    const [activeIndex, setActiveIndex] = useState(null);

    useEffect(() => {
        var acc = document.getElementsByClassName("accordion");
        var i;

        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function () {
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
            });
        }    }, []);

    return (
        <div className="accordion_div mb-">
            {sections.map((section, index) => (
                <div className="mb-3" key={index}>
                    <button className="accordion">
                        {section.title}
                    </button>
                    <div className={`panel ${activeIndex === index ? 'active' : ''}`}>
                        <div className="panel_inner">
                            <ul>
                                {section.items.map((item, idx) => (
                                    <li key={idx}>
                                        <a href="#">{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Accordion;
