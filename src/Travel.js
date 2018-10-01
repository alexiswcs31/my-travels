import React from "react";

const Travel = ({ destination, country, picture, distance }) => (
  <figure>
    <h1>{destination}</h1>
    <h3>{country}</h3>
    <img src={picture} alt={destination} />
    <figcaption>{distance}</figcaption>
  </figure>
);

export default Travel;