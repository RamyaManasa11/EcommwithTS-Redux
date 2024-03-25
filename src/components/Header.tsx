
import React from 'react';
import '../App.css';
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { RootState } from '../redux/reducer';

const Header: React.FC = () => {
  const cartLength = useSelector((state: RootState)=> state.cart);
  return (
    <>
      <header>
        <div className='container'>
          <div className='flexSB'>
            <div className='logo'>
              <img src="../images/logo1.jpeg" />
            </div>
            <ul className='flexSB'>
              <li className='headerMenuItem'>Home</li>
              <li className='headerMenuItem'>About</li>
              <NavLink className='navItem' to='/'><li className='headerMenuItem'>Products</li></NavLink>
              <li className='headerMenuItem'>
                <button className='btn btn-outline-light'>Login</button>
              </li>
              <li className='headerMenuItem'>
                <NavLink to='/cart'><button className='btn btn-outline-light'><FaShoppingCart/> Cart ({cartLength.length})</button></NavLink>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header;
