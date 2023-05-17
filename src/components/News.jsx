import React, { useState } from 'react';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';

import { useGetCryptosQuery } from '../services/cryptoApi';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
// import Loader from './Loader';

const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

const { Text, Title } = Typography;
const { Option } = Select;

const News = ({ simplified }) => {
  // const [newsCategory, setNewsCategory] = useState('cryptonews');
  
  // const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory, count: simplified ? 6 : 12 });
  var { data: cryptoNews } = useGetCryptoNewsQuery();
  // cryptoNews=cryptoNews.data.slice(0,10)
  // console.log(cryptoNews)
  // const { data } = useGetCryptosQuery(100);
  // if (!cryptoNews?.value) return <Loader />;
  // cryptoNews=cryptoNews.data;
  if (simplified){
    // console.log(cryptoNews.data.slice(0,10))
    cryptoNews=cryptoNews?.data.slice(0,10)
    // console.log(ryptoNews)

  }
  else{
    cryptoNews=cryptoNews.data
  }
  // console.log(ryptoNews)

  return (
    <Row gutter={[24, 24]}>
    
      {cryptoNews?.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={4}>{news.title}</Title>
                {/* <img src={news?.thumbnail || demoImage} alt="" /> */}
              </div>
              <p>{news.description.length > 100 ? `${news.description.substring(0, 100)}...` : news.description}</p>
              <div className="provider-container">
                <div>
                  <Avatar src={news?.thumbnail || demoImage} alt="" />
                  {/* <Text className="provider-name">{news.provider[0]?.name}</Text> */}
                </div>
                <Text>{moment(news.createdAt).startOf('ss').fromNow()}</Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default News;