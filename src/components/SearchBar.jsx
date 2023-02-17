import React, { useRef } from "react";
import Button from "./Button";

// Define the SearchBar component
export default function SearchBar({ handleClick, setHeroes, setError }) {
  // Create a reference to the input field
  let input = useRef();

  // Render the search bar form with input field and search button
  return (
    <form className="search-bar">
      <input
        className="search"
        type="text"
        placeholder="Search Hero..."
        // Attach the input reference to the input field
        ref={input}
      />
      <Button
        text={"Search"}
        handleClick={(e) => {
          handleClick(e, input.current.value)
            // Update the hero list with search results
            .then((data) => setHeroes(data.data.results))
            // Handle any search errors
            .catch((err) => setError(err));
        }}
      />
    </form>
  );
}
