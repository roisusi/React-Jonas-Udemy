import styles from "../css/CountryList.module.css";
import Spinner from "../pages/Spinner.jsx";
import Message from "../pages/Message.jsx";
import CountryItem from "../pages/CountryItem.jsx";

function CountryList({ cities, isLoading }) {
  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country)) {
      return [...arr, { country: city.country, emoji: city.emoji }];
    } else {
      return arr;
    }
  }, []);

  console.log(countries);
  if (isLoading) {
    return <Spinner />;
  }
  if (!cities.length) {
    return <Message message={"Add you first City"} />;
  }
  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}

export default CountryList;
