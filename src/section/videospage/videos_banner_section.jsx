import React, { useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slidesData from '@/Dynamic-Data/videopage/Data_videos_banner_section';


const Videos_Banner_Section = () => {
    useEffect(() => {
        const initializeSlick = async () => {
            if (typeof window !== 'undefined') {
                const $ = (await import('jquery')).default;
                await import('slick-carousel');

                $('.video_banner_slider').slick({
                    infinite: true,
                    speed: 300,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 3000,
                    speed: 2000
                });
            }
        };
        initializeSlick();
    }, []);



    return (    
        <section className="videos_banner_section">
            <div className="container-lg">
                <div className="row">
                    <div className="col-lg-12 position-relative">
                        <div className="bg_img_video_slider">
                            <img src="assets/img/video/video_bg.png" alt="" />
                        </div>
                        <div className="bg_video">
                            <div className="video_banner_slider my_slider_video">
                                {slidesData.map((slide, index) => (
                                    <div className="slider" key={index}>
                                        <div className="slider-content">
                                            <div className="text-center">
                                                <h1>{slide.title}</h1>
                                                <p>{slide.description}</p>
                                                <div className="button_flex">
                                                    <a href={slide.detailLink} className="mx-lg-2">
                                                        <div className="button_view_bg">View Details</div>
                                                    </a>
                                                    <a href={slide.visitLink} className="mx-lg-2">
                                                        <div className="button_view">
                                                            Visit Website{" "}
                                                            <img src={slide.visitLinkImage} alt="" />
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="thumbnil">
                                                <div className="thumbnil_img">
                                                    <img src={slide.thumbnail} alt="" />
                                                </div>
                                                <div className="play_button">
                                                    <a
                                                        href={slide.playButtonLink}
                                                        className="glightbox btn-watch-video"
                                                    >
                                                        <img src={slide.playButtonImage} alt="" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Videos_Banner_Section;

