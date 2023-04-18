import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import authService from '../../services/auth';

  const Navbar = () => {
    const handleLogout = () => {
      authService.logout();
    }
    return (
      <Menu inverted style={{ backgroundColor: "teal" }}>
        <Menu.Item>
          <Link to="/employees">Список сотрудников</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/employees/form">Новый сотрудник</Link>
        </Menu.Item>
        <Menu.Item position="right">
          {authService.getCurrentUser() ? (
            <Link to="/" onClick={handleLogout}>Выход</Link>
          ) : (
            <Link to="/auth">Авторизация</Link>
          )}
        </Menu.Item>
      </Menu>
    );
  };


  export default Navbar;


