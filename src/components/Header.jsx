import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AlienIcon } from "./Icons";

const Header = () => {
  return (
    <header className='header' id='header'>
      <div className='container'>
        <div className='row'>
          <div className='logotype'>
            <NavLink to='/'>
              <AlienIcon size={48} />
              <span>Alan Bogov</span>
            </NavLink>
          </div>
        </div>

        <div className='row'>
          <nav className='navbar'>
            <ul className='menu'>
              {/* <li className='item'>
                <NavLink href='/about' className='link'>
                  About me
                </NavLink>
              </li> */}

              {/* <li className='item'>
                <NavLink href='/blog' className='link'>
                  Blog
                </NavLink>
              </li>

              <li className='item'>
                <NavLink href='/projects' className='link'>
                  Projects
                </NavLink>
              </li> */}

              <li className='item'>
                <NavLink
                  target='_blank'
                  to='https://t.me/avavion'
                  className='link'
                >
                  Telegram
                </NavLink>
              </li>

              <li className='item'>
                <NavLink
                  target='_blank'
                  to='https://t.me/+KQToBm1OWW0wMGZi'
                  className='link'
                >
                  Telegram Channel
                </NavLink>
              </li>

              <li className='item'>
                <NavLink
                  target='_blank'
                  to='https://www.youtube.com/channel/UCw1YfJs0loZ2s76fqcj75Zw'
                  className='link'
                >
                  YouTube
                </NavLink>
              </li>

              <li className='item'>
                <NavLink
                  target='_blank'
                  to='https://github.com/avavion'
                  className='link'
                >
                  GitHub
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
