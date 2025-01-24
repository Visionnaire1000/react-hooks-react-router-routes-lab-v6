
import { useParams } from 'react-router-dom';

function Movie() {
  const { id } = useParams();
  const movie = {
    id: id,
    title: `Movie ${id}`,
    time: '2h 30m',
    genres: ['Action', 'Adventure'],
  };

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.time}</p>
      {movie.genres.map((genre, index) => (
        <span key={index}>{genre}</span>
      ))}
    </div>
  );
}

export default Movie;
