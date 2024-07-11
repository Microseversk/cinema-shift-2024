import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styles from './styles.module.scss';

export const OrderCardSkeleton = () => (
  <div className={styles.card}>
    <div className={styles.header}>
      <Skeleton width={`60px`} height={'12px'} />
      <Skeleton width={`50px`} height={'12px'} />
    </div>
    <div className={styles.main}>
      <Skeleton width={`140px`} height={'16px'} />
      <Skeleton width={`110px`} height={'13px'} />
    </div>
    <div className={styles.footer}>
      <Skeleton width={`70px`} height={'18px'} />
      <Skeleton width={`100px`} height={'14px'} />
    </div>
    <Skeleton width={`100%`} height={'55px'} />
  </div>
);
