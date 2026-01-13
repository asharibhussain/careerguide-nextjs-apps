import React from 'react'
import Videos_Banner_Section from '@/section/videospage/videos_banner_section';
import Video_Section from '@/section/videospage/video_section';
import Select_Information from '@/components/common/Select_Information_coustum/Select_Information';
import { useCustomSelect } from '@/utils/helpers/customSelect';

export default function videospage() {
    useCustomSelect();
    return (
        <>
            <Videos_Banner_Section />
            <main id="main" class="main_video_page">
                <Video_Section />
                <Select_Information />
            </main>
        </>
    )
}
