import styles from "../css/CityList.module.css";
import Spinner from "../pages/Spinner.jsx";
import CityItem from "./CityItem.jsx";
import Message from "../pages/Message.jsx";

function CityList({ cities, isLoading }) {
  if (isLoading) {
    return <Spinner />;
  }
  if (!cities.length) {
    return <Message message={"Add you first City"} />;
  }
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem key={city.id} city={city} />
      ))}
    </ul>
  );
}

export default CityList;
