import React from 'react'
import millify from 'millify';
import { NavLink} from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd';
import { useGetCryptosQuery } from '../services/cryptoApi';
import { useState, useEffect } from 'react';
import Loader from './Loader';

const Cryptocurrencies = ({ simplified }) => {
  const count=simplified?10:100;
  const { data: cryptoList, isFetching } = useGetCryptosQuery(count);

  // console.log(cryptoList)

  const [cryptos, setCryptos] = useState([])
  const [searchTerm,setSearchTerm]=useState('');
  // console.log(cryptos)

  useEffect(()=>{
    const filteredData=cryptoList?.data?.coins.filter((coin)=> coin.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setCryptos(filteredData)

  },[cryptoList,searchTerm])


  if (isFetching) {
    return <Loader />
  }

  return (
    <>
    {!simplified && (<div className="search-crypto">
      <Input placeholder='Search Cryptocurrency' onChange={(e)=>setSearchTerm(e.target.value)} />
    </div>) }
    
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((currency) => (
          <Col
            xs={24}
            sm={12}
            md={8}
            className="crypto-card"
            key={currency.uuid}
          >

            {/* Note: Change currency.id to currency.uuid  */}
            {/* <Link key={currency.uuid} to={`/crypto/${currency.uuid}`}> */}
              <NavLink key={currency.uuid} to={`/crypto/${currency.uuid}`}>
              <Card
                title={`${currency.rank}. ${currency.name}`}
                extra={<img className="crypto-image" src={currency.iconUrl} />}
                hoverable
              >
                <p>Price: {millify(currency.price)}</p>
                <p>Market Cap: {millify(currency.marketCap)}</p>
                <p>Daily Change: {currency.change}%</p>
              </Card>
            </NavLink>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Cryptocurrencies
