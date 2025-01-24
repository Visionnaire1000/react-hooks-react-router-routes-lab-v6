
import { Link } from 'react-router-dom';

function MovieCard({ title, id }) {
  return (
    <div>
      <h3>{title}</h3>
      <Link to={`/movie/${id}`}>View Details</Link>
    </div>
  );
}

export default MovieCard;
