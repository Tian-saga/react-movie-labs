import React, { useState } from "react";
import { getMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites';
import FilterMoviesCard from '../components/filterMoviesCard';

const HomePage = (props) => {
  const [filters, setFilters] = useState({ genre: [], name: "", sortBy: "" });
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 10; // 每页显示10部电影

  const { data, error, isLoading, isError } = useQuery('discover', getMovies);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const movies = data.results;

  // Filtering movies based on genre and name
  const filteredMovies = movies.filter((movie) => {
    const meetsGenre = filters.genre.length === 0 || filters.genre.some((genre) => movie.genre_ids.includes(parseInt(genre)));
    const meetsSearch = movie.title.toLowerCase().includes(filters.name.toLowerCase());
    return meetsGenre && meetsSearch;
  });

  // Sorting movies based on selected sort criteria
  const sortedMovies = [...filteredMovies].sort((a, b) => {
    if (filters.sortBy === "rating") {
      return b.vote_average - a.vote_average; // Descending order by rating
    } else if (filters.sortBy === "releaseDate") {
      return new Date(b.release_date) - new Date(a.release_date); // Descending order by release date
    }
    return 0;
  });

  // Pagination Logic
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = sortedMovies.slice(indexOfFirstMovie, indexOfLastMovie);

  const handleFilterChange = (type, value) => {
    setFilters({
      ...filters,
      [type]: type === "genre" ? (Array.isArray(value) ? value : [value]) : value, // Ensure genre is always an array
    });
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Redundant, but necessary to avoid app crashing.
  const favorites = movies.filter(m => m.favorite);
  localStorage.setItem('favorites', JSON.stringify(favorites));

  return (
    <>
      <FilterMoviesCard
        onUserInput={handleFilterChange}
        titleFilter={filters.name}
        genreFilter={filters.genre.length > 0 ? filters.genre : []} // Ensure genreFilter is an array
        sortBy={filters.sortBy}
      />
      <PageTemplate
        title="Discover Movies"
        movies={currentMovies}
        action={(movie) => {
          return <AddToFavoritesIcon movie={movie} />;
        }}
      />
      {/* Pagination Controls */}
      <div style={{ margin: "20px", textAlign: "center" }}>
        {Array.from({ length: Math.ceil(sortedMovies.length / moviesPerPage) }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            style={{
              margin: "0 5px",
              padding: "10px",
              backgroundColor: currentPage === index + 1 ? "rgb(204, 204, 0)" : "white",
              border: "1px solid #ccc",
              cursor: "pointer"
            }}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </>
  );
};

export default HomePage;
