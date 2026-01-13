
import BannerBlog from '@/section/Blog/banner_blog';
import Tags from '@/section/Blog/tags';
import Latest_Article from '@/section/Blog/latest_article';
import All_Blog from '@/section/Blog/all_blog';
import Select_Information from '@/components/common/Select_Information_coustum/Select_Information';
import { useCustomSelect } from '@/utils/helpers/customSelect';

export default function Company() {
    useCustomSelect();
    return (
        <>
            <BannerBlog />
            <main id="main" class="main_blog_page">
                <Tags />
                <Latest_Article />
                <All_Blog />
                <Select_Information />
            </main>
        </>
    );
}
