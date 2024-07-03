import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styles from './styles.module.scss';
export const FilmCardSkeleton = () => (
  <div className={styles.card}>
    <Skeleton height={300} />
    <div>
      <h2>
        <Skeleton width={`55%`} />
      </h2>
      <span>
        <Skeleton width={`30%`} />
      </span>
    </div>
    <div>
      <span>
        <Skeleton width={`45%`} />
      </span>
      <span>
        <Skeleton width={`30%`} />
      </span>
    </div>
  </div>
);
