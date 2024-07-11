import { ArrowSmallLeftIcon, Typography } from '@src/shared';
import { Back } from '@src/shared/Back/Back';
import { NAVIGATE_ROUTES } from '@src/utils/constants/navigateRoutes';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

export const FilmPageSkeleton = () => {
  return (
    <div className={styles.film_page_wrapper}>
      <Link to={NAVIGATE_ROUTES.ROOT_PAGE}>
        <Back icon={<ArrowSmallLeftIcon />}>
          <Typography variant="p_16_medium" color="tertiary">
            Назад
          </Typography>
        </Back>
      </Link>
      <div className={styles.info}>
        <Skeleton className={styles.img} />
        <div>
          <Skeleton height={'30px'} width={'200px'} />
          <Skeleton height={'25px'} width={'100px'} />
          <Skeleton height={'80px'} width={'80%'} />
        </div>
      </div>
      <div>
        <Skeleton height={'43px'} width={'63%'} className={styles.tabs} />
      </div>
    </div>
  );
};
