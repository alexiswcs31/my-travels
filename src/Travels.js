import React from "react";
import Travel from "./Travel";
// src/Travels.js
const travels = [
  {
    destination: "Wellington",
    country: "New Zealand",
    picture: "https://destination-nouvellezelande.com/wp-content/uploads/2017/12/wellington_682572673.jpg",
    distance: "The distance France to New Zealand is equal to 19 178 km."
  },

  {
    destination: "Petra",
    country: "Jordan",
    picture: "http://siegehublot.com/wp-content/uploads/2017/05/jordanie-20.jpg",
    distance: "The distance France to Jordan is equal to 3 399 km."
  },

  {
    destination: "Pisa",
    country: "Italy",
    picture: "https://generationvoyage.fr/wp-content/uploads/2017/03/tour-pise-1.jpg",
    distance: "The distance France to Italy is equal to 929 km."
  },

  {
    destination: "Dumont-d'Urville",
    country: "Adélie Land",
    picture: "https://terreadelie.sblanc.com/images/baseddu/basedumontdurville.jpg",
    distance: "The distance France to Adélie Land is equal to 16 520 km."
  },

  {
    destination: "Giza",
    country: "Egypt",
    picture: "https://www.101viajes.com/sites/default/files/styles/guia-full/public/giza-piramides-cairo_0.jpg?itok=Q8XVZooh&timestamp=1531814287",
    distance: "The distance France to Egypt is equal to 3 245 km."
  }
];

const Travels = () => (
  <div>
    {travels.map(travel => (
      <Travel destination={travel.destination} country={travel.country} picture={travel.picture} distance={travel.distance} />
    ))}
  </div>
);

export default Travels;