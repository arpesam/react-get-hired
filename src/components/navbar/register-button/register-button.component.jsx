import React from 'react';
import { Dropdown, Button, Menu, message } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';


const RegisterButton = () => {
  function handleMenuClick(e) {
    message.info('Click on menu item.');
    console.log('click', e);
  }

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">
        <UserOutlined />
        1st menu item
      </Menu.Item>
      <Menu.Item key="2">
        <UserOutlined />
        2nd menu item
      </Menu.Item>
      <Menu.Item key="3">
        <UserOutlined />
        3rd item
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu}>
      <Button type="primary">
        Button <DownOutlined />
      </Button>
    </Dropdown>
  )
}

export default RegisterButton;
