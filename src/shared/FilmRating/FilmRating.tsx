interface FilmRatingProps {
  rating: number;
}

export const FilmRating = ({ rating }: FilmRatingProps) => {
  const filledStars = [...Array(5)];
  console.log(filledStars);
  return (
    <div>
      {[...Array(rating)].slice(0, rating).map((_, index) => (
        <img key={index} src="/icons/Star_solid.svg" alt="s" width={24} height={24} />
      ))}
      {[...Array(5 - rating)].map((_, index) => (
        <img key={index} src="/icons/Star.svg" alt="s" width={24} height={24} />
      ))}
    </div>
  );
};
