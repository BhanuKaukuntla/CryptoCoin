import React, { useState, useEffect } from 'react';
import { Button, Menu, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { FundOutlined, MenuOutlined, MoneyCollectOutlined } from '@ant-design/icons';
import { BiHomeAlt, GiCrownCoin, ImNewspaper } from 'react-icons/all';
// import SizeContext from 'antd/lib/config-provider/SizeContext';
// import icon from '../images/cryptocurrency.png';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 800) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="nav-container">
      <div className="logo-container">
        {/* <Avatar src={icon} size="large" /> */}
        <div className="symbol">
          <GiCrownCoin />
        </div>
        <Typography.Title level={2} className="logo"><Link to="/">CryptoCoin</Link></Typography.Title>
        <Button className="menu-control-container" onClick={() => setActiveMenu(!activeMenu)}><MenuOutlined /></Button>
      </div>
      {activeMenu && (
      <Menu theme="dark" className="menu-items">
        <Menu.Item icon={<BiHomeAlt />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item icon={<MoneyCollectOutlined />}>
          <Link to="/cryptocurrencies">Cryptocurrencies</Link>
        </Menu.Item>
        <Menu.Item icon={<FundOutlined />}>
          <Link to="/exchanges">Exchanges</Link>
        </Menu.Item>
        <Menu.Item icon={<ImNewspaper />}>
          <Link to="/news">News</Link>
        </Menu.Item>
      </Menu>
      )}
      <div className="bottombar">
        <div className="icons">
          <Link to="/"><BiHomeAlt /></Link>
        </div>
        <div className="icons">
          <Link to="/cryptocurrencies"><MoneyCollectOutlined /></Link>
        </div>
        <div className="icons">
          <Link to="/exchanges"><FundOutlined /></Link>
        </div>
        <div className="icons">
          <Link to="/news"><ImNewspaper /></Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
