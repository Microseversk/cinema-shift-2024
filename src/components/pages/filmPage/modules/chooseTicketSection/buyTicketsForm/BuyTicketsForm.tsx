import { CreatePaymentTicketsDto, FilmTicketSeance, PostPaymentBody } from '@src/@types/api';
import { ArrowSmallLeftIcon, Button, Input, SuccessIcon, Typography } from '@src/shared';
import { Back } from '@src/shared/Back/Back';
import { authContext } from '@src/store/authContext/authContext';
import {
  cardCVVIsValid,
  cardDateIsValid,
  cardNumberIsValid,
  firstNameIsValid,
  lastNameIsValid,
  middleNameIsValid,
  phoneIsValid,
} from '@src/utils';
import { usePostPaymentQuery } from '@src/utils/api/hooks/usePostPaymentQuery';
import { NAVIGATE_ROUTES } from '@src/utils/constants/navigateRoutes';
import { useContext, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';

interface BuyTicketsFormProps {
  filmId: string;
  seance: FilmTicketSeance;
  tickets: CreatePaymentTicketsDto[];
}

export const BuyTicketsForm = ({ filmId, seance, tickets }: BuyTicketsFormProps) => {
  const navigate = useNavigate();
  const { mutate, data, isPending } = usePostPaymentQuery();
  const [form, setForm] = useState<'person' | 'card' | 'success'>('person');
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
          setForm('success');
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
              <Input
                isError={!!errors.debitCard?.pan}
                message={errors.debitCard?.pan?.message}
                placeholder="0000 0000"
                label="Номер*"
                {...register('debitCard.pan', { validate: cardNumberIsValid })}
              />
            </div>
            <div className={styles.card_date}>
              <Input
                isError={!!errors.debitCard?.expireDate}
                message={errors.debitCard?.expireDate?.message}
                placeholder="0000"
                label="Срок*"
                {...register('debitCard.expireDate', { validate: cardDateIsValid })}
              />
            </div>
            <div className={styles.card_cvv}>
              <Input
                isError={!!errors.debitCard?.cvv}
                message={errors.debitCard?.cvv?.message}
                placeholder="0000"
                label="CVV*"
                {...register('debitCard.cvv', { validate: cardCVVIsValid })}
              />
            </div>
          </form>
          <Button type="submit" form="card_form" fullWidth loading={isPending}>
            Оплатить
          </Button>
        </div>
      </>
    );
  }
  if (form === 'success') {
    return (
      <div className={styles.success_form}>
        <div className={styles.text_center}>
          <SuccessIcon />
        </div>
        <Typography tag="h2" variant="h2" className={styles.text_center}>
          Оплата прошла успешно!
        </Typography>
        <div>
          <Typography variant="p_12_regular" color="tertiary">
            Номер билета
          </Typography>
          <Typography variant="p_16_regular">{data?.data.order.orderNumber}</Typography>
        </div>
        <div>
          <Typography variant="p_12_regular" color="tertiary">
            Фильм
          </Typography>
          <Typography variant="p_16_regular">{data?.data.order.filmName}</Typography>
        </div>
        <div>
          <Typography variant="p_12_regular" color="tertiary">
            Дата и время
          </Typography>
          <Typography variant="p_16_regular">
            {data?.data.order.tickets[0].seance.date} {data?.data.order.tickets[0].seance.time}
          </Typography>
        </div>
        <div>
          <Typography variant="p_12_regular" color="tertiary">
            Ряд
          </Typography>
          <Typography variant="p_16_regular">
            {data?.data.order.tickets.map((ticket) => ticket.row).join(', ')}
          </Typography>
        </div>
        <div>
          <Typography variant="p_12_regular" color="tertiary">
            Места
          </Typography>
          <Typography variant="p_16_regular">
            {data?.data.order.tickets.map((ticket) => ticket.column).join(', ')}
          </Typography>
        </div>
        <Typography variant="p_14_regular" color="tertiary">
          Вся информация была продублирована в SMS
        </Typography>
        <Button
          variant="link"
          onClick={() => navigate(NAVIGATE_ROUTES.ORDERS_PAGE)}
          fullWidth
          className={styles.text_center}
        >
          Перейти в личный кабинет
        </Button>
      </div>
    );
  }
};
