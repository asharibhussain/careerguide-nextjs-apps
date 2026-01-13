// import React from 'react';
import BlogDetailSection from '@/section/blog_detail/banner_blog_detail';
import BlogAllDetail from '@/section/blog_detail/blog_all_detail';
import ReadMoreArticle from '@/section/blog_detail/read_more_article';
import Select_Information from '@/components/common/Select_Information_coustum/Select_Information';
import { useCustomSelect } from '@/utils/helpers/customSelect';

export default function blog_detail() {
    useCustomSelect();
    return (
        <>
        <BlogDetailSection />
        <main id="main" class="main_blog_detail_page">
            <BlogAllDetail />
            <ReadMoreArticle />
            <Select_Information />
        </main>
            
        </>
    );
}
