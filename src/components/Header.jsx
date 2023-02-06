import { useState, useContext } from 'react';
import AppContext from '@context/AppContext';
import Menu from '@components/Menu';
import MyOrder from '@containers/MyOrder';
import MenuMobile from '@components/MenuMobile';
import cartIcon from '@icons/icon_shopping_cart.svg';
import menuIcon from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import '@styles/Header.scss';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);
  const [toggleMenuMobile, setToggleMenuMobile] = useState(false);
  const { state: {cart} } = useContext(AppContext);

  const handleToggle = (func, obj) => {
    func(!obj);
  }

  return (
    <header className="header">
      <img src={menuIcon} alt="menu" className="menu" onClick={() => handleToggle(setToggleMenuMobile, toggleMenuMobile)} />
      <div className="header__navbar navbar-left">
        <img src={logo} alt="logo" className="header__logo" />
        <ul className='list'>
          <li>
            <a className='list__item' href="/">All</a>
          </li>
          <li>
            <a className='list__item' href="/">Clothes</a>
          </li>
          <li>
            <a className='list__item' href="/">Electronics</a>
          </li>
          <li>
            <a className='list__item' href="/">Furnitures</a>
          </li>
          <li>
            <a className='list__item' href="/">Toys</a>
          </li>
          <li>
            <a className='list__item' href="/">Others</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul className='list'>
          <li className="list__email" onClick={() => handleToggle(setToggle, toggle)}>
            platzi@example.com
          </li>
          <li className="shopping-cart" onClick={() => handleToggle(setToggleOrders, toggleOrders)}>
            <img className='shopping-cart__icon' src={cartIcon} alt="shoping cart" />
            {cart.length > 0 && <div className='shopping-cart__quantity'>{cart.length}</div>}
          </li>
        </ul>
      </div>
      {toggle && <Menu />}
      {toggleOrders && <MyOrder />}
      { toggleMenuMobile && <MenuMobile /> }
    </header>
  );
};

export default Header;
