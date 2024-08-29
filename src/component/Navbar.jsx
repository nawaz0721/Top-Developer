import React, { useState } from "react";

function Navbar({ setCountry }) {
  const countries = [
    { id: 0, name: "Country" },
    { id: 1, name: "Pakistan" },
    { id: 2, name: "Bangladesh" },
    { id: 3, name: "Germany" },
    { id: 4, name: "USA" },
    { id: 5, name: "UK" },
    { id: 6, name: "Australia" },
    { id: 7, name: "Canada" },
    { id: 8, name: "India" },
  ];

  const technologies = [
    { id: 0, name: "Technology" },
    { id: 1, name: "JavaScript" },
    { id: 2, name: "Python" },
    { id: 3, name: "Java" },
    { id: 4, name: "Ruby on Rails" },
    { id: 5, name: "React" },
    { id: 6, name: "Angular" },
  ];

  const [selectedCountry, setSelectedCountry] = useState(countries[0].name);
  const [selectedTechnology, setSelectedTechnology] = useState(
    technologies[0].name
  );

  function showCountry(e) {
    const selectedId = e.target.value;
    const country = countries.find((c) => c.id === parseInt(selectedId));
    setSelectedCountry(country.name);
    setCountry(selectedId);
  }

  function showTechnology(e) {
    const selectedId = e.target.value;
    const technology = technologies.find((t) => t.id === parseInt(selectedId));
    setSelectedTechnology(technology.name);
  }

  return (
    <div className="container">
      <div className="title">
        <h4>
          TOP DEVELOPERS <span>IN {selectedTechnology}</span>
        </h4>{" "}
        <span> From {selectedCountry}</span>
      </div>
      <div className="filters">
        <select className="filter-select" onChange={showCountry}>
          {countries.map((country, index) => (
            <option key={index} value={country.id}>
              {country.name}
            </option>
          ))}
        </select>
        <select className="filter-select" onChange={showTechnology}>
          {technologies.map((technology, index) => (
            <option key={index} value={technology.id}>
              {technology.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Navbar;
