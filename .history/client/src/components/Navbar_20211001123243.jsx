import React, { useState, useEffect } from 'react';
import { Button, Typography } from 'antd';
import { Link } from 'react-router-dom';
// import { MenuOutlined } from '@ant-design/icons';
import SidebarOption  from './SidebarOption.js';
import { FaHome, GiCrownCoin, ImNewspaper, AiFillMoneyCollect, BsBarChartFill } from 'react-icons/all';
// import SizeContext from 'antd/lib/config-provider/SizeContext';
// import icon from '../images/cryptocurrency.png';

const Navbar = () => {
  // const [activeMenu, setActiveMenu] = useState(true);
  // const [screenSize, setScreenSize] = useState(undefined);

  // useEffect(() => {
  //   const handleResize = () => setScreenSize(window.innerWidth);

  //   window.addEventListener('resize', handleResize);

  //   handleResize();

  //   return () => window.removeEventListener('resize', handleResize);
  // }, []);

  // useEffect(() => {
  //   if (screenSize <= 800) {
  //     setActiveMenu(false);
  //   } else {
  //     setActiveMenu(true);
  //   }
  // }, [screenSize]);

  return (
    <div className="nav-container">
      <div className="logo-container">
        {/* <Avatar src={icon} size="large" /> */}
        <div className="symbol">
          <GiCrownCoin />
        </div>
        <div className="logo"><Link to="/">CryptoCoin</Link></div>
        {/* <Button className="menu-control-container" onClick={() => setActiveMenu(!activeMenu)}></Button> */}
      </div>

      <div className="sidebar">
            <ul>
                <li className="btn-active">
                <Link to="/">
                  <SidebarOption active Icon={FaHome} text="Home" />
                </Link>
                </li>
                <li className="btn">
                <Link to="/cryptocurrencies">
                  <SidebarOption Icon={AiFillMoneyCollect} text="Currencies" />
                </Link>
                </li>
                <li className="btn">
                <Link to="/exchanges">
                  <SidebarOption Icon={BsBarChartFill} text="Exchanges" />
                </Link>
                </li>
                <li className="btn">
                <Link to="/news">
                  <SidebarOption Icon={ImNewspaper} text="News" />
                </Link>
                </li>
            </ul>
        </div>
        <div className="bottombar">
          <div className="icons">
            <Link to="/"><FaHome /></Link>
          </div>
          <div className="icons">
            <Link to="/cryptocurrencies"><AiFillMoneyCollect /></Link>
          </div>
          <div className="icons">
            <Link to="/exchanges"><BsBarChartFill /></Link>
          </div>
          <div className="icons">
            <Link to="/news"><ImNewspaper /></Link>
          </div>
        </div>
    </div>
  );
};

export default Navbar;
