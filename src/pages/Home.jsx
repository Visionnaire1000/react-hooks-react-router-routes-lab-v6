
import MovieCard from '../components/MovieCard';

function Home() {
  const movies = [
    { id: 1, title: 'Movie 1' },
    { id: 2, title: 'Movie 2' },
    // Add more movies here
  ];

  return (
    <div>
      <h1>Home Page</h1>
      <div>
        {movies.map((movie) => (
          <MovieCard key={movie.id} id={movie.id} title={movie.title} />
        ))}
      </div>
    </div>
  );
}

export default Home;
