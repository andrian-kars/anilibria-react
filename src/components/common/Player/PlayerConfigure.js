export const PlayerConfigure = (config) => {
  CreatePlayer(config);
  return null;
};

function CreatePlayer(config) {
  if (window.Playerjs) {
    new window.Playerjs(config);
  } else {
    if (!window.pjscnfgs) {
      window.pjscnfgs = {};
    }
    window.pjscnfgs[config.id] = config;
  }
}

window.PlayerjsAsync = function () {
  if (window.pjscnfgs) {
    // eslint-disable-next-line
    Object.entries(window.pjscnfgs).map(([_, value]) => {
      return new window.Playerjs(value);
    });
  }
  window.pjscnfgs = {};
};
