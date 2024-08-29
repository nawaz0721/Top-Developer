import { useState } from "react";
import "./App.css";
import Header from "./component/Header";
import Navbar from "./component/Navbar";
import Developer from "./component/Developer";
import Table from "./component/Table";
import Pagination from "./component/Pagination";

function App() {
  const users = [
    {
      name: "John Doe",
      rank: 1,
      points: 1500,
      countryCode: "US",
      city: "New York",
      githubUrl: "https://github.com/johndoe",
    },
    {
      name: "Jane Smith",
      rank: 2,
      points: 1400,
      countryCode: "GB",
      city: "London",
      githubUrl: "https://github.com/janesmith",
    },
    {
      name: "Ahmed Khan",
      rank: 3,
      points: 1350,
      countryCode: "PK",
      city: "Karachi",
      githubUrl: "https://github.com/ahmedkhan",
    },
    {
      name: "Maria Garcia",
      rank: 4,
      points: 1300,
      countryCode: "ES",
      city: "Madrid",
      githubUrl: "https://github.com/mariagarcia",
    },
    {
      name: "Liu Wei",
      rank: 5,
      points: 1250,
      countryCode: "CN",
      city: "Beijing",
      githubUrl: "https://github.com/liu-wei",
    },
    {
      name: "David Miller",
      rank: 6,
      points: 1200,
      countryCode: "CA",
      city: "Toronto",
      githubUrl: "https://github.com/davidmiller",
    },
    {
      name: "Chloe Brown",
      rank: 7,
      points: 1150,
      countryCode: "AU",
      city: "Sydney",
      githubUrl: "https://github.com/chloebrown",
    },
    {
      name: "Satoshi Nakamura",
      rank: 8,
      points: 1100,
      countryCode: "JP",
      city: "Tokyo",
      githubUrl: "https://github.com/satoshinakamura",
    },
    {
      name: "Elena Petrova",
      rank: 9,
      points: 1050,
      countryCode: "RU",
      city: "Moscow",
      githubUrl: "https://github.com/elenapetrova",
    },
    {
      name: "Pedro Santos",
      rank: 10,
      points: 1000,
      countryCode: "BR",
      city: "São Paulo",
      githubUrl: "https://github.com/pedrosantos",
    },
    {
      name: "Hannah Lee",
      rank: 11,
      points: 980,
      countryCode: "KR",
      city: "Seoul",
      githubUrl: "https://github.com/hannahlee",
    },
    {
      name: "Ravi Patel",
      rank: 12,
      points: 960,
      countryCode: "IN",
      city: "Mumbai",
      githubUrl: "https://github.com/ravipatel",
    },
    {
      name: "Sophia Kim",
      rank: 13,
      points: 940,
      countryCode: "KR",
      city: "Busan",
      githubUrl: "https://github.com/sophiakim",
    },
    {
      name: "Carlos Alvarez",
      rank: 14,
      points: 920,
      countryCode: "MX",
      city: "Mexico City",
      githubUrl: "https://github.com/carlosalvarez",
    },
    {
      name: "Amina Hassan",
      rank: 15,
      points: 900,
      countryCode: "NG",
      city: "Lagos",
      githubUrl: "https://github.com/aminahassan",
    },
    {
      name: "Oliver Wilson",
      rank: 16,
      points: 880,
      countryCode: "NZ",
      city: "Auckland",
      githubUrl: "https://github.com/oliverwilson",
    },
    {
      name: "Yara El-Sayed",
      rank: 17,
      points: 860,
      countryCode: "EG",
      city: "Cairo",
      githubUrl: "https://github.com/yaraelsayed",
    },
    {
      name: "Hans Müller",
      rank: 18,
      points: 840,
      countryCode: "DE",
      city: "Berlin",
      githubUrl: "https://github.com/hansmuller",
    },
    {
      name: "Alice Dupont",
      rank: 19,
      points: 820,
      countryCode: "FR",
      city: "Paris",
      githubUrl: "https://github.com/alicedupont",
    },
    {
      name: "Ivan Popov",
      rank: 20,
      points: 800,
      countryCode: "RU",
      city: "Saint Petersburg",
      githubUrl: "https://github.com/ivanpopov",
    },
    {
      name: "Emily Johnson",
      rank: 21,
      points: 1500,
      countryCode: "US",
      city: "New York",
      githubUrl: "https://github.com/emilyjohnson",
    },
    {
      name: "Michael Brown",
      rank: 22,
      points: 1400,
      countryCode: "GB",
      city: "London",
      githubUrl: "https://github.com/michaelbrown",
    },
    {
      name: "Sara Malik",
      rank: 23,
      points: 1350,
      countryCode: "PK",
      city: "Karachi",
      githubUrl: "https://github.com/saramalik",
    },
    {
      name: "Carlos Martinez",
      rank: 24,
      points: 1300,
      countryCode: "ES",
      city: "Madrid",
      githubUrl: "https://github.com/carlosmartinez",
    },
    {
      name: "Zhang Wei",
      rank: 25,
      points: 1250,
      countryCode: "CN",
      city: "Beijing",
      githubUrl: "https://github.com/zhangwei",
    },
    {
      name: "Victoria Johnson",
      rank: 26,
      points: 1200,
      countryCode: "CA",
      city: "Toronto",
      githubUrl: "https://github.com/victoriajohnson",
    },
    {
      name: "Ethan Anderson",
      rank: 27,
      points: 1150,
      countryCode: "AU",
      city: "Sydney",
      githubUrl: "https://github.com/ethananderson",
    },
    {
      name: "Kenji Tanaka",
      rank: 28,
      points: 1100,
      countryCode: "JP",
      city: "Tokyo",
      githubUrl: "https://github.com/kenjitanaka",
    },
    {
      name: "Anna Ivanova",
      rank: 29,
      points: 1050,
      countryCode: "RU",
      city: "Moscow",
      githubUrl: "https://github.com/annaivanova",
    },
    {
      name: "Rodrigo Souza",
      rank: 30,
      points: 1000,
      countryCode: "BR",
      city: "São Paulo",
      githubUrl: "https://github.com/rodrigosouza",
    },
    {
      name: "Mina Park",
      rank: 31,
      points: 980,
      countryCode: "KR",
      city: "Seoul",
      githubUrl: "https://github.com/minapark",
    },
    {
      name: "Priya Sharma",
      rank: 32,
      points: 960,
      countryCode: "IN",
      city: "Mumbai",
      githubUrl: "https://github.com/priyasharma",
    },
    {
      name: "Hyeon Kim",
      rank: 33,
      points: 940,
      countryCode: "KR",
      city: "Busan",
      githubUrl: "https://github.com/hyeonkim",
    },
    {
      name: "Gabriela Ramirez",
      rank: 34,
      points: 920,
      countryCode: "MX",
      city: "Mexico City",
      githubUrl: "https://github.com/gabrielaramirez",
    },
    {
      name: "Fatima Abubakar",
      rank: 35,
      points: 900,
      countryCode: "NG",
      city: "Lagos",
      githubUrl: "https://github.com/fatimaabubakar",
    },
    {
      name: "Jack Thompson",
      rank: 36,
      points: 880,
      countryCode: "NZ",
      city: "Auckland",
      githubUrl: "https://github.com/jackthompson",
    },
    {
      name: "Noor Al-Farsi",
      rank: 37,
      points: 860,
      countryCode: "EG",
      city: "Cairo",
      githubUrl: "https://github.com/nooralfarsi",
    },
    {
      name: "Lukas Schneider",
      rank: 38,
      points: 840,
      countryCode: "DE",
      city: "Berlin",
      githubUrl: "https://github.com/lukasschneider",
    },
    {
      name: "Claire Dubois",
      rank: 39,
      points: 820,
      countryCode: "FR",
      city: "Paris",
      githubUrl: "https://github.com/clairedubois",
    },
    {
      name: "Dmitry Sokolov",
      rank: 40,
      points: 800,
      countryCode: "RU",
      city: "Saint Petersburg",
      githubUrl: "https://github.com/dmitrysokolov",
    },
  ];

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("name");
  const [country, setCountry] = useState("");

  const filtered = users.filter((data) => {
    const searchValue = search.toLowerCase();
    const filterValue = data[filter].toString().toLowerCase();
    return filterValue.includes(searchValue);
  });

  return (
    <>
      <Header />
      <Navbar setCountry={setCountry} country={country} />
      <Developer setSearch={setSearch} setFilter={setFilter} />
      {filtered.map((data, index) => (
        <Table
          key={index}
          name={data.name}
          rank={data.rank}
          points={data.points}
          countryCode={data.countryCode}
          city={data.city}
          githubUrl={data.githubUrl}
        />
      ))}
      <Pagination />
    </>
  );
}

export default App;
