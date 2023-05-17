import React from 'react'
import { Routes, Route, NavLink } from "react-router-dom";
import { Layout, Typography, Space } from 'antd';
import './App.css'
import { Navbar, Homepage, Exchanges, Cryptocurrencies, CryptoDetails, News } from './components';


const App = () => {
  return (
    // <Routes>
    //   <Route exact path='/' element={< Navbar />}></Route>
    // </Routes>
    <div className='app'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='main'>
        <Layout>
          <div className='routes'>
            <Routes>
              <Route exact path="/" element={<Homepage />} />
              <Route exact path="/exchanges" element={<Exchanges />} />
              <Route exact path="/cryptocurrencies" element={<Cryptocurrencies />} />
              <Route exact path="/crypto/:coinid" element={<CryptoDetails />} />
              <Route exact path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>

        <div className='footer'>
          <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
            cryptoVerse <br />
            All rights reserved
          </Typography.Title>
          <Space>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/exchanges'>Exchanges</NavLink>
            <NavLink to='/news'>News</NavLink>
          </Space>
        </div>
      </div>
    </div>

  )
}

export default App
