export const getLocalStorageItem = (key) => {
  let value = null;

  if (typeof window !== 'undefined') {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      value = item ? JSON.parse(item) : null;
    } catch (error) {
      console.log(error);
    }
  }

  return value;
};

export const setLocalStorageItem = (key, value) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};
