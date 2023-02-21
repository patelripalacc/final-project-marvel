// Import React and the useState hook from the "react" library
import React from "react";
import { useState } from "react";

// Import the Container, SearchBar, Grid, Card, and fetchHeros components from other files
import Container from "./Container";
import SearchBar from "./SearchBar";
import Grid from "./Grid";
import Card from "./Card";
import { fetchHeros } from "../utilites/utils";

// Define a constant for the thumbnail image size
const IMG_FANTASTIC = "portrait_fantastic";

// Define the Home component as a default export
export default function Home() {
  // Use the useState hook to create state variables for the list of heroes and any errors
  const [heroes, setHeroes] = useState([]);
  const [error, setError] = useState();

  // Define a function to handle a search button click event
  const handleClick = async (e, args) => {
    e.preventDefault();
    if (args === "") return;

    try {
      return await fetchHeros(args);
    } catch (err) {
      return err;
    }
  };

  // If there are heroes in the state variable, create a list of Card components
  let cards;
  if (heroes) {
    cards = heroes.map((hero) => (
      <Card
        name={hero.name}
        key={hero.id}
        id={hero.id}
        thumbnail={`${hero.thumbnail.path}/${IMG_FANTASTIC}.${hero.thumbnail.extension}`}
      />
    ));
  }

  // Render the Home component with a Container, SearchBar, and Grid component
  return (
    <Container>
      <div className="title">
        <img className="logo" src="./Images/Marvel-symbol.jpg" alt="logo" />
        <h1 className="title1">Super Heroes</h1>
      </div>
      <SearchBar
        handleClick={handleClick}
        setHeroes={setHeroes}
        setError={setError}
      />
      <Grid>{cards ? cards : null}</Grid>
    </Container>

  );
}
