import React, { useState, useEffect, useCallback } from 'react';
import { AiOutlineGithub } from 'react-icons/ai';
import MoviesList from './components/MoviesList';
import AddMovie from './components/AddMovie';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        'https://react-http-592e0-default-rtdb.firebaseio.com/person.json'
      );
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();
      console.log(data);
      const loadMovies = [];
      for (const key in data) {
        loadMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }
      console.log(loadMovies);
      setMovies(loadMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  async function addMovieHandler(movie) {
    const response = await fetch(
      'https://react-http-592e0-default-rtdb.firebaseio.com/person.json',
      {
        method: 'POST',
        body: JSON.stringify(movie),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const data = response.json();
    console.log(data);
  }

  let content = <p>No data found.</p>;

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Data</button>
      </section>
      <section>{content}</section>
      <h4 style={{ textAlign: 'center', color: 'white' }}>
        Made for fun with 💟 by{' '}
        <a href="https://github.com/deveish-ts" target="_blank">
          {<AiOutlineGithub style={{ color: 'white', fontSize: '20px' }} />}{' '}
          Ishraque
        </a>
      </h4>
    </React.Fragment>
  );
}

export default App;
