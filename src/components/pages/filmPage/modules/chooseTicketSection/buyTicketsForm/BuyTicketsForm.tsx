import { Button, Input, Typography } from '@src/shared';

import styles from './styles.module.scss';

export const BuyTicketsForm = () => {
  return (
    <form className={styles.form}>
      <Typography tag="h2" variant="h2">
        Введите ваши данные
      </Typography>
      <Input label="Имя*" />
      <Input label="Фамилия*" />
      <Input label="Отчество" />
      <Input label="Телефон*" />
      <Input label="Email" />
      <Input label="Город" />
      <Button fullWidth>Продолжить</Button>
    </form>
  );
};
