import React,{ useEffect, useState } from 'react';
import $ from 'jquery';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ReactDOM from "react-dom";
import Studies_Slider from '@/Dynamic-Data/home/international_companies-section/Studies_Slider.jsx';
import Script from 'next/script';

const HeroSection = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      require('slick-carousel');
      $('.studies_divider_slider').slick({
        vertical: true, // Set the slider to vertical mode
        verticalSwiping: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 2000
      });
    }
  }, []);

  return (
    <>
          {/* <Script
        src="../../../public/plugins/slick/slick-main.js"
        strategy="beforeInteractive" // or "afterInteractive", "lazyOnload"
        onLoad={() => {
          console.log('Script loaded successfully');
        }}
        onError={(e) => {
          console.error('Error loading script', e);
        }}
      /> */}
      <section id="international_companies" className="international_companies">
        <div className="container-fluid international_companies_container p-0">
          <div className="row justify-content-center pt-lg-5 pt-md-3 pt-2 heading_divider">
            <div
              className="col-lg-8 col-md-10 col-11"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <h1 className="mb-0 text-center ">
                {Studies_Slider.title}
                <div className="studies_divider_slider">
                  {Studies_Slider.sliders.map((slider, index) => (
                    <div className="slider" key={index}>
                      <div className="slider-content">
                        <span className="studies_divider">
                          {slider.text}
                          <img src={slider.image} alt="" />
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </h1>
            </div>
          </div>
          <div className="row block_images">
            <div
              className="col-lg-3 col-md-3 col-1"
              data-aos="fade-right"
              data-aos-delay={300}
            >
              <div className="left_blocks text-lg-center text-md-end">
                <img src={Studies_Slider.leftBlockImage} alt="" />
              </div>
            </div>
            <div
              className="col-lg-6 text-center col-md-7 col-10"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <h5>Select from {Studies_Slider.totalCompanies} Top international companies.</h5>
            </div>
            <div
              className="col-lg-3 text-lg-center col-md-2 col-1"
              data-aos="fade-left"
              data-aos-delay={300}
            >
              <div className="right_blocks">
                <img src={Studies_Slider.rightBlockImage} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}




export default HeroSection; 