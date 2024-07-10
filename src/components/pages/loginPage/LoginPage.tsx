import { useContext, useState } from 'react';
import styles from './styles.module.scss';

import { SignInDto } from '@src/@types/api';
import { usePostOtpQuery } from '@src/hooks/usePostOtpQuery';
import { usePostUserSignInQuery } from '@src/hooks/usePostUserSignInQuery';
import { Button, Input, Typography } from '@src/shared';
import { authContext } from '@src/store/authContext/authContext';
import { otpIsValid, phoneIsValid } from '@src/utils';
import { NAVIGATE_ROUTES } from '@src/utils/constants/navigateRoutes';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(authContext);
  const [isWritingOtp, setIsWritingOtp] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInDto>({ reValidateMode: 'onChange' });
  const mutateOtp = usePostOtpQuery();
  const mutateLogin = usePostUserSignInQuery();

  const onSubmitLogin: SubmitHandler<SignInDto> = (data) => {
    if (!isWritingOtp && !data.code) {
      mutateOtp.mutate(
        { params: { phone: data.phone } },
        {
          onSuccess: () => setIsWritingOtp(true),
        },
      );
    } else {
      mutateLogin.mutate(
        { params: data },
        {
          onSuccess: (data) => {
            window.localStorage.setItem('token', data.data.token);
            setUser(data.data.user);
            navigate(NAVIGATE_ROUTES.ROOT_PAGE);
          },
        },
      );
    }
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
          <form id="phone_form" className={styles.form} onSubmit={handleSubmit(onSubmitLogin)}>
            <Input
              isError={!!errors.phone}
              message={errors.phone?.message}
              placeholder="Телефон"
              {...register('phone', { validate: phoneIsValid })}
            />
          </form>
          <Button form="phone_form" type="submit" loading={mutateOtp.isPending}>
            Продолжить
          </Button>
        </>
      ) : (
        <>
          <form id="login_form" className={styles.form} onSubmit={handleSubmit(onSubmitLogin)}>
            <Input disabled placeholder="Телефон" {...register('phone')} />
            <Input
              isError={!!errors.code}
              message={errors.code?.message}
              placeholder="Проверочный код"
              {...register('code', { validate: (v) => otpIsValid(v!) })}
            />
          </form>
          <Button form="login_form" type="submit" loading={mutateLogin.isPending}>
            Войти
          </Button>
        </>
      )}
    </div>
  );
};
