import React, { useState, useEffect } from 'react';
import { Button, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { MenuOutlined } from '@ant-design/icons';
import { FaHome, GiCrownCoin, ImNewspaper, AiFillMoneyCollect, BsBarChartFill } from 'react-icons/all';
// import SizeContext from 'antd/lib/config-provider/SizeContext';
// import icon from '../images/cryptocurrency.png';

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        {/* <Avatar src={icon} size="large" /> */}
        <div className="symbol">
          <GiCrownCoin />
        </div>
        <div className="logo"><Link to="/">CryptoCoin</Link></div>
      </div>

      <div className="sidebar">
            <ul>
                <li className="btn active">
                <Link to="/">
                    <FaHome className="icons" />
                    Home
                </Link>
                </li>
                <li className="btn">
                <Link to="/cryptocurrencies">
                    <AiFillMoneyCollect className="icons" /> Currencies
                </Link>
                </li>
                <li className="btn">
                <Link to="/exchanges">
                    <BsBarChartFill className="icons" /> Exchangees
                </Link>
                </li>
                <li className="btn">
                <Link to="/news">
                    <ImNewspaper className="icons" /> News
                </Link>
                </li>
            </ul>
        </div>
        <div className="bottombar">
          <div>
            <Link to="/"><FaHome className="icons"/></Link>
          </div>
          <div>
            <Link to="/cryptocurrencies"><AiFillMoneyCollect className="icons" /></Link>
          </div>
          <div>
            <Link to="/exchanges"><BsBarChartFill className="icons" /></Link>
          </div>
          <div>
            <Link to="/news"><ImNewspaper className="icons" /></Link>
          </div>
        </div>
    </div>
  );
};

export default Navbar;
