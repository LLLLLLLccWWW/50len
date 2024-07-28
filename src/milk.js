import React from "react";
import './App.css';
import logo from './logo/logo.png';
import bg from './logo/bg.jpg';
import { Button, Space } from "antd";
import { useNavigate } from 'react-router-dom';
import Latte from './milk/紅茶拿鐵.jpg';
import AHuaTainLatte from './milk/阿華田拿鐵.jpg';
import IcecreamBlackTeaLatte from './milktea/冰淇淋奶茶.jpg';
import './beverage.css';

const drinks = [
  { name: '紅茶拿鐵(珍珠/波霸/燕麥/椰果)', image: Latte, priceM: 50, priceL: 65 },
  { name: '阿華田拿鐵', image: AHuaTainLatte, priceM: 55, priceL: 75 },
  { name: '冰淇淋紅茶拿鐵', image: IcecreamBlackTeaLatte, priceM: 55, priceL: 75 }
];

const DrinkItem = ({ name, image, priceM, priceL }) => (
  <div className="drink-item">
    <img src={image} alt={name} className="drink-image" />
    <div className="drink-info">
      <div>{name}</div>
      <div>M: {priceM} L: {priceL}</div>
    </div>
  </div>
);

export default function Milk() {
  const navigate = useNavigate();
  return (
    <>
      <div className="App-logo content">
        <img src={logo} width={250} alt="Logo" />
        <Space size={50} className="App-list">
          <Button type="link" style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }} onClick={() => navigate('/goodtea')}>
            找好茶
          </Button>
          <Button type="link" style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }} onClick={() => navigate('/milk')}>
            找拿鐵(鮮奶)
          </Button>
          <Button type="link" style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }} onClick={() => navigate('/milktea')}>
            找奶茶(奶精)
          </Button>
          <Button type="link" style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }} onClick={() => navigate('/fresh')}>
            找新鮮(無咖啡因)
          </Button>
          <Button type="link" style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }} onClick={() => navigate('/purchase')}>
            我要訂購
          </Button>  
          <Button type="link" style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }} onClick={() => navigate('/')}>
            回首頁
          </Button>       
        </Space>
      </div>
      <div className="menu-container">
        {drinks.map((drink, index) => (
          <DrinkItem key={index} {...drink} />
        ))}
      </div>
    </>
  );
}
