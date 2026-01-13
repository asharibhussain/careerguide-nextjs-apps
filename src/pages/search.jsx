import Search_Page from '@/section/search/Search_Page';
import { useCustomSelect } from '@/utils/helpers/customSelect';


export default function search() {
    useCustomSelect();
    return (
        <>
                <main id="main" class="main_search_page">
                    <Search_Page />
                </main>

        </>
    );
}