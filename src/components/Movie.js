import React from 'react';

import classes from './Movie.module.css';

const Movie = (props) => {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return (
    <li
      className={classes.movie}
      style={{ backgroundColor: `#${randomColor}` }}
    >
      <h2>{props.title}</h2>
      <p>{props.openingText}</p>
      <a href={props.releaseDate} target="_blank">
        <h3>
          <span>👉</span>
          {props.releaseDate}
        </h3>
      </a>
    </li>
  );
};

export default Movie;
