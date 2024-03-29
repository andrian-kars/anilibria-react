import PropTypes from 'prop-types';

export const EmailIcon = () => (
  <svg viewBox="0 0 32 32">
    <path d="M28,13a1,1,0,0,0-1,1v8a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1V14a1,1,0,0,0-2,0v8a3,3,0,0,0,.88,2.12A3,3,0,0,0,6,25H26a3,3,0,0,0,2.12-.88A3,3,0,0,0,29,22V14A1,1,0,0,0,28,13Z" />
    <path d="M15.4,18.8a1,1,0,0,0,1.2,0L28.41,9.94a1,1,0,0,0,.3-1.23,3.06,3.06,0,0,0-.59-.83A3,3,0,0,0,26,7H6a3,3,0,0,0-2.12.88,3.06,3.06,0,0,0-.59.83,1,1,0,0,0,.3,1.23ZM6,9H26a.9.9,0,0,1,.28,0L16,16.75,5.72,9A.9.9,0,0,1,6,9Z" />
  </svg>
);

export const ShowHidePasswordIcon = ({ passwordShown, setPasswordShown }) => {
  const showHidePasswordHandler = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <>
      {passwordShown ? (
        <svg viewBox="0 0 24 24" onClick={showHidePasswordHandler}>
          <path d="M5.977,17.489c-0.121,0.248-0.019,0.547,0.229,0.669C8.027,19.048,9.977,19.5,12,19.5c4.901,0,9.476-2.782,11.938-7.259   c0.083-0.15,0.083-0.332,0-0.481c-0.677-1.231-1.52-2.35-2.507-3.326c-0.196-0.194-0.513-0.193-0.707,0.004   c-0.194,0.196-0.192,0.513,0.004,0.707c0.854,0.844,1.592,1.804,2.198,2.855C20.61,16.017,16.448,18.5,12,18.5   c-1.87,0-3.671-0.417-5.354-1.24C6.398,17.139,6.099,17.242,5.977,17.489z" />
          <path d="M12,16c2.129,0,3.884-1.664,3.995-3.789c0.014-0.276-0.198-0.511-0.474-0.525c-0.282-0.025-0.511,0.197-0.525,0.474   C14.913,13.752,13.597,15,12,15c-0.43,0-0.844-0.089-1.233-0.264c-0.251-0.113-0.548-0.001-0.661,0.25   c-0.114,0.251-0.002,0.547,0.25,0.661C10.874,15.881,11.427,16,12,16z" />
          <path d="M23.24,4.573l-3.739,2.276C17.267,5.316,14.683,4.5,12,4.5c-4.901,0-9.476,2.782-11.938,7.259   c-0.083,0.15-0.083,0.332,0,0.481c0.907,1.649,2.146,3.097,3.584,4.259L0.24,18.573c-0.236,0.144-0.311,0.451-0.167,0.687   C0.167,19.415,0.332,19.5,0.5,19.5c0.088,0,0.178-0.023,0.259-0.073l8.509-5.179c0,0,0.001,0,0.001,0   c0.001,0,0.001-0.001,0.001-0.001L23.76,5.427c0.236-0.144,0.311-0.451,0.167-0.687C23.784,4.505,23.477,4.43,23.24,4.573z    M9.236,13.097C9.097,12.747,9,12.381,9,12c0-1.654,1.346-3,3-3c0.883,0,1.683,0.394,2.248,1.046L9.236,13.097z M15.13,9.51   C14.375,8.557,13.238,8,12,8c-2.206,0-4,1.794-4,4c0,0.566,0.122,1.123,0.352,1.635L4.55,15.949   C3.162,14.892,1.964,13.543,1.074,12C3.39,7.983,7.552,5.5,12,5.5c2.33,0,4.581,0.666,6.56,1.922L15.13,9.51z" />
        </svg>
      ) : (
        <svg viewBox="0 0 64 64" onClick={showHidePasswordHandler}>
          <path
            d="M32,15C11.169,15,0.769,30.242,0.336,30.891c-0.448,0.672-0.448,1.547,0,2.219C0.769,33.758,11.169,49,32,49
		s31.231-15.242,31.664-15.891c0.448-0.672,0.448-1.547,0-2.219C63.231,30.242,52.831,15,32,15z M32,45
		C16.493,45,7.234,35.322,4.512,31.996C7.225,28.663,16.436,19,32,19c15.507,0,24.766,9.678,27.488,13.004
		C56.775,35.337,47.564,45,32,45z"
          />
          <path
            d="M32,23c-4.963,0-9,4.038-9,9s4.037,9,9,9s9-4.038,9-9S36.963,23,32,23z M32,37c-2.757,0-5-2.243-5-5s2.243-5,5-5
		s5,2.243,5,5S34.757,37,32,37z"
          />
        </svg>
      )}
    </>
  );
};

ShowHidePasswordIcon.propTypes = {
  passwordShown: PropTypes.bool.isRequired,
  setPasswordShown: PropTypes.func.isRequired,
};
