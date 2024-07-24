export function passwordValidator(inputtxt) {
  let strongPassword = new RegExp(
    '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})',
  );
  if (!strongPassword.test(inputtxt)) {
    return false;
  }
  return true;
}

// this function checks the value of the password
// it checks for lowercase, uppercase, numbers, and special characters
export function checkPassword(password) {
  // Check for at least 1 lowercase letter
  if (!/[a-z]/.test(password)) {
    return {
      isValid: false,
      cause: 'Password must contain at least 1 lowercase letter.',
    };
  }

  // Check for at least 1 uppercase letter
  if (!/[A-Z]/.test(password)) {
    return {
      isValid: false,
      cause: 'Password must contain at least 1 uppercase letter.',
    };
  }

  // Check for at least 1 number
  if (!/\d/.test(password)) {
    return {
      isValid: false,
      cause: 'Password must contain at least 1 number.',
    };
  }

  // Check for at least 1 special character
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    const specialCharacters = '!@#$%^&*(),.?":{}|<>';
    const errorMessage = `Your password must contain at least one special character. Special characters include: ${specialCharacters}`;
    return {
      isValid: false,
      cause: errorMessage,
    };
  }

  // All criteria passed
  return {
    isValid: true,
  };
}

// this function checks the value of the password
// it checks for lowercase, uppercase, numbers, BUT NOT special characters
export function passwordValidatorWithoutSpecialCharacters(inputtxt) {
  let strongPassword = new RegExp(/^[A-Za-z0-9 ]+$/);
  if (!strongPassword.test(inputtxt)) {
    return false;
  }
  return true;
}

export const customValidator = (text, lengthy, min) => {
  if (text.length < min || text.length > lengthy) {
    return false;
  }
  return true;
};

// this function checks for a valid email address
// any value been passed that does not have the '@' in it is returned as an invalid email address
export const emailValidator = text => {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  if (!reg.test(text)) {
    return false;
  }
  return true;
};

// this function checks and validates the inputs for the phone numbers
// it checks the length of the value been inputed and runs a check, throws error if the length of the text is not up to 10 digits long
export const phoneValidator = text => {
  let regName = /^[0-9\+]+$/;
  let boolv = true;
  if (!regName.test(text)) {
    boolv = false;
  } else if (text?.length < 10) {
    boolv = false;
  } else {
    boolv = true;
  }
  return boolv;
};

export const checkPasswordMatch = (newPassword, confirmPassword) => {
  if (newPassword === confirmPassword) {
    // Passwords match
    return true;
  } else {
    // Passwords do not match
    return false;
  }
};
