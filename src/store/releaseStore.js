import { makeAutoObservable } from 'mobx';
import { STORAGE_RECENT_ANIMES, STORAGE_FAVOURITE_ANIMES } from 'src/constants';
import { getLocalStorageItem, setLocalStorageItem } from 'src/helpers/localStorageHelper';

export class ReleaseStore {
  recentAnimes = null;
  favouriteAnimes = null;

  constructor(authStore) {
    makeAutoObservable(this);
    this.authStore = authStore;
  }

  setRecentAnimes = (animes) => {
    this.recentAnimes = animes;
  };

  setFavouriteAnimes = (animes) => {
    this.favouriteAnimes = animes;
  };

  getRecentAnimes = () => {
    if (this.authStore.isAuth) {
      this.setRecentAnimes(null);
      return;
    }
    const storageAnimes = getLocalStorageItem(STORAGE_RECENT_ANIMES);
    this.setRecentAnimes(storageAnimes);
  };

  getFavouriteAnimes = () => {
    if (this.authStore.isAuth) {
      this.setFavouriteAnimes(null);
      return;
    }
    const storageAnimes = getLocalStorageItem(STORAGE_FAVOURITE_ANIMES);
    this.setFavouriteAnimes(storageAnimes);
  };

  addRecentAnime = (anime) => {
    const newOrderAnimes = [
      anime,
      ...(this.recentAnimes?.filter((el) => el.titleName !== anime.titleName) || []),
    ];

    if (this.authStore.isAuth) {
      this.setRecentAnimes(newOrderAnimes);
      return;
    }
    setLocalStorageItem(STORAGE_RECENT_ANIMES, newOrderAnimes);
    this.setRecentAnimes(newOrderAnimes);
  };

  addFavouriteAnime = (anime) => {
    const newOrderAnimes = [
      anime,
      ...(this.recentAnimes?.filter((el) => el.titleName !== anime.titleName) || []),
    ];

    if (this.authStore.isAuth) {
      this.setFavouriteAnimes(newOrderAnimes);
      return;
    }
    setLocalStorageItem(STORAGE_FAVOURITE_ANIMES, newOrderAnimes);
    this.setFavouriteAnimes(newOrderAnimes);
  };

  removeRecentAnime = (titleCode) => {
    const newOrderAnimes = this.recentAnimes?.filter((el) => el.titleCode !== titleCode);

    if (this.authStore.isAuth) {
      this.setRecentAnimes(newOrderAnimes);
      return;
    }
    setLocalStorageItem(STORAGE_RECENT_ANIMES, newOrderAnimes);
    this.setRecentAnimes(newOrderAnimes);
  };

  removeFavouriteAnime = (titleCode) => {
    const newOrderAnimes = this.recentAnimes?.filter((el) => el.titleCode !== titleCode);

    if (this.authStore.isAuth) {
      this.setFavouriteAnimes(newOrderAnimes);
      return;
    }
    setLocalStorageItem(STORAGE_FAVOURITE_ANIMES, newOrderAnimes);
    this.setFavouriteAnimes(newOrderAnimes);
  };

  removeRecentAnimes = () => {
    if (this.authStore.isAuth) {
      this.setRecentAnimes(null);
      return;
    }
    setLocalStorageItem(STORAGE_RECENT_ANIMES, null);
    this.setRecentAnimes(null);
  };

  removeFavouriteAnimes = () => {
    if (this.authStore.isAuth) {
      this.setFavouriteAnimes(null);
      return;
    }
    setLocalStorageItem(STORAGE_FAVOURITE_ANIMES, null);
    this.setFavouriteAnimes(null);
  };
}
