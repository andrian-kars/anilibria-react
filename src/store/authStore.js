import { makeAutoObservable } from 'mobx';
import { postLogin, postRegistration, postLogout, checkAuthHelper } from 'src/api/node/authService';
import { STORAGE_TOKEN } from 'src/constants';

class AuthStore {
  user = null;
  isAuth = false;

  constructor() {
    makeAutoObservable(this);
  }

  setAuth(bool) {
    this.isAuth = bool;
  }

  setUser(user) {
    this.user = user;
  }

  async registration(email, password) {
    try {
      const response = await postRegistration(email, password);
      localStorage.setItem(STORAGE_TOKEN, response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.user);
    } catch (error) {
      console.log(error.response?.data.message);
    }
  }

  async login(email, password) {
    try {
      const response = await postLogin(email, password);
      localStorage.setItem(STORAGE_TOKEN, response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.user);
    } catch (error) {
      console.log(error.response?.data.message);
    }
  }

  async logout() {
    try {
      await postLogout();
      localStorage.removeItem(STORAGE_TOKEN);
      this.setAuth(false);
      this.setUser(null);
    } catch (error) {
      console.log(error.response?.data.message);
    }
  }

  async checkAuth() {
    try {
      const data = await checkAuthHelper();
      this.setAuth(true);
      this.setUser(data.user);
    } catch (error) {
      console.log(error.response?.data.message);
    }
  }
}

export default new AuthStore();
