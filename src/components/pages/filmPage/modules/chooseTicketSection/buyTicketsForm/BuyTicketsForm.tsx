import { ArrowSmallLeftIcon, Button, Input, Typography } from '@src/shared';

import { CreatePaymentTicketsDto, FilmTicketSeance, PostPaymentBody } from '@src/@types/api';
import { usePostPaymentQuery } from '@src/hooks/usePostPaymentQuery';
import { Back } from '@src/shared/Back/Back';
import { authContext } from '@src/store/authContext/authContext';
import { firstNameIsValid, lastNameIsValid, middleNameIsValid, phoneIsValid } from '@src/utils';
import { useContext, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './styles.module.scss';

interface BuyTicketsFormProps {
  filmId: string;
  seance: FilmTicketSeance;
  tickets: CreatePaymentTicketsDto[];
  onBuyTickets: () => void;
}

export const BuyTicketsForm = ({ filmId, seance, tickets, onBuyTickets }: BuyTicketsFormProps) => {
  const { mutate, isPending } = usePostPaymentQuery();
  const [form, setForm] = useState<'person' | 'card'>('person');
  const { user } = useContext(authContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PostPaymentBody>({
    defaultValues: {
      person: user ? { ...user } : {},
      filmId: filmId,
      seance: seance,
      tickets: tickets,
    },
  });

  const onSubmit: SubmitHandler<PostPaymentBody> = (data) => {
    mutate(
      {
        params: data,
      },
      {
        onSuccess: () => {
          onBuyTickets();
        },
      },
    );
  };

  if (form === 'person') {
    return (
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Typography tag="h2" variant="h2">
          Введите ваши данные
        </Typography>
        <Input
          isError={!!errors.person?.firstname}
          message={errors.person?.firstname?.message}
          label="Имя*"
          {...register('person.firstname', { validate: firstNameIsValid })}
        />
        <Input
          isError={!!errors.person?.lastname}
          message={errors.person?.lastname?.message}
          label="Фамилия*"
          {...register('person.lastname', { validate: lastNameIsValid })}
        />
        <Input
          isError={!!errors.person?.middlename}
          message={errors.person?.middlename?.message}
          label="Отчество"
          {...register('person.middlename', { validate: middleNameIsValid })}
        />
        <Input
          isError={!!errors.person?.phone}
          message={errors.person?.phone?.message}
          label="Телефон*"
          {...register('person.phone', { validate: phoneIsValid })}
        />
        <Button type="button" fullWidth onClick={() => setForm('card')}>
          Продолжить
        </Button>
      </form>
    );
  }

  if (form === 'card') {
    return (
      <>
        <Back icon={<ArrowSmallLeftIcon />} onClick={() => setForm('person')}>
          Назад
        </Back>
        <div className={styles.card}>
          <Typography tag="h2" variant="h2">
            Введите данные карты для оплаты
          </Typography>
          <form className={styles.card_form} id="card_form" onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.card_number}>
              <Input placeholder="0000 0000" label="Номер*" {...register('debitCard.pan')} />
            </div>
            <div className={styles.card_date}>
              <Input placeholder="00/00" label="Срок*" {...register('debitCard.expireDate')} />
            </div>
            <div className={styles.card_cvv}>
              <Input placeholder="0000" label="CVV*" {...register('debitCard.cvv')} />
            </div>
          </form>
          <Button type="submit" form="card_form" fullWidth loading={isPending} disabled={isPending}>
            Оплатить
          </Button>
        </div>
      </>
    );
  }
};
