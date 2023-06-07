import { InfoOutlined, PlayArrow } from "@mui/icons-material";
import "./featured.scss";
import React from "react";

const Feature = ({ type }) => {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img
        src="https://culturedvultures.com/wp-content/uploads/2016/10/The-Lion-King.jpg"
        alt=""
      />
      <div className="info">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/3/3f/The_Lion_King_2019_logo.png"
          alt=""
        />
        <span className="desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae quasi
          magni porro rerum placeat totam nulla? Debitis sequi numquam vero,
          porro suscipit nulla ipsam? Consectetur sint quibusdam rem debitis
          laborum?
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feature;
