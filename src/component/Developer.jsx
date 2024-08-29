import Heading from "./Heading";

function Developer({ setSearch, setFilter }) {
  const options = [
    { value: "rank", label: "Rank" },
    { value: "name", label: "Name" },
    { value: "points", label: "Points" },
    { value: "city", label: "City" },
    { value: "countryCode", label: "Country" },
  ];

  function handleSelect(e) {
    setFilter(e.target.value);
  }

  return (
    <>
      <Heading />
      <div className="sort">
        <div>
          <input
            type="text"
            placeholder="Find the Top developer"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div>
          <select className="filter-select" onChange={handleSelect}>
            {options.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <table className="developer-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Profiles</th>
            <th>Country</th>
            <th>City</th>
            <th>Points</th>
          </tr>
        </thead>
      </table>
    </>
  );
}

export default Developer;
