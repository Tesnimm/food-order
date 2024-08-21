import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import AppDownload from '../../components/AppDownload/AppDownload';
import './Home.css'; // CSS dosyasını kontrol edin

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div className="home">
  <Header className="header" />
  <ExploreMenu className="explore-menu" category={category} setCategory={setCategory} />
  <FoodDisplay className="food-display" category={category} />
  <AppDownload className="app-download" />
</div>

  );
};

export default Home;
