import React from 'react';
import { SubHeading, MenuItem } from '../../components';
import {images, data} from '../../constants';

import './SpecialMenu.css';

const SpecialMenu = () => (
  /* id='menu' means we can scroll to that part of the page */
  <div className='app__specialMenu flex__center section__padding' id='menu'>
    <div className='app__specialMenu-title'>
      <SubHeading title='Menu that fits your pallete' />
      <h1 className='headtext__cormorant'> Menu </h1>
    </div>
  <div className='app__specialMenu-menu'>
    <div className='app__specialMenu-menu_wine flex__center'>
      <p className='app__specialMenu_menu-heading'>Wine & Beer</p>
      <div className='app__specialMenu_menu_items'>
        {data.wines.map((wine, index) => (
        <p>{wine.title}</p>
        ))}
      </div>
    </div>
    </div>
  </div>
);

export default SpecialMenu;
