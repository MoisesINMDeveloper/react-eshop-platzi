import { useState } from 'react';
import closeIcon from '@icons/icon_close.png'
import '@styles/MenuMobile.scss'

const MenuMobile = () => {
  const [toggle, setToggle] = useState(true);

  const handleToggle = (func, obj) => {
    func(!obj);
  }

  if (toggle) {
    return (
      <div className="MobileMenu">
        <figure onClick={() => handleToggle(setToggle, toggle)} className='MobileMenu__close'>
          <img className='MobileMenu__image' src={closeIcon} alt="Close menu" />
        </figure>
        <ul className="MobileMenu__categories list">
          <li className="list__item">
            <a className="list__link" href="/">CATEGORIES</a>
          </li>
          <li className="list__item">
            <a className="list__link" href="/">All</a>
          </li>
          <li className="list__item">
            <a className="list__link" href="/">Clothes</a>
          </li>
          <li className="list__item">
            <a className="list__link" href="/">Electronics</a>
          </li>
          <li className="list__item">
            <a className="list__link" href="/">Furnitures</a>
          </li>
          <li className="list__item">
            <a className="list__link" href="/">Toys</a>
          </li>
          <li className="list__item">
            <a className="list__link" href="/">Others</a>
          </li>
        </ul>
        <ul className="MobileMenu__account list">
          <li className="list__item">
            <a className="list__link" href="/">My orders</a>
          </li>
          <li className="list__item">
            <a className="list__link" href="/">My account</a>
          </li>
        </ul>
        <ul className="MobileMenu__info list">
          <li className="list__item">
            <a className="list__link email" href="/" >Calos.aldazosa@outlook.com</a>
          </li>
          <li className="list__item">
            <a className="list__link sign-out" href="/" >Sign out</a>
          </li>
        </ul>
      </div>
  
    )
    
  }

}

export default MenuMobile