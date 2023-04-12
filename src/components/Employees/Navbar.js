import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const Navbar = () => {
  return (
    <Menu inverted style={{backgroundColor: "teal"}}>
      <Menu.Item>
        <Link to="/employees">Список сотрудников</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/employees/form">Новый сотрудник</Link>
      </Menu.Item>
      <Menu.Item position="right">
        <Link to="/">Авторизация</Link>
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;


