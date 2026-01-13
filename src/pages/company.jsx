import CompaniesBanner from '@/section/company/companies_banner';
import CompaniesLogos from '@/section/company/companies_logos';
import Select_Information from '@/components/common/Select_Information_coustum/Select_Information';
import Swiper_Silder from '@/components/swipe/swiper-silder/swiper_silder';
import { useCustomSelect } from '@/utils/helpers/customSelect';

export default function company() {
    useCustomSelect();
    return (
        <>
        <CompaniesBanner />
        <main id="main" className="main_company_page">
        <CompaniesLogos />
        <Swiper_Silder />
        <Select_Information />
        </main>
            
        </>
    );
}