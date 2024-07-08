import { Button } from '../button/Button';
import { Input } from '../input/Input';
import { Typography } from '../typography/Typography';
import styles from './styles.module.scss';

export const CardForm = () => {
  return (
    <div className={styles.card}>
      <Typography tag="h2" variant="h2">
        Введите данные карты для оплаты
      </Typography>
      <form className={styles.form}>
        <div className={styles.card_number}>
          <Input placeholder="0000 0000" label="Номер*" />
        </div>
        <div className={styles.card_date}>
          <Input placeholder="00/00" label="Срок*" />
        </div>
        <div className={styles.card_cvv}>
          <Input placeholder="0000" label="CVV*" />
        </div>
      </form>
      <Button fullWidth>Оплатить</Button>
    </div>
  );
};
