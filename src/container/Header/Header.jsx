import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title="Chase the new flavor" />
      <h1 className='app__header-h1'>The Key to Fine Dining</h1>
      <p className='p__opensans' style={{ margin: '2rem 0' }}>Welcome to Gericht, where culinary excellence meets refined ambiance. Nestled in the heart of New York, Gericht offers a symphony of flavors curated to delight even the most discerning palates. Our commitment to sourcing the freshest ingredients ensures each dish is a masterpiece, meticulously crafted by our skilled chefs. Whether you're seeking a romantic dinner for two or celebrating a special occasion with friends and family, Gericht invites you to indulge in an unforgettable dining experience where every bite tells a story of culinary mastery. </p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>
    
    <div className='app__wrapper_img'>
      <img src={images.welcome} alt="header img" />
    </div>
   
  </div>
);

export default Header;
