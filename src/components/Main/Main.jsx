import React from "react";
import Promo from "./Promo/Promo"
import AboutProject from "./AboutProject/AboutProject"
import Techs from "./Techs/Techs";
import AboutMe from "./AboutMe/AboutMe";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Portfolio from "./Portfolio/Portfolio";

function Main(props) {
  return(
    <>
      <Header isLoggedIn={props.isLoggedIn}/>
      <main className="main">
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
    </>
  )
}

export default Main;
