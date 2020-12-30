import logo from "./logo.svg";
import "./App.css";
import MovieCard from "./components/movieCard";
import AddMovie from "./components/AddMovie";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Button } from "react-bootstrap";
import reactStars from "react-rating-stars-component";

function App() {
  const [Movies, setMovies] = useState([
    {
      title: "Gone Girl",
      description: "2014 ‧ Thriller/Film à énigme",
      posterURL:
        "https://fr.web.img5.acsta.net/pictures/14/09/11/17/05/508784.jpg",
      rate: "4",
    },
    {
      title: "The Fault in Our Stars",
      description: "2014 ‧ Romance/Drame",
      posterURL:
        "https://fr.web.img6.acsta.net/pictures/14/06/18/17/18/218720.jpg",
      rate: "5",
    },
    {
      title: "Passangers",
      description: "2016 ‧ SF/Romance ",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BZjk4ZTMwMTYtOTk1NC00OTA0LWFhMGYtZTBjMzViMDY2YWZjXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
      rate: "3",
    },
  ]);

  const Add = (title, description, posterURL, rate) => {
    setMovies([
      ...Movies,
      {
        title: title,
        description: description,
        posterURL: posterURL,
        rate: rate,
      },
    ]);
  };

  return (
    <div className="App">
      <MovieCard Movies={Movies} />
      <AddMovie Add={Add} />
    </div>
  );
}

export default App;
