import React, { useState } from "react";
import './App.css';
import { Button, Space, Input, Form, Select } from "antd";
import { useNavigate } from 'react-router-dom';
import logo from './logo/logo.png';

const { Option } = Select;

const drinks = [
  { name: '茉莉綠茶', priceM: 25, priceL: 30 },
  { name: '阿薩姆紅茶',  priceM: 25, priceL: 30 },
  { name: '四季春青茶',  priceM: 25, priceL: 30 },
  { name: '黃金烏龍',  priceM: 25, priceL: 30 },
  { name: '1號',  priceM: 35, priceL: 45 },
  { name: '波霸綠',  priceM: 35, priceL: 45 },
  { name: '波霸紅',  priceM: 35, priceL: 45 },
  { name: '微檸檬紅',  priceM: 35, priceL: 45 },
  { name: '微檸檬青',  priceM: 35, priceL: 45 },
  { name: '檸檬綠',  priceM: 40, priceL: 55 },
  { name: '檸檬青', priceM: 40, priceL: 55 },
  { name: '梅の綠',  priceM: 40, priceL: 55 },
  { name: '8冰綠',   priceM: 40, priceL: 55 },
  { name: '多多綠',  priceM: 40, priceL: 55 },
  { name: '冰淇淋紅茶',  priceM: 40, priceL: 55 },
  { name: '柚子紅',  priceM: 40, priceL: 55 },
  { name: '旺來紅',  priceM: 40, priceL: 55 },
  { name: '鮮柚綠', priceM: 50, priceL: 65 },

  { name: '紅茶拿鐵',  priceM: 50, priceL: 65 },
  { name: '珍珠紅茶拿鐵',  priceM: 50, priceL: 65 },
  { name: '波霸紅茶拿鐵',  priceM: 50, priceL: 65 },
  { name: '燕麥紅茶拿鐵',  priceM: 50, priceL: 65 },
  { name: '椰果紅茶拿鐵',  priceM: 50, priceL: 65 },
  { name: '阿華田拿鐵', priceM: 55, priceL: 75 },
  { name: '冰淇淋紅茶拿鐵',  priceM: 55, priceL: 75 },

  { name: '奶茶/綠',  priceM: 40, priceL: 55 },
  { name: '烏龍奶',  priceM: 40, priceL: 55 },
  { name: '珍珠奶茶/綠', priceM: 40, priceL: 55 },
  { name: '波霸奶茶',  priceM: 40, priceL: 55 },
  { name: '椰果奶茶',  priceM: 40, priceL: 55 },
  { name: '燕麥奶茶',  priceM: 40, priceL: 55 },
  { name: '冰淇淋奶茶',  priceM: 50, priceL: 65 },
  { name: '紅茶瑪奇朵',  priceM: 40, priceL: 55 },
  { name: '阿華田',  priceM: 45, priceL: 60 },

  { name: '8冰茶',  priceM: 40, priceL: 55 },
  { name: '柚子茶',  priceM: 40, priceL: 55 },
  { name: '檸檬多多',  priceM: 55, priceL: 75 },
  { name: '檸檬梅汁',  priceM: 50, priceL: 65 },
  { name: '檸檬汁',  priceM: 50, priceL: 65 },
  { name: '葡萄柚多多',  priceM: 55, priceL: 75 },
  { name: '葡萄柚汁',  priceM: 50, priceL: 65 },
];

export default function Purchase() {
  const navigate = useNavigate();
  const [price, setPrice] = useState(0);
  const [total, setTotal] = useState(0);

  const handleDrinkChange = (value) => {    // 設置訂購表單
    const selectedDrink = drinks.find(drink => drink.name === value);
    if (selectedDrink) {
      setPrice(selectedDrink.priceM); 
    }
    calculateTotal(form.getFieldValue('quantity'), selectedDrink ? selectedDrink.priceM : 0);
  };

  const handleSizeChange = (value) => {     // 設置飲料尺寸
    const selectedDrink = drinks.find(drink => drink.name === form.getFieldValue('drink'));
    if (selectedDrink) {
      const selectedPrice = value === 'M' ? selectedDrink.priceM : selectedDrink.priceL;
      setPrice(selectedPrice);
      calculateTotal(form.getFieldValue('quantity'), selectedPrice);
    }
  };

  const handleQuantityChange = (e) => {         // 設置飲料數量
    const quantity = e.target.value;
    calculateTotal(quantity, price);
  };

  const calculateTotal = (quantity, price) => {     // 計算價格
    setTotal(quantity * price);
  };

  const onFinish = (values) => {
    console.log('Success:', values);
    alert(`訂購成功！總金額：${total} 元`);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const [form] = Form.useForm();

  return (
    <>
      <div className="App-logo content">
        <img src={logo} width={250} alt="Logo" />
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
          <Button type="link"
            style={{
              color: 'white',
              fontSize: 30,
              fontWeight: 'bold'
            }}
            onClick={() => navigate('/')}
          >
            回首頁
          </Button>
        </Space>
      </div>
      <div className="purchase-content">
        <h2>訂購頁面</h2>
        <Form
          form={form}
          name="purchase"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"        // 瀏覽器不會根據用戶之前輸入的數據來自動填充這些字段
          layout="vertical"         // 垂直排列
        >
          <Form.Item
            label="飲料名稱"
            name="drink"
            rules={[{ required: true, message: '請選擇飲料名稱' }]}
          >
            <Select onChange={handleDrinkChange}>
              {drinks.map((drink) => (
                <Option key={drink.name} value={drink.name}>
                  {drink.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            label="尺寸"
            name="size"
            rules={[{ required: true, message: '請選擇尺寸' }]}
          >
            <Select onChange={handleSizeChange}>
              <Option value="M">中杯</Option>
              <Option value="L">大杯</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="數量"
            name="quantity"
            rules={[{ required: true, message: '請輸入數量' }]}
          >
            <Input type="number" onChange={handleQuantityChange} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              提交訂單
            </Button>
          </Form.Item>
        </Form>
        <div>
          <h3>總金額: {total || 0} 元</h3>
        </div>
      </div>
      <div className="App-footer">
        <div className="footer-text">
          感謝您訂購50嵐~ 歡迎下次再度光臨
        </div>
      </div>
    </>
  );
}
