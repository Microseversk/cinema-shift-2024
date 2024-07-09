import { FormEvent, useContext, useState } from 'react';
import styles from './styles.module.scss';

import { SignInDto } from '@src/@types/api';
import { usePostOtpQuery } from '@src/hooks/usePostOtpQuery';
import { usePostUserSignInQuery } from '@src/hooks/usePostUserSignInQuery';
import { Button, Input, Typography } from '@src/shared';
import { authContext } from '@src/store/authContext/authContext';
import { NAVIGATE_ROUTES } from '@src/utils/constants/navigateRoutes';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(authContext);
  const [isWritingOtp, setIsWritingOtp] = useState(false);
  const { register, handleSubmit, getValues } = useForm<SignInDto>();
  const mutateOtp = usePostOtpQuery();
  const mutateLogin = usePostUserSignInQuery();

  const onSubmitLogin: SubmitHandler<SignInDto> = (data) => {
    mutateLogin.mutate(
      {
        params: data,
      },
      {
        onSuccess: (data) => {
          window.localStorage.setItem('token', data.data.token);
          setUser(data.data.user);
          navigate(NAVIGATE_ROUTES.ROOT_PAGE);
        },
      },
    );
  };

  const onSubmitPhone = (e: FormEvent) => {
    e.preventDefault();

    mutateOtp.mutate(
      {
        params: {
          phone: getValues('phone'),
        },
      },
      {
        onSuccess: () => setIsWritingOtp(true),
      },
    );
  };

  return (
    <div className={styles.wrapper}>
      <Typography tag="h2" variant="h2">
        Авторизация
      </Typography>
      <Typography variant="p_16_regular">
        {!isWritingOtp
          ? 'Введите номер телефона для входа в личный кабинет'
          : 'Введите проверочный код для входа в личный кабинет'}
      </Typography>
      {!isWritingOtp ? (
        <>
          <form id="phone_form" className={styles.form}>
            <Input
              placeholder="Телефон"
              {...register('phone', {
                required: true,
              })}
            />
          </form>
          <Button
            form="phone_form"
            type="submit"
            loading={mutateOtp.isPending}
            onClick={onSubmitPhone}
          >
            Продолжить
          </Button>
        </>
      ) : (
        <>
          <form id="login_form" className={styles.form} onSubmit={handleSubmit(onSubmitLogin)}>
            <Input
              disabled
              placeholder="Телефон"
              {...register('phone', {
                required: true,
              })}
            />
            <Input placeholder="Проверочный код" {...register('code', { required: true })} />
          </form>
          <Button form="login_form" type="submit" loading={mutateLogin.isPending}>
            Войти
          </Button>
        </>
      )}
    </div>
  );
};
