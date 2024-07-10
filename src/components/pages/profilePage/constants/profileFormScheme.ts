import { number, object, string } from 'yup';

export const profileFormScheme = object({
  profile: object({
    firstname: string().required('Обязательное поле').max(60, 'Максимальная  длина 60 символов'),
    middlename: string().max(60, 'Максимальная  длина 60 символов'),
    lastname: string().required('Обязательное поле').max(60, 'Максимальная  длина 60 символов'),
    email: string().required('Обязательное поле').email('Некорректный email'),
    city: string().max(60, 'Максимальная  длина 60 символов'),
  }),
  phone: number().required('Обязательное поле'),
});
