import { useState } from 'react';
import styles from './styles.module.scss';

import { Button, Input, Typography } from '@src/shared';

export const LoginPage = () => {
  const [writingOtp, setWritingOtp] = useState<string | undefined>();

  return (
    <div className={styles.wrapper}>
      <Typography tag="h2" variant="h2">
        Авторизация
      </Typography>
      <Typography variant="p_16_regular">
        Введите номер телефона для входа в личный кабинет
      </Typography>
      <form id="login_form" className={styles.form}>
        <Input placeholder="Телефон" />
        {writingOtp && <Input placeholder="Проверочный код" />}
      </form>
      <Button form="login_form" onClick={() => setWritingOtp('1234')}>
        {writingOtp ? 'Войти' : 'Продолжить'}
      </Button>
      {writingOtp && (
        <Typography variant="p_14_regular" color="tertiary">
          Отправить код повторно через {'60'} сек
        </Typography>
      )}
    </div>
  );
};
