import React, { useState, useEffect } from 'react';
import { Button, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { FundOutlined, MenuOutlined, MoneyCollectOutlined } from '@ant-design/icons';
import { BiHomeAlt, GiCrownCoin, ImNewspaper } from 'react-icons/all';
// import SizeContext from 'antd/lib/config-provider/SizeContext';
// import icon from '../images/cryptocurrency.png';

const Navbar = () => {
  // const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
        <Typography.Title className="logo"><Link to="/">CryptoCoin</Link></Typography.Title>
        <Button className="menu-control-container" ><MenuOutlined /></Button>
      </div>


      <div className="sidebar">
            <ul>
                <li>
                <a href="/">
                    <BiHomeAlt className="icons" />
                    Home
                </a>
                </li>
                <li>
                <a href="/explore">
                    < FundOutlined className="icons" /> Currencies
                </a>
                </li>
                <li>
                <a href="/notifications">
                    <MoneyCollectOutlined className="icons" /> Exchangees
                </a>
                </li>
                <li>
                <a href="">
                    <ImNewspaper className="icons" /> News
                </a>
                </li>
            </ul>
        </div>
      </div>
  );
};

export default Navbar;
