import { Button, Input, Typography } from '@src/shared';

import { FormEvent } from 'react';
import styles from './styles.module.scss';

interface BuyTicketsFormProps {
  onSubmit: (e: FormEvent) => void;
}

export const BuyTicketsForm = ({ onSubmit }: BuyTicketsFormProps) => {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <Typography tag="h2" variant="h2">
        Введите ваши данные
      </Typography>
      <Input label="Имя*" />
      <Input label="Фамилия*" />
      <Input label="Отчество" />
      <Input label="Телефон*" />
      <Input label="Email" />
      <Input label="Город" />
      <Button type="submit" fullWidth>
        Продолжить
      </Button>
    </form>
  );
};
