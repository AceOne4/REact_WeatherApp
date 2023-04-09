import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GeoApiUrl, GeoApiOption } from "../../api";
const Search = ({ onSearchChange }) => {
  const [Search, setsearch] = useState(null);
  const loadOptions = async (value) => {
    try {
      const response = await fetch(
        `${GeoApiUrl}/cities?minPopulation=1000000&namePrefix=${value}`,
        GeoApiOption
      );
      const response_1 = await response.json();
      const resutlt = {
        options: response_1?.data?.map((city) => {
          return {
            name: city.city,
            value: `${city.latitude} ${city.longitude}`,
            label: `${city.name}, ${city.countryCode}`,
          };
        }),
      };
      return resutlt;
    } catch (err) {
      return console.error(err);
    }
  };

  const searchHanlder = (SearchData) => {
    setsearch(SearchData);
    onSearchChange(SearchData);
  };
  return (
    <AsyncPaginate
      placeholder="Search for Cities..."
      debounceTimeout={600}
      value={Search}
      onChange={searchHanlder}
      loadOptions={loadOptions}
    />
  );
};

export default Search;
