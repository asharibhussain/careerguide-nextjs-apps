import React, { useEffect } from 'react';
import $ from 'jquery';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PartnerComponent from "../../components/OurPartner/OurPartner";

const OurPartner = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      require('slick-carousel');
      $('.slick.marquee_slick').slick({
        speed: 3000,
        autoplay: true,
        autoplaySpeed: 0,
        centerMode: true,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        infinite: true,
        initialSlide: 1,
        arrows: false,
        pauseOnHover: false,
        buttons: false,
      });

      $('.slick.marquee_slick').mouseenter(function() {
        $(this).slick('slickPause');
      }).mouseleave(function() {
        $(this).slick('slickPlay');
      });
    }
  }, []);

  return (
    <section className="our_partner">
      <div className="container our_partner_container" data-aos="fade-up" data-aos-delay={200}>
        <h6 className="text-center">
          Our <span>Partner</span> companies at a glance
        </h6>
        <div className="">
          <div className="slick marquee_slick">
            <PartnerComponent imageUrl="/assets/image/partners/partner_1.png" />
            <PartnerComponent imageUrl="/assets/image/partners/partner_2.png" />
            <PartnerComponent imageUrl="/assets/image/partners/partner_3.png" />
            <PartnerComponent imageUrl="/assets/image/partners/partner_4.png" />
            <PartnerComponent imageUrl="/assets/image/partners/partner_5.png" />
            <PartnerComponent imageUrl="/assets/image/partners/partner_6.png" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurPartner; // Exporting the component
