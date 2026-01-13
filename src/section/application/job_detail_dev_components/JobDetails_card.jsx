
import React from 'react';
import { jobData } from '@/Dynamic-Data/application/job_detail_dev_components/date_JobDetails_card'; // Ensure correct path to your jobData

const JobDetails_Card = () => {
    return (
        <div>
            {jobData.map((job, index) => (
                <div
                    key={job.id}
                    className={`card project_manager_card ms-lg-auto ${index !== jobData.length - 1 ? 'mb-4' : ''}`}
                >
                    <div className="card-body p-0">
                        <h3 className="card-title">{job.jobTitle}</h3>
                        <div className="list_icons_project">
                            <div className="d-flex align-items-start gap-2">
                                <div>
                                    <img src="/assets/img/application/MapPin.svg" alt="" />
                                </div>
                                <div>
                                    <h6>Address:</h6>
                                    <p>{job.address}</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-start gap-2">
                                <div>
                                    <img src="/assets/img/application/office.svg" alt="" />
                                </div>
                                <div>
                                    <h6>Company:</h6>
                                    <p>{job.company}</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-start gap-2">
                                <div>
                                    <img src="/assets/img/application/salary.svg" alt="" />
                                </div>
                                <div>
                                    <h6>Salary:</h6>
                                    <p>{job.salary}</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-start gap-2">
                                <div>
                                    <img src="/assets/img/application/position.svg" alt="" />
                                </div>
                                <div>
                                    <h6>Employment:</h6>
                                    <p>{job.employmentType}</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-start gap-2">
                                <div>
                                    <img src="/assets/img/application/calendar.svg" alt="" />
                                </div>
                                <div>
                                    <h6>Posted on:</h6>
                                    <p>{job.postedOn}</p>
                                </div>
                            </div>
                        </div>
                        <div className="contact_us">
                            <h5>Your Contact</h5>
                            <div className="d-flex align-items-center gap-2 mb-4">
                                <img src="/assets/img/application/profile.svg" alt="" />
                                <p>{job.contactName}</p>
                            </div>
                        </div>
                        <div className="perfect_roles">
                            <h5>Can’t find the perfect role?</h5>
                            <p>
                                Cannot find a suitable job with us? Or if you have questions you can{' '}
                                <a href="#">contact us here.</a>
                            </p>
                            <h5>Visit us at:</h5>
                            <div className="social_icons d-flex flex-wrap gap-2 pt-lg-2">
                                {job.socialLinks.map((socialLink, index) => (
                                    <a key={index} href={socialLink.url}>
                                        <div className={socialLink.className}>
                                            <img src={socialLink.imgSrc} alt="" className="img-fluid" />
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default JobDetails_Card;
