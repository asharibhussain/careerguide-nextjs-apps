import CompaniesBanner from '@/section/application/application_banner';
import Select_Information from '@/components/common/Select_Information_coustum/Select_Information';
import JobDetails from '@/section/application/job_details';
import { useCustomSelect } from '@/utils/helpers/customSelect';


export default function application() {
    useCustomSelect();
    return (
        <>
            <CompaniesBanner />
            <main id="main" class="main_application_page">
                <JobDetails />
                <Select_Information />
            </main>

        </>
    );
}