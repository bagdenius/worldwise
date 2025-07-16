import React from "react";
import styles from "./CityItem.module.css";
import { Link } from "react-router-dom";
import { useCitiesContext } from "../contexts/CitiesContext";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

const flagEmojiToPNG = (flag) => {
  var countryCode = Array.from(flag, (codeUnit) => codeUnit.codePointAt())
    .map((char) => String.fromCharCode(char - 127397).toLowerCase())
    .join("");
  return "https://flagcdn.com/24x18/" + countryCode + ".png";
};

const CityItem = ({ city }) => {
  const { currentCity, deleteCity } = useCitiesContext();
  const { cityName, emoji, date, id, position } = city;

  function handleClick(event) {
    event.preventDefault();
    deleteCity(id);
  }

  return (
    <li>
      <Link
        className={`${styles.cityItem} ${
          id === currentCity.id && styles[`cityItem--active`]
        }`}
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      >
        <img className={styles.emoji} src={flagEmojiToPNG(emoji)} />
        {/* <span className={styles.emoji}>{emoji}</span> */}
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>({formatDate(date)})</time>
        <button className={styles.deleteBtn} onClick={handleClick}>
          &times;
        </button>
      </Link>
    </li>
  );
};

export default CityItem;
