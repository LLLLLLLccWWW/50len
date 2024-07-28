import React from "react";
import './App.css';
import logo from './logo/logo.png';
import bg from './logo/bg.jpg';
import { Button, Space } from "antd";
import { useNavigate } from 'react-router-dom';
import './beverage.css';
import eightIceTea from './fresh/8冰茶.jpg';
import GrapefruitTea from './fresh/柚子茶.jpg';
import LemonDuoduo from './fresh/檸檬多多.jpg';
import LemonPlum from './fresh/檸檬梅汁.jpg';
import Lemon from './fresh/檸檬汁.jpg';
import GrapefruitDuoduo from './fresh/葡萄柚多多.jpg';
import Grapefruit from './fresh/葡萄柚汁.jpg';

const drinks = [
    { name: '8冰茶', image: eightIceTea, priceM: 40, priceL: 55 },
    { name: '柚子茶', image: GrapefruitTea, priceM: 40, priceL: 55 },
    { name: '檸檬多多', image: LemonDuoduo, priceM: 55, priceL: 75 },
    { name: '檸檬梅汁', image: LemonPlum, priceM: 50, priceL: 65 },
    { name: '檸檬汁', image: Lemon, priceM: 50, priceL: 65 },
    { name: '葡萄柚多多', image: GrapefruitDuoduo, priceM: 55, priceL: 75 },
    { name: '葡萄柚汁', image: Grapefruit, priceM: 50, priceL: 65 },
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

export default function Fresh(){
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