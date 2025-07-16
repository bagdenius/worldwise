import styles from "./CountryItem.module.css";

const flagEmojiToPNG = (flag) => {
  var countryCode = Array.from(flag, (codeUnit) => codeUnit.codePointAt())
    .map((char) => String.fromCharCode(char - 127397).toLowerCase())
    .join("");
  return "https://flagcdn.com/24x18/" + countryCode + ".png";
};

function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      {/* <span>{country.emoji}</span> */}
      <img src={flagEmojiToPNG(country.emoji)} alt={country.country} />
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
