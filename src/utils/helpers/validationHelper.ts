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
