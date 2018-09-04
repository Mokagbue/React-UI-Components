import React from 'react';
import './App.css';
import HeaderContent from './components/HeaderComponents/HeaderContent.js';
import HeaderTitle from './components/HeaderComponents/HeaderTitle.js';
import CardContent from './components/CardComponents/CardContent.js';
import ThumbNail from './components/HeaderComponents/ImageThumbnail.js';


const App = () => {
  return (
    <div>
      <ThumbNail />
      <HeaderTitle />
      <HeaderContent />
      <CardContent />
    </div>
  );
};

export default App;
