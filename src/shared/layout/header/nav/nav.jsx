// components/Nav.js
import Link from "next/link";

const Nav = () => {
return (
    <nav id="navbar" className="navbar">
    <ul className="navbar-left">
    <li className="dropdown">
        <a className="nav-link scrollto" href="search">
        Search
        </a>
        <ul>
        <li>
            <a href="#">Drop Down 1</a>
        </li>
        <li>
            <a href="#">Drop Down 2</a>
        </li>
        <li>
            <a href="#">Drop Down 3</a>
        </li>
        <li>
            <a href="#">Drop Down 4</a>
        </li>
        </ul>
    </li>
    <li className="dropdown">
        <a className="nav-link scrollto" href="#">
        Career Knowledge
        </a>
        <ul>
        <li>
            <a href="#">Drop Down 1</a>
        </li>
        <li>
            <a href="#">Drop Down 2</a>
        </li>
        <li>
            <a href="#">Drop Down 3</a>
        </li>
        <li>
            <a href="#">Drop Down 4</a>
        </li>
        </ul>
    </li>
    <li className="dropdown">
        <a className="nav-link scrollto" href="company">
        Companies
        </a>
        <ul>
        <li>
            <a href="#">Drop Down 1</a>
        </li>
        <li>
            <a href="#">Drop Down 2</a>
        </li>
        <li>
            <a href="#">Drop Down 3</a>
        </li>
        <li>
            <a href="#">Drop Down 4</a>
        </li>
        </ul>
    </li>
    <li className="dropdown">
        <a className="nav-link scrollto" href="videospage">
        Videos
        </a>
        <ul>
        <li>
            <a href="#">Drop Down 1</a>
        </li>
        <li>
            <a href="#">Drop Down 2</a>
        </li>
        <li>
            <a href="#">Drop Down 3</a>
        </li>
        <li>
            <a href="#">Drop Down 4</a>
        </li>
        </ul>
    </li>
    <li className="dropdown">
        <a className="nav-link scrollto" href="blog">
        Blog
        </a>
        <ul>
        <li>
            <a href="#">Drop Down 1</a>
        </li>
        <li>
            <a href="#">Drop Down 2</a>
        </li>
        <li>
            <a href="#">Drop Down 3</a>
        </li>
        <li>
            <a href="#">Drop Down 4</a>
        </li>
        </ul>
    </li>
    <li className="dropdown">
        <a className="nav-link scrollto" href="#">
        Ebook
        </a>
        <ul>
        <li>
            <a href="#">Drop Down 1</a>
        </li>
        <li>
            <a href="#">Drop Down 2</a>
        </li>
        <li>
            <a href="#">Drop Down 3</a>
        </li>
        <li>
            <a href="#">Drop Down 4</a>
        </li>
        </ul>
    </li>
    <li className="dropdown">
        <a href="#" className="english">
        <img
            src="/assets/img/english_flag.png"
            alt=""
            style={{ width: 25 }}
        />
        <span className="mx-2">English</span>{" "}
        <img src="/assets/img/drop_down.png" alt="" />
        </a>
        <ul>
        <li>
            <a href="#" className="justify-content-start">
            <img
                src="/assets/img/flags/german.svg"
                alt=""
                style={{ width: 25 }}
            />
            <span className="mx-2">German</span>
            </a>
        </li>
        <li>
            <a href="#" className="justify-content-start">
            <img
                src="/assets/img/flags/spanish_flag.svg"
                alt=""
                style={{ width: 25 }}
            />
            <span className="mx-2">Spanish</span>
            </a>
        </li>
        </ul>
    </li>
    <li>
        <a className="getstarted scrollto" href="#about">
        Get Started{" "}
        <img className="ms-2" src="/assets/img/button_arrow.png" alt="" />
        </a>
    </li>
    </ul>
    <i className="bi bi-list mobile-nav-toggle" />
</nav>
);
};

export default Nav;
