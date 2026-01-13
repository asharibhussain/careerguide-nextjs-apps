import HeroSection from "@/section/home/international_companies";
import CustomSelect from '@/section/home/CustomSelect';
import OurPartner from "@/section/home/OurPartner";
import Testimonials from '@/section/home/testimonials';
import Dual_Course from '@/section/home/dual_course';
// import DynamicSwiper from '@/components/swiper/swiper_structure/DynamicSwiper';
import Swiper_Silder from '@/components/swipe/swiper-silder/swiper_silder';
import Swiper from '@/components/swipe/swiper/swiper';
import Popular_Employers from '@/section/home/popular_employers';
import Select_Information from '@/section/home/Select_Information';
import { useCustomSelect } from '@/utils/helpers/customSelect';
import Script from 'next/script';



export default function Home() {
    useCustomSelect();
    return (
        <>
            <HeroSection />
            <CustomSelect />
            <main id="main" className="main_home_page">
                <OurPartner />
                <Testimonials />
                <Dual_Course />
                <Swiper_Silder />
                {/* <DynamicSwiper type="single" />  */}
                <Swiper />
                <Popular_Employers />
                <Select_Information />
            </main>
        </>
    );
}