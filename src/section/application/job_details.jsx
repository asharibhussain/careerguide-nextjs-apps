
import React from 'react';
import JobDetailsSection from '@/section/application/job_detail_dev_components/JobDetailsSection'; 
import Accordion from '@/section/application/job_detail_dev_components/accordion';
import JobApplicationForm from '@/section/application/job_detail_dev_components/JobApplicationForm';
import JobDetails_Card from '@/section/application/job_detail_dev_components/JobDetails_card';
const JobDetails = () => {
    return (
        <section id="job_details" className="job_details">
            <div className="container job_details_container">
                <div className="row">
                    <div className="col-lg-8 col-md-7 mb-4">
                        <JobDetailsSection />
                        <Accordion />
                        <JobApplicationForm />
                    </div>
                    <div className="col-lg-4 col-md-5">
                        <JobDetails_Card />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default JobDetails;
