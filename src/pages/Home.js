import React, { useState } from "react";
import Head from "../components/Head";
import Search from "../components/Search";
import ProductList from "../components/ProductList";
import products from "../assets/data";

const Home = () => {
  const [allProducts, setAllProducts] = useState(products);

  const [city, setCity] = useState("");
  const [price, setPrice] = useState("");
  const [property, setProperty] = useState("");
  const [getDateByInput, setGetDateByInput] = useState("");

  const searchHandle = () => {
    if (
      city !== "" &&
      getDateByInput !== "" &&
      price !== "" &&
      property !== ""
    ) {
      const filterData = products.filter(
        (item) =>
          item.city === city.toLowerCase() &&
          item.price === Number(price) &&
          item.type === property.toLowerCase() &&
          item.date === getDateByInput
      );
      setAllProducts(filterData);
    } else {
      alert("Please fill all the fields");
    }
  };

  return (
    <div className="home">
      <Head />
      <Search
        setCity={setCity}
        setPrice={setPrice}
        setProperty={setProperty}
        setGetDateByInput={setGetDateByInput}
        searchHandle={searchHandle}
      />
      <ProductList allProducts={allProducts} />
    </div>
  );
};

export default Home;
