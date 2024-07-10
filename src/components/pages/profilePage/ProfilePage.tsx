import { yupResolver } from '@hookform/resolvers/yup';
import { UpdateProfileDto } from '@src/@types/api';
import { Button, Input, Typography } from '@src/shared';
import { authContext } from '@src/store/authContext/authContext';
import { usePatchUserProfileQuery } from '@src/utils/api/hooks/usePatchUserProfileQuery';
import { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { profileFormScheme } from './constants/profileFormScheme';
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
    resolver: yupResolver(profileFormScheme),
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
          {...register('profile.lastname')}
        />
        <Input
          isError={!!errors.profile?.firstname}
          message={errors.profile?.firstname?.message}
          label="Имя"
          {...register('profile.firstname')}
        />
        <Input
          isError={!!errors.profile?.middlename}
          message={errors.profile?.middlename?.message}
          label="Отчество"
          {...register('profile.middlename')}
        />
        <Input
          isError={!!errors.phone}
          message={errors.phone?.message}
          label="Номер телефона"
          disabled
          {...register('phone')}
        />
        <Input
          isError={!!errors.profile?.email}
          message={errors.profile?.email?.message}
          label="Email"
          {...register('profile.email')}
        />
        <Input
          isError={!!errors.profile?.city}
          message={errors.profile?.city?.message}
          label="Город"
          {...register('profile.city')}
        />
        <Button loading={isPending} type="submit" disabled={!dirtyFields.profile}>
          Обновить данные
        </Button>
      </form>
    </div>
  );
};
