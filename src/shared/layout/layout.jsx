import React from "react";
import Header from "../layout/header/header";
import Footer from "../layout/footer/footer";

export default function Layout({ children }) {
    return (
        <>
            {/* <div id="preloader"></div> */}
            <Header />
            {children}
            <Footer />

        </>
    );
}