import styles from './styles.module.scss';

interface FilmRatingProps {
  rating: number;
}

export const FilmRating = ({ rating }: FilmRatingProps) => (
  <div className={styles.rating_wrapper}>
    {[0, 1, 2, 3, 4].map((num) => {
      const rate = rating - 2 * num;
      const width = rate > 2 ? '100%' : `${rate * 50}%`;
      return (
        <div className={styles.star} key={num}>
          <div className={styles.star_filled} style={{ width: width }}></div>
        </div>
      );
    })}
  </div>
);
