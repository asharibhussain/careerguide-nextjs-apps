// pages/_error.js
import React from 'react'; // Adjust the path as per your component structure

const ErrorPage = () => (
        <main id="main" className="main_home_page">
            <div className="page_not_found">
                <div className="container d-flex flex-column align-items-center">
                    <img className="img_404" src="/assets/img/404.png" alt="404 Not Found" />
                    <h6 className="color_green">404</h6>
                    <h6 className="not_found">Page Not Found</h6>
                    <p>
                        We can’t find the page you are looking for. Well, you can reach us anytime at: <a href="mailto:support@careerguide24.com">support@careerguide24.com</a>
                    </p>
                    <a href="/">
                        <div className="back_to_home">
                            <img src="/assets/img/back_to_home.svg" alt="Back to Home" /> Go to Home Page
                        </div>
                    </a>
                </div>
            </div>
        </main>
);

export default ErrorPage;
