import { useState, useEffect } from "react";
import SearchBar from "./components/searchBar/SearchBar";
import Cards from "./components/cards/Cards";
import { Button, Spinner } from "react-bootstrap";
import { useFetch } from "./customHooks/useFetch";
import useSortableData from "./customHooks/useSortableData";

function App() {
  const { loading, data, error } = useFetch(
    `https://omdbapi.com/?apikey=7c11b80d&s=${encodeURIComponent(
      // searchTerm
      "marvel"
    )}`,
    []
  );

  return (
    <div className="container_app">
      <h1>movies-imdb</h1>
      {error && <div>Something went wrong ...</div>}
      {loading ? (
        <div className="mySpinner">"loading..."</div>
      ) : (
        <div>
          <hr />
        </div>
      )}
    </div>
  );
}

export default App;
