import React, { useState } from 'react';
import { Menu } from 'antd';
import { 
    MailOutlined,
    AppstoreOutlined,
    SettingOutlined 
} from '@ant-design/icons';

const { SubMenu, Item } = Menu;

const Header = () => {

    const [current, setCurrent] = useState('')

    const handleClick = (e) => {
        console.log(e.key);
        
        setCurrent(e.key);
    }

    return (

        <Menu onClick={handleClick} mode="horizontal" defaultSelectedKeys={[current]}>
          
          <Item key="home" icon={<MailOutlined />}>
              Home
          </Item>
          
          <Item key="login" icon={<AppstoreOutlined />}>
              Login
          </Item>
          
          <Item key="register" icon={<AppstoreOutlined />}>
              Register
          </Item>

          <SubMenu icon={<SettingOutlined />} title='settings'>
            <Item key="settings:1">Option 1</Item>
            <Item key="settings:2">Option 2</Item>
          </SubMenu>
        </Menu>
      )
}

export default Header;