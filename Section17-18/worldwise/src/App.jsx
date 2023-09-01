import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Product from "./pages/Product.jsx";
import Pricing from "./pages/Pricing.jsx";
import Homepage from "./pages/Homepage.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import AppLayout from "./pages/AppLayout.jsx";
import Login from "./pages/Login.jsx";
import CityList from "./components/CityList.jsx";
import { useEffect, useState } from "react";
import CountryList from "./components/CountryList.jsx";
import City from "./pages/City.jsx";
import Form from "./pages/Form.jsx";

const BASE_URL = "http://localhost:8000";

function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function() {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch {
        alert("Error fetching cities");
      } finally {
        setIsLoading(false);
      }
    }

    fetchCities();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        {/*<Route path="/" element={<Homepage />} />*/}
        <Route index element={<Homepage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/pricing" element={<Pricing />} />

        <Route path="/app" element={<AppLayout />}>
          {/*default route*/}
          {/*we use <Navigate /> only for redirect*/}
          <Route index element={<Navigate to={"cities"} replace={"cities"} />} />
          <Route path="cities" element={<CityList cities={cities} isLoading={isLoading} />} />
          <Route path="cities/:id" element={<City />} />
          <Route path="countries" element={<CountryList cities={cities} isLoading={isLoading} />} />
          <Route path="form" element={<Form />} />
        </Route>

        <Route path="login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
