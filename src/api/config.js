export const anilibriaApiInstance = (path, params = null, responseModifyCallback = null) => {
  let paramsToSend = '';

  if (params) {
    const configurePrams = (params) => {
      // Sample implementation of query string building
      let result = '';
      Object.keys(params).forEach((key) => {
        result += `${key}=${encodeURIComponent(params[key])}&`;
      });
      return result.substr(0, result.length - 1);
    };

    paramsToSend = configurePrams(params);
  }

  return fetch(`https://api.anilibria.tv/v2/${path}?` + paramsToSend)
    .then((res) => res.json())
    .then((data) => (responseModifyCallback ? responseModifyCallback(data) : data));
};
