// components/Footer.js
const Footer = () => {
    return (
<>
  {/* ======= Footer Start ======= */}
  <footer id="footer" className="footer">
    <div className="container footer-top">
      <div className="row g-3">
        <div className="col-lg-6 col-md-6 mb-4">
          <h1>Subscribe to our newsletter.</h1>
          <p>We'll inform about new studies blog careerguide 24.</p>
          <div className="form_email">
            <form action="" method="post">
              <input
                type="email"
                name="email"
                placeholder="Enter email address"
              />
              <input type="submit" defaultValue="Claim My Page" />
              <img src="assets/img/CaretRight.svg" alt="" />
            </form>
          </div>
        </div>
        <div className="col-lg-2 col-md-2 col-6">
          <h4>Company</h4>
          <ul>
            <li>
              <a href="search">Search</a>
            </li>
            <li>
              <a href="company">Companies</a>
            </li>
            <li>
              <a href="Career Knowledge">Career Knowledge</a>
            </li>
            <li>
              <a href="application">application</a>
            </li>
          </ul>
        </div>
        <div className="col-lg-2 col-md-2 col-6">
          <h4>Resouces</h4>
          <ul>
            <li>
              <a href="videospage">Videos</a>
            </li>
            <li>
              <a href="Ebook">Ebook</a>
            </li>
            <li>
              <a href="blog_detail">Blog_Detail</a>
            </li>
          </ul>
        </div>
        <div className="col-lg-2 col-md-2">
          <h4>Awards.</h4>
          <ul className="d-flex">
            <li className="me-3">
              <a href="#">
                <img
                  className="img-fluid"
                  src="assets/img/company_1.png"
                  alt=""
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  className="img-fluid"
                  src="assets/img/company_2.png"
                  alt=""
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <hr />
    <div className="container copyright">
      <div className="row">
        <div className="col-lg-7 mb-3">
          <div>
            <ul>
              <li>
                <a href="Cookies">Cookies</a>
              </li>
              <li>
                <a href="Privacy">Privacy policy</a>
              </li>
              <li>
                <a href="Security">Security</a>
              </li>
              <li>
                <a href="Legal">Legal documents</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-5 mb-3">
          <div className="copyright_career text-lg-end">
            Copyright ©{" "}
            <strong>
              <span>Webuir 2022</span>
            </strong>
            . All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  </footer>
  <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
</>

    );
  };
  
  export default Footer;
  