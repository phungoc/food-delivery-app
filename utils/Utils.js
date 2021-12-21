const isValidEmail = value => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(value).toLowerCase());
};

const validateEmail = (value, setEmailError) => {
  if (value === '') {
    setEmailError('');
  } else if (isValidEmail(value)) {
    setEmailError('');
  } else {
    setEmailError('Invalid Email');
  }
};

const validatePassword = (value, setPasswordError) => {
  if (value === '') {
    setPasswordError('');
  } else if (value.length < 8) {
    setPasswordError('Password must be at least 8 characters');
  } else {
    setPasswordError('');
  }
};

const validateUserName = (value, setUserNameError) => {
  if (value === '') {
    setUserNameError('');
  } else if (value.length < 2) {
    setUserNameError('Username must be at least 2 characters');
  } else {
    setUserNameError('');
  }
};

const utils = {
  isValidEmail,
  validateEmail,
  validatePassword,
  validateUserName,
};

export default utils;
