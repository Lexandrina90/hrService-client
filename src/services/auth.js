import axios from 'axios';

const API_URL = 'http://localhost:3000/api/auth/'; 

const register = (username, email, password) => {
  return axios.post(API_URL + 'signup/', {
    username,
    email,
    password
  });
};

const login = (username, password) => {
  return axios
    .post(API_URL + 'login/', {
      username,
      password
    })
    .then((response) => {
      if (response.data.access) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem('user');
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};

export default {
  register,
  login,
  logout,
  getCurrentUser
};

// register принимает имя пользователя, адрес электронной почты и пароль
// login принимает имя пользователя и пароль
// logout удаляет данные пользователя из локального хранилища браузера.
// getCurrentUser возвращает данные текущего пользователя, сохраненные в локальном хранилище браузера. Если таких данных нет, возвращает null.

