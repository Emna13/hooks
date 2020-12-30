import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactStars from "react-rating-stars-component";
import { Table } from "react-bootstrap";

const MovieList = ({ item, handleChange, Look, Search }) => {
  return (
    <>
      <tr>
        <td className="item">
          <ReactStars
            count={5}
            value={item.rate}
            size={24}
            activeColor="#ffd700"
          />
        </td>
        <td className="item">{item.title}</td>
        <td className="item">{item.description}</td>
        <td>
          <img className="poster" src={item.posterURL} />
        </td>
      </tr>
    </>
  );
};

export default MovieList;
