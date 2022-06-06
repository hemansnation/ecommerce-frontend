import React, { useState } from 'react';
import { Menu } from 'antd';
import { 
    AppstoreOutlined,
    SettingOutlined,
    LoginOutlined,
    UserAddOutlined
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { SubMenu, Item } = Menu;

const Header = () => {

    const [current, setCurrent] = useState('home')

    const handleClick = (e) => {
        console.log(e.key);
        
        setCurrent(e.key);
    }

    return (

        <Menu onClick={handleClick} mode="horizontal" defaultSelectedKeys={[current]}>
          
          <Item key="home" icon={<AppstoreOutlined />}>
              <Link to="/">Home</Link>
          </Item>

          <Item key="register" icon={<UserAddOutlined />} className="float-right">
            <Link to="/register">Register</Link>
          </Item>
          
          <Item key="login" icon={<LoginOutlined />} className="float-right">
            <Link to="/login">Login</Link>
          </Item>
          

          <SubMenu icon={<SettingOutlined />} title='Username'>
            <Item key="settings:1">Option 1</Item>
            <Item key="settings:2">Option 2</Item>
          </SubMenu>
        </Menu>
      )
}

export default Header;