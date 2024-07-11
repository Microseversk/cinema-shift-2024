import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import styles from './styles.module.scss';

export const FilmCardSkeleton = () => (
  <div className={styles.card}>
    <Skeleton className={styles.skeleton_img} />
    <div>
      <h2>
        <Skeleton width={`90%`} height={24} />
      </h2>
    </div>
    <div>
      <span>
        <Skeleton width={`45%`} height={25} />
      </span>
      <span>
        <Skeleton width={`30%`} height={15} />
      </span>
    </div>
  </div>
);
