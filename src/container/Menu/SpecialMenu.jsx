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
      <p className='app__specialMenu-menu_heading'>Wine & Beer</p>
      <div className='app__specialMenu_menu_items'>
        {data.wines.map((wine, index) => (
        <MenuItem key={wine.title + index} title= {wine.title} price= {wine.price} tags={wine.tags} />
        ))}
      </div>
    </div>

    <div className='app__specialMenu-menu_img'>
      <img src={images.menu} alt='menu img' />
    </div>

    <div className='app__specialMenu-menu_cocktails flex__center'>
      <p className='app__specialMenu-menu_heading'>Cocktails</p>
      <div className='app__specialMenu-menu_items'>
        {data.cocktails.map((cocktail, index) => (
        <MenuItem key={cocktail.title + index} title= {cocktail.title} price={cocktail.price} tags={cocktail.tags} />
        ))}
      </div>
    </div>


    <div style={{marginTop: '15px'}}>
    </div>
    </div>

    
    <div className='app__specialMenu-menu_wine flex__center'>
      <p className='app__specialMenu-menu_heading'>Appetizers</p>
      </div>
      <div className='left'>
      <img src={images.appetizer} alt='appetizer img' />
    </div>
      <div className='app__specialMenu_menu_items'>
        {data.appetizers.map((appetizers, index) => (
        <MenuItem key={appetizers.title + index} title= {appetizers.title} price= {appetizers.price} tags={appetizers.tags} />
        ))}
      </div>

      <div className='app__specialMenu-menu_wine flex__center'>
      <p className='app__specialMenu-menu_heading'>Entrees</p>
      </div>
      <div className='left'>
      <img src={images.entree1} alt='entree img' />
    </div>
      <div className='app__specialMenu_menu_items'>
        {data.entreesP1.map((entree1, index) => (
        <MenuItem key={entree1.title + index} title= {entree1.title} price= {entree1.price} tags={entree1.tags} />
        ))}
      </div>

      <div className='left'>
      <img src={images.entree2} alt='entree img' />
    </div>
      <div className='app__specialMenu_menu_items'>
        {data.entreesP2.map((entree2, index) => (
        <MenuItem key={entree2.title + index} title= {entree2.title} price= {entree2.price} tags={entree2.tags} />
        ))}
      </div>
      
      <div className='app__specialMenu-menu_wine flex__center'>
      <p className='app__specialMenu-menu_heading'>Desserts</p>
      </div>

      <div className='left'>
      <img src={images.dessert} alt='dessert img' />
    </div>
      <div className='app__specialMenu_menu_items'>
        {data.desserts.map((dessert, index) => (
        <MenuItem key={dessert.title + index} title= {dessert.title} price= {dessert.price} tags={dessert.tags} />
        ))}
      </div>
    
  </div>
);

export default SpecialMenu;
