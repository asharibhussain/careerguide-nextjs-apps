import React, { useEffect } from 'react';
import Nav from './nav/nav';

const Header = () => {
  useEffect(() => {
    const select = (el, all = false) => {
      el = el.trim();
      if (all) {
        return [...document.querySelectorAll(el)];
      } else {
        return document.querySelector(el);
      }
    };

    const onscroll = (el, listener) => {
      el.addEventListener('scroll', listener);
    };

    const scrollto = (el) => {
      let header = select('#header');
      let offset = header.offsetHeight;

      let elementPos = select(el).offsetTop;
      window.scrollTo({
        top: elementPos - offset,
        behavior: 'smooth'
      });
    };

    const navbarlinksActive = () => {
      let navbarlinks = select('#navbar .scrollto', true);
      let position = window.scrollY + 200;
      navbarlinks.forEach(navbarlink => {
        if (!navbarlink.hash || !select(navbarlink.hash)) return; // Check if navbarlink.hash and corresponding section exist
        let section = select(navbarlink.hash);
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
          navbarlink.classList.add('active');
        } else {
          navbarlink.classList.remove('active');
        }
      });
    };

    const headerScrolled = () => {
      let selectHeader = select('#header');
      if (selectHeader) {
        if (window.scrollY > 100) {
          selectHeader.classList.add('header-scrolled');
        } else {
          selectHeader.classList.remove('header-scrolled');
        }
      }
    };

    const toggleMobileNav = (e) => {
      select('#navbar').classList.toggle('navbar-mobile');
      e.currentTarget.classList.toggle('bi-list');
      e.currentTarget.classList.toggle('bi-x');
    };

    const scrollToLink = (e) => {
      if (!e.currentTarget.hash) return; // Ensure hash exists
      e.preventDefault();

      let navbar = select('#navbar');
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile');
        let navbarToggle = select('.mobile-nav-toggle');
        navbarToggle.classList.toggle('bi-list');
        navbarToggle.classList.toggle('bi-x');
      }
      scrollto(e.currentTarget.hash);
    };

    // Add event listeners and initializations
    document.addEventListener('DOMContentLoaded', () => {
      navbarlinksActive();
      headerScrolled();
    });

    window.addEventListener('load', () => {
      navbarlinksActive();
      headerScrolled();
    });

    onscroll(document, () => {
      headerScrolled();
      navbarlinksActive();
    });

    select('.mobile-nav-toggle', false).addEventListener('click', toggleMobileNav);
    select('#navbar .scrollto', true).forEach(item => item.addEventListener('click', scrollToLink));

    // Clean up event listeners on component unmount
    return () => {
      document.removeEventListener('scroll', headerScrolled);
      document.querySelectorAll('.mobile-nav-toggle').forEach(item => item.removeEventListener('click', toggleMobileNav));
      document.querySelectorAll('#navbar .scrollto').forEach(item => item.removeEventListener('click', scrollToLink));
    };
  }, []);

  return (
    <>
      <header id="header" className="sticky-top">
        <div className="container-lg container-fluid header-container">
          <div className="d-flex align-items-center">
            <a href="/" className="logo me-auto">
              <img src="/assets/image/logo.png" alt="" className="img-fluid" />
            </a>
            <Nav />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
