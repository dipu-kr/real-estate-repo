import React from "react";
import Select from "react-select";
import "../css/Search.css";

const Search = ({
  setCity,
  setPrice,
  setProperty,
  setGetDateByInput,
  searchHandle,
}) => {
  // ----------location--------
  const location = [
    {
      label: "Mumbai",
    },
    {
      label: "Delhi",
    },
  ];
  // ------------price category---------
  const price = [
    {
      label: "1000",
    },
    {
      label: "2000",
    },
    {
      label: "3000",
    },
    {
      label: "4000",
    },
  ];
  // -----------properties type------------
  const property = [{ label: "House" }, { label: "Hotel" }];

  const cityHandle = (e) => {
    setCity(e.label);
  };

  const priceHandle = (e) => {
    setPrice(e.label);
  };

  const propertyHandle = (e) => {
    setProperty(e.label);
  };

  const dateHandle = (e) => {
    setGetDateByInput(e.target.value);
  };

  return (
    <div className="search-container">
      <div className="search">
        <div className="search-div-1">
          <p>location</p>
          <div>
            <Select options={location} onChange={cityHandle} />
          </div>
        </div>
        <div className="search-div-2">
          <p>When</p>
          <div>
            <input type="date" onChange={dateHandle} />
          </div>
        </div>
        <div className="search-div-3">
          <p>Price</p>
          <div>
            <Select options={price} onChange={priceHandle} />
          </div>
        </div>
        <div className="search-div-4">
          <p>Property Type</p>
          <div>
            <Select options={property} onChange={propertyHandle} />
          </div>
        </div>
        <div className="search-div-5">
          <button onClick={() => searchHandle()}>Search</button>
        </div>
      </div>
    </div>
  );
};

export default Search;
