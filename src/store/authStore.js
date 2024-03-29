import { makeAutoObservable } from 'mobx';
import { postLogin, postRegistration, postLogout, checkAuthHelper } from 'src/api/node/authService';
import { STORAGE_TOKEN } from 'src/constants';
import { ReleaseStore } from './releaseStore';

class AuthStore {
  user = null;
  isAuth = false;
  isLoading = true;
  errorMessage = null;
  // stores
  releaseStore = new ReleaseStore(this);

  constructor() {
    makeAutoObservable(this);
  }

  setAuth = (bool) => {
    this.isAuth = bool;
  };

  setUser = (user) => {
    this.user = user;
  };

  setIsLoading = (bool) => {
    this.isLoading = bool;
  };

  setErrorMessage = (err) => {
    this.errorMessage = err;
  };

  registration = async (email, password) => {
    try {
      this.setIsLoading(true);
      const response = await postRegistration(email, password);
      localStorage.setItem(STORAGE_TOKEN, response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.user);
      this.setErrorMessage(null);
    } catch (error) {
      this.setErrorMessage(error.response?.data.message);
    } finally {
      this.setIsLoading(false);
    }
  };

  login = async (email, password) => {
    try {
      this.setIsLoading(true);
      const response = await postLogin(email, password);
      localStorage.setItem(STORAGE_TOKEN, response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.user);
      this.setErrorMessage(null);
    } catch (error) {
      this.setErrorMessage(error.response?.data.message);
    } finally {
      this.setIsLoading(false);
    }
  };

  logout = async () => {
    try {
      this.setIsLoading(true);
      await postLogout();
      localStorage.removeItem(STORAGE_TOKEN);
      this.setAuth(false);
      this.setUser(null);
      this.setErrorMessage(null);
    } catch (error) {
      this.setErrorMessage(error.response?.data.message);
    } finally {
      this.setIsLoading(false);
    }
  };

  checkAuth = async () => {
    try {
      this.setIsLoading(true);
      const data = await checkAuthHelper();
      this.setAuth(true);
      this.setUser(data.user);
      this.setErrorMessage(null);
    } catch (error) {
      this.setErrorMessage(error.response?.data.message);
    } finally {
      this.setIsLoading(false);
    }
  };
}

export default new AuthStore();
