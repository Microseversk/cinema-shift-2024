type ValidateFn<Type> = (value: Type) => boolean | string;

export const phoneIsValid: ValidateFn<string> = (phone: string) => {
  if (!phone) {
    return 'Поле является обязательным';
  }
  if (!/^[0-9]+$/.test(phone)) {
    return 'Некорректный номер телефона';
  }

  return true;
};

export const otpIsValid: ValidateFn<number> = (otp: number) => {
  if (!otp) {
    return 'Поле является обязательным';
  }

  if (!/^[0-9]+$/.test(otp.toString())) {
    return 'Некорректный код';
  }

  if (otp.toString().length !== 6) {
    return 'Код должен содержать 6 цифр';
  }

  return true;
};

export const firstNameIsValid: ValidateFn<string> = (firstName: string) => {
  if (!firstName) {
    return 'Поле является обязательным';
  }

  if (/[!@#$%^&*{}()]/.test(firstName)) {
    return 'Недопустимые символы в имени';
  }

  return true;
};

export const lastNameIsValid: ValidateFn<string> = (lastName: string) => {
  if (!lastName) {
    return 'Поле является обязательным';
  }

  if (lastName.length > 60) {
    return 'Длина фамилии не должна превышать 60 символов';
  }

  if (/[!@#$%^&*{}()]/.test(lastName)) {
    return 'Недопустимые символы в фамилии';
  }
  return true;
};

export const middleNameIsValid: ValidateFn<string> = (middleName: string) => {
  const cyrillicRegex = /^[А-Яа-яЁё\s'-]*$/;
  const latinRegex = /^[A-Za-z\s'-]*$/;
  if (middleName.length > 60) {
    return 'Длина фамилии не должна превышать 60 символов';
  }
  if (!cyrillicRegex.test(middleName) && !latinRegex.test(middleName)) {
    return 'Недопустимое сочетание алфавитов';
  }

  return true;
};

export const emailIsValid: ValidateFn<string> = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const hostnameRegex = /^[A-Za-z0-9]+(-[A-Za-z0-9]+)*\.[A-Za-z]{2,}$/;
  if (!email) {
    return 'Поле является обязательным';
  }

  if (!emailRegex.test(email)) {
    return 'Некорректный формат email';
  }

  const domainPart = email.split('@')[1];
  if (domainPart && !hostnameRegex.test(domainPart)) {
    return 'Некорректный формат hostname';
  }

  if (email.startsWith('.') || email.endsWith('.')) {
    return 'Некорректный формат email';
  }

  return true;
};

export const cityIsValid: ValidateFn<string> = (city: string) => {
  const allowedChars = /^[A-Za-zА-Яа-яЁё0-9 ,.-]+$/;
  const startEndSpecialChars = /^[-.,\s]|[-.,\s]$/;
  const mixedAlphabets = /[A-Za-z].*[А-Яа-яЁё]|[А-Яа-яЁё].*[A-Za-z]/;

  if (!city) {
    return 'Поле является обязательным';
  }

  if (city.length > 60) {
    return 'Длина названия города должна быть не более 60 символов';
  }

  if (!allowedChars.test(city)) {
    return 'Недопустимые символы в названии города';
  }

  if (startEndSpecialChars.test(city)) {
    return 'Недопустимые символы в начале или конце названия города';
  }

  if (mixedAlphabets.test(city)) {
    return 'Недопустимо смешение алфавитов в названии города';
  }

  return true;
};

export const cardNumberIsValid: ValidateFn<string> = (cardNumber: string) => {
  if (!cardNumber) {
    return 'Поле является обязательным';
  }

  if (cardNumber.length !== 8) {
    return 'Код должен содержать 8 цифр';
  }

  return true;
};

export const cardDateIsValid: ValidateFn<string> = (cardDate: string) => {
  if (!cardDate) {
    return 'Поле является обязательным';
  }

  if (cardDate.length !== 4) {
    return 'Дата должен содержать 4 цифры';
  }

  return true;
};

export const cardCVVIsValid: ValidateFn<string> = (cvv: string) => {
  if (!cvv) {
    return 'Поле является обязательным';
  }

  if (cvv.length !== 3) {
    return 'Код должен содержать 3 цифры';
  }

  return true;
};
