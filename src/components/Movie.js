import React from 'react';

import classes from './Movie.module.css';

const Movie = (props) => {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return (
    <li
      className={classes.movie}
      style={{ backgroundColor: `#${randomColor}` }}
    >
      <h2 style={{ background: 'black' }}>{props.title}</h2>
      <p style={{ background: 'black' }}>{props.openingText}</p>
      <a style={{ background: 'black' }} href={props.releaseDate}>
        <h3>{props.releaseDate}</h3>
      </a>
    </li>
  );
};

export default Movie;
