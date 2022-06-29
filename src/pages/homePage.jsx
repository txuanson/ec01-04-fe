import Hero from "../components/hero";
import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import LoginForm from "../components/loginForm";

// render homepage with navbar component
export default function HomePage() {
    return (
        <div>
            <Header/>
            {/* <LoginForm/> */}
            <Hero/>
            <Footer/>
        </div>
    );
}