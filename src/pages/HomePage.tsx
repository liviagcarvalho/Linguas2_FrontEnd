// src/pages/HomePage.tsx
import React from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar"; // exemplo, se já tiver
import Banner from "../components/BannerPrincipal"; 
import AulasPopularesCarousel from "../components/Carrossel";
import MissaoSection from "../components/MissaoSection"; // exemplo, se já tiver

const HomePage = () => {
  return (
    <>
      <Header />
      <SearchBar />
      <Banner />
      <MissaoSection />
      <AulasPopularesCarousel />
      
    </>
  );
};

export default HomePage;
