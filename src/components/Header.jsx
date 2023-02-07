import '@styles/Header.scss';
import { useState, useContext } from 'react';
import menu from "@icons/icon_menu.svg";
import Menu from "@components/Menu";
import logo from "@logos/logo_yard_sale.svg";
import AppContext from "@context/AppContext";
import MyOrder from '@containers/MyOrder';
import shoppingCart from "@icons/icon_shopping_cart.svg"
import MobileMenu from '@components/MobileMenu';

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const [toggleOrders, setToggleOrders] = useState(false);
    const [toggleMobileMenu, setToggleMobileMenu] = useState(false);
    const { state: {cart} } = useContext(AppContext);

    const handleToggle = () => {
        setToggle(!toggle);
    }

    const handleToggleMobileMenu = () => {
        setToggleMobileMenu(!toggleMobileMenu)
    }

    return (
        <nav>
            <img src={menu} alt="menu" className="menu" onClick={handleToggleMobileMenu} />
            <div className="navbar-left">
                <img src={logo} alt="logo" className="nav-logo" />
                <ul>
                    <li>
                        <a href="/">All</a>
                    </li>
                    <li>
                        <a href="/">Clothes</a>
                    </li>
                    <li>
                        <a href="/">Electronics</a>
                    </li>
                    <li>
                        <a href="/">Furnitures</a>
                    </li>
                    <li>
                        <a href="/">Toys</a>
                    </li>
                    <li>
                        <a href="/">Others</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-right">
                <ul>
                    <li className="navbar-email" onClick={handleToggle} >
                        rauljariasz@example.com
                    </li>
                    <li 
                        className="navbar-shopping-cart" 
                        onClick={() => setToggleOrders(!toggleOrders)}
                    >
                    <img src={shoppingCart} alt="shopping cart" />
                    { cart.length > 0 && <div>{ cart.length > 9 ? '+9' : cart.length }</div> }
                    </li>
                </ul>
            </div>
            {toggle ? <Menu /> : ""}
            {toggleOrders && <MyOrder toggleOrders={toggleOrders} setToggleOrders={setToggleOrders}/>}
            {toggleMobileMenu ? <MobileMenu /> : ""}
        </nav>
    );
};

export default Header;