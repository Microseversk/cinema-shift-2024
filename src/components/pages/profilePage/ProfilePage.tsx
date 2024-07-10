import { UpdateProfileDto } from '@src/@types/api';
import { Button, Input, Typography } from '@src/shared';
import { authContext } from '@src/store/authContext/authContext';
import { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { usePatchUserProfileQuery } from '@src/hooks/usePatchUserProfileQuery';
import {
  cityIsValid,
  emailIsValid,
  firstNameIsValid,
  lastNameIsValid,
  middleNameIsValid,
  phoneIsValid,
} from '@src/utils';
import styles from './styles.module.scss';

export const ProfilePage = () => {
  const { mutate, isPending } = usePatchUserProfileQuery();
  const { user } = useContext(authContext);

  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm<UpdateProfileDto>({
    defaultValues: {
      profile: { ...user },
      phone: user?.phone,
    },
    reValidateMode: 'onChange',
  });

  const onSubmit: SubmitHandler<UpdateProfileDto> = (data) => {
    mutate({ params: data });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <Typography tag="h2" variant="h2">
          Профиль
        </Typography>
        <Input
          isError={!!errors.profile?.lastname}
          message={errors?.profile?.lastname?.message}
          label="Фамилия"
          {...register('profile.lastname', { validate: lastNameIsValid })}
        />
        <Input
          isError={!!errors.profile?.firstname}
          message={errors.profile?.firstname?.message}
          label="Имя"
          {...register('profile.firstname', { validate: firstNameIsValid })}
        />
        <Input
          isError={!!errors.profile?.middlename}
          message={errors.profile?.middlename?.message}
          label="Отчество"
          {...register('profile.middlename', { validate: middleNameIsValid })}
        />
        <Input
          isError={!!errors.phone}
          message={errors.phone?.message}
          label="Номер телефона"
          disabled
          {...register('phone', { validate: phoneIsValid })}
        />
        <Input
          isError={!!errors.profile?.email}
          message={errors.profile?.email?.message}
          label="Email"
          {...register('profile.email', { validate: emailIsValid })}
        />
        <Input
          isError={!!errors.profile?.city}
          message={errors.profile?.city?.message}
          label="Город"
          {...register('profile.city', { validate: cityIsValid })}
        />
        <Button loading={isPending} type="submit" disabled={!dirtyFields.profile}>
          Обновить данные
        </Button>
      </form>
    </div>
  );
};
