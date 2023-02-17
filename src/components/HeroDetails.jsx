// Import React and the useState and useEffect hook from the "react" library
import React, { useEffect, useState } from "react";
// Import useParams from react-router-dom
import { useParams } from "react-router-dom";
// import fetchHero from utils
import { fetchHero } from "../libs/utils";

export default function HeroDetails() {
  // gets the id parameter from the URL
  let { id } = useParams();

  // initializes state for hero details
  const [hero, setHero] = useState();

  // initializes variables to store hero details
  let name;
  let description;
  let thumbnailPath;
  let thumbnailExtension;
  let thumbnailUrl;
  let series;

  // runs the fetchHero function when the component mounts
  useEffect(() => {
    fetchHero(id)
      .then((data) => setHero(data))
      .catch((err) => console.error(err));
  }, []);

  // extracts hero details from the API response if it exists
  if (hero) {
    name = hero.data.results[0].name;
    description = hero.data.results[0].description;
    thumbnailPath = hero.data.results[0].thumbnail.path;
    thumbnailExtension = hero.data.results[0].thumbnail.extension;
    thumbnailUrl = `${thumbnailPath}.${thumbnailExtension}`;
    series = hero.data.results[0].series.items;
  }
  // if there are no hero details, return an empty page
  if (!hero) return;

  return (
    <div className="container large">
      <div className="hero__details-container">
        {/* displays hero thumbnail image */}
        <img src={thumbnailUrl} alt="hero full size" />
        <div className="hero__details">
          <h4>Name:</h4>
          {/*  displays hero name */}
          <p>{name}</p>
          {/*  displays hero description if it exists */}
          {description ? (
            <>
              <h4>Description:</h4>
              <p>{description}</p>
            </>
          ) : null}
          <div className="hero__series">
            <h4>Series:</h4>
            <ul>
              {/* displays hero series titles if it exists */}
              {series
                ? series.map((title) => (
                    <li key={Math.random() * 1000}>{title.name}</li>
                  ))
                : null}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
