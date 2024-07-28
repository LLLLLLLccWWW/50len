import React from "react";
import './App.css';
import logo from './logo/logo.png';
import bg from './logo/bg.jpg';
import { Button, Space } from "antd";
import { useNavigate } from 'react-router-dom';
import introImage from './logo/50嵐.jpg';

export default function Homepages() {
  const navigate = useNavigate();

  return (
    <>
      <div className="App-logo content">
        <img
          src={logo}
          width={250}
          alt="Logo"
        />
        <Space size={50} className="App-list">
          <Button type="link"
            style={{
              color: 'white',
              fontSize: 30,
              fontWeight: 'bold',
            }}
            onClick={() => navigate('/goodtea')}
          >
            找好茶
          </Button>
          <Button type="link"
            style={{
              color: 'white',
              fontSize: 30,
              fontWeight: 'bold'
            }}
            onClick={() => navigate('/milk')}
          >
            找拿鐵(鮮奶)
          </Button>
          <Button type="link"
            style={{
              color: 'white',
              fontSize: 30,
              fontWeight: 'bold'
            }}
            onClick={() => navigate('/milktea')}
          >
            找奶茶(奶精)
          </Button>
          <Button type="link"
            style={{
              color: 'white',
              fontSize: 30,
              fontWeight: 'bold'
            }}
            onClick={() => navigate('/fresh')}
          >
            找新鮮(無咖啡因)
          </Button>
        </Space>
      </div>

      <div className="bg">
        <img
          src={bg}
          alt="Background"
        />
      </div>
      
      <div className="introduction">
        <div className="intro-text">
          <h2>關於 50嵐</h2>
          <p>50嵐是臺灣一家手搖飲品連鎖店，
            1994年創始於臺南市，創辦人暨董事長為馬紹維。 目前在臺灣分為北區、中區、高雄區、臺南區等4大經營區域，
            各區域有各自的加盟總部，全臺灣約有6百家據點，並在海外有派生品牌，如中國大陸的一點點。</p>
        </div>
        <div className="intro-image">
          <img src={introImage} alt="Introduction" />
        </div>
      </div>
      <div className="App-footer">
        <div className="footer-text">
          圖片可能跟實際產品有出入，以實際產品為準
        </div>
      </div>
    </>
  );
}
