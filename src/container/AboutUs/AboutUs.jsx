import React from 'react';
import { images } from '../../constants';

import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt="g letter" />
    </div>
    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon__img' />
        <p className='p__opensans'>At Gericht, we believe dining is not just about sustenance, but an exquisite journey of the senses. With a passion for culinary innovation and a dedication to impeccable service, we invite you to savor the essence of fine dining in every dish. Our menu reflects a harmonious blend of tradition and creativity, showcasing the finest ingredients meticulously sourced from local purveyors and beyond.</p>
      </div>

      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife} alt="about_knife" />
      </div>
      
      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon__img' />
        <p className='p__opensans'>Gericht, nestled in New York City, embodies culinary excellence since 1967. Founded by visionary chefs, it swiftly became a beacon of fine dining. With impeccable cuisine and service, it's a cherished gastronomic institution. Gericht offers an unforgettable celebration of culinary mastery and hospitality.</p>
      </div>

    </div>
  </div>
);

export default AboutUs;
