import { FilmImage, Typography } from '../../../shared';
import styles from './styles.module.scss';
export const RootPage = () => {
  return (
    <main>
      <Typography variant="h2">Афиша</Typography>
      <div className={styles.cards_wrapper}>
        <FilmImage
          country="США"
          genre="фантастика"
          releaseDate="2023"
          image={'https://shift-backend.onrender.com/static/images/cinema/film_1.webp'}
          alt={'...'}
        />
        <FilmImage
          country="США"
          genre="фантастика"
          releaseDate="2023"
          image={'https://shift-backend.onrender.com/static/images/cinema/film_2.webp'}
          alt={'...'}
        />
        <FilmImage
          country="США"
          genre="фантастика"
          releaseDate="2023"
          image={'https://shift-backend.onrender.com/static/images/cinema/film_3.webp'}
          alt={'...'}
        />
      </div>
    </main>
  );
};
