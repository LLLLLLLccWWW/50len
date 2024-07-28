import React from "react";
import './App.css';
import logo from './logo/logo.png';
import bg from './logo/bg.jpg';
import { Button, Space } from "antd";
import { useNavigate } from 'react-router-dom';
import milktea from './milktea/奶茶.jpg';
import oolongMilkTea from './milktea/烏龍奶.jpg';
import pMilkTea from './milktea/珍珠奶茶.jpg';
import bMilkTea from './milktea/波霸奶茶.jpg';
import yMilkTea from './milktea/椰果奶茶.jpg';
import yanMilkTea from './milktea/燕麥奶茶.jpg';
import iMilkTea from './milktea/冰淇淋奶茶.jpg';
import BlackTeaMacchiato from './milktea/紅茶瑪奇朵.jpg';
import AHuaTain from './milktea/阿華田.jpg';
import './beverage.css';

const drinks = [
    { name: '奶茶/綠', image: milktea, priceM: 40, priceL: 55 },
    { name: '烏龍奶', image: oolongMilkTea, priceM: 40, priceL: 55 },
    { name: '珍珠奶茶/綠', image: pMilkTea, priceM: 40, priceL: 55 },
    { name: '波霸奶茶', image: bMilkTea, priceM: 40, priceL: 55 },
    { name: '椰果奶茶', image: yMilkTea, priceM: 40, priceL: 55 },
    { name: '燕麥奶茶', image: yanMilkTea, priceM: 40, priceL: 55 },
    { name: '冰淇淋奶茶', image: iMilkTea, priceM: 50, priceL: 65 },
    { name: '紅茶瑪奇朵', image: BlackTeaMacchiato, priceM: 40, priceL: 55 },
    { name: '阿華田', image: AHuaTain, priceM: 45, priceL: 60 },
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
export default function Milktea(){
    const navigate = useNavigate();
    return(
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
    )
}