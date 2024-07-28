import React from "react";
import './App.css';
import './beverage.css';
import logo from './logo/logo.png';
import bg from './logo/bg.jpg';
import greentea from './goodtea/茉莉綠茶.jpg';
import blacktea from './goodtea/阿薩姆紅茶.jpg';
import fspring from './goodtea/四季春清茶.jpg';
import oolong from './goodtea/黃金烏龍.jpg';
import one from './goodtea/1號.jpg';
import Boba from './goodtea/波霸綠.jpg';
import littleLemonBlackTea from './goodtea/微檸檬紅.jpg';
import littleLemonGreenTea from './goodtea/微檸檬青.jpg';
import LemonGreenTea from './goodtea/檸檬綠.jpg';
import Lemon from './goodtea/檸檬青.jpg';
import plumGreenTea from './goodtea/梅の綠.jpg';
import eightIceGreenTea from './goodtea/8冰綠.jpg';
import DuoduoGreenTea from './goodtea/多多綠.jpg';
import IcecreamBlackTea from './goodtea/冰淇淋紅茶.jpg';
import GrapefruitBlackTea from './goodtea/柚子紅.jpg';
import PipeappleBlackTea from './goodtea/旺來紅.jpg';
import GrapefruitGreenTea from './goodtea/柚綠綠.jpg';
import { Button, Space } from "antd";
import { useNavigate } from 'react-router-dom';

const drinks = [
  { name: '茉莉綠茶', image: greentea, priceM: 25, priceL: 30 },
  { name: '阿薩姆紅茶', image: blacktea, priceM: 25, priceL: 30 },
  { name: '四季春青茶', image: fspring, priceM: 25, priceL: 30 },
  { name: '黃金烏龍', image: oolong, priceM: 25, priceL: 30 },
  { name: '1號', image: one, priceM: 35, priceL: 45 },
  { name: '波霸綠/紅', image: Boba, priceM: 35, priceL: 45 },
  { name: '微檸檬紅', image: littleLemonBlackTea, priceM: 35, priceL: 45 },
  { name: '微檸檬青', image: littleLemonGreenTea, priceM: 35, priceL: 45 },
  { name: '檸檬綠', image: LemonGreenTea, priceM: 40, priceL: 55 },
  { name: '檸檬青', image: Lemon, priceM: 40, priceL: 55 },
  { name: '梅の綠', image: plumGreenTea, priceM: 40, priceL: 55 },
  { name: '8冰綠', image: eightIceGreenTea, priceM: 40, priceL: 55 },
  { name: '多多綠', image: DuoduoGreenTea, priceM: 40, priceL: 55 },
  { name: '冰淇淋紅茶', image: IcecreamBlackTea, priceM: 40, priceL: 55 },
  { name: '柚子紅', image: GrapefruitBlackTea, priceM: 40, priceL: 55 },
  { name: '旺來紅', image: PipeappleBlackTea, priceM: 40, priceL: 55 },
  { name: '鮮柚綠(季節限定4~8月，10~1月)', image: GrapefruitGreenTea, priceM: 50, priceL: 65 },
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

export default function Goodtea() {
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
