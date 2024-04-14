import styles from "../css/CityList.module.css";
import Spinner from "../pages/Spinner.jsx";
import CityItem from "./CityItem.jsx";
import Message from "../pages/Message.jsx";
import { useCities } from "../contexts/CitiesProvider.jsx";

function CityList() {
  const { cities, isLoading } = useCities();
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
