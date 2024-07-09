import { UpdateProfileDto } from '@src/@types/api';
import { Button, Input, Typography } from '@src/shared';
import { authContext } from '@src/store/authContext/authContext';
import { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { usePatchUserProfileQuery } from '@src/hooks/usePatchUserProfileQuery';
import styles from './styles.module.scss';

export const ProfilePage = () => {
  const { mutate, isPending } = usePatchUserProfileQuery();
  const { user } = useContext(authContext);

  const {
    register,
    handleSubmit,
    formState: { dirtyFields },
  } = useForm<UpdateProfileDto>({
    defaultValues: {
      profile: { ...user },
      phone: user?.phone,
    },
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
        <Input label="Фамилия" {...register('profile.lastname')} />
        <Input label="Имя" {...register('profile.firstname')} />
        <Input label="Отчество" {...register('profile.middlename')} />
        <Input label="Номер телефона" disabled {...register('phone')} />
        <Input label="Email" {...register('profile.email')} />
        <Input label="Город" {...register('profile.city')} />
        <Button loading={isPending} type="submit" disabled={!dirtyFields.profile}>
          Обновить данные
        </Button>
      </form>
    </div>
  );
};
