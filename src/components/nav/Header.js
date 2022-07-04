import React, { useState } from 'react';
import { Menu } from 'antd';
import { 
    AppstoreOutlined,
    SettingOutlined,
    LoginOutlined,
    UserAddOutlined,
    LogoutOutlined
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

import { auth, signOut } from '../../firebaseAuth'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";


const { SubMenu, Item } = Menu;

const Header = () => {

    const [current, setCurrent] = useState('home')

    const dispatch = useDispatch();

    const { user } = useSelector((state) => ({ ...state}))
    

    const nav = new useNavigate();

    const handleClick = (e) => {
        console.log(e.key);
        
        setCurrent(e.key);
    }

    const logout = () => {
      signOut(auth);

      dispatch({
        type: "LOGOUT",
        payload: null
      });

      nav('/login');
    }

    return (

        <Menu onClick={handleClick} mode="horizontal" selectedKeys={[current]}>
          
          <Item key="home" icon={<AppstoreOutlined />}>
              <Link to="/">Home</Link>
          </Item>

          {!user && (
            <Item key="register" icon={<UserAddOutlined />} style={{marginLeft: '30rem'}}>
              <Link to="/register">Register</Link>
            </Item>
          )}
          
          {!user && (
            <Item key="login" icon={<LoginOutlined />} style={{marginLeft: 'auto'}}>
              <Link to="/login">Login</Link>
            </Item>
          )}
          

          {user && (
            <SubMenu 
              icon={<SettingOutlined />} 
              title={user.email && user.email.split('@')[0]}
              style={{marginLeft: 'auto'}}
            >
              <Item key="settings:1">Option 1</Item>
              <Item key="settings:2">Option 2</Item>
              <Item icon={<LogoutOutlined />} onClick={logout}>
                Logout
              </Item>
            </SubMenu>
          )}
        </Menu>
      )
}

export default Header;