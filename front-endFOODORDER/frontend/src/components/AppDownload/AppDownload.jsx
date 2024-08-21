import React from 'react';
import './AppDownload.css';
import { assets } from '../../assets/assets';

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
      <p>For a Better Experience, Download the <br />Express App</p>
      <div className="app-download-platforms">
        <img src={assets.store_play} alt="Google Play Store" />
        <img src={assets.store_app} alt="Apple App Store" />
      </div>
    </div>
  );
};

export default AppDownload;
