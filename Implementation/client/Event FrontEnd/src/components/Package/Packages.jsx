import React, { useEffect, useState } from "react";
import Package from "./Event";
import axios from 'axios';
const URL = "http://localhost:5000/packages";


const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

const Packages = () => {
  const [packages, setPackages] = useState();
  useEffect(() => {
    fetchHandler()
      .then(data => setPackages(data.packages))

  }, []);
  console.log(packages);

  function filterContent(profile, searchTerm) {
    console.log(profile)
    console.log(searchTerm)
    const result = profile.filter(
      (r) =>
        r.name.toLowerCase().includes(searchTerm.toLowerCase())

    );
    setPackages(result);
  }



  const handleTextSearch = (e) => {
    const searchTerm = e.currentTarget.value;
    axios.get("http://localhost:5000/packages").then((res) => {
      if (res.data.packages) {
        filterContent(res.data.packages, searchTerm);
      }
    });
  };

  return (
    <>
      <div className="flex items-center m-[150px] ml-[800px]">
        <div className="flex space-x-8">
        <input
  type="text" onChange={handleTextSearch}
  className="block w-full px-14 py-5 text-purple-800 bg-white border rounded-full focus:border-purple-800 focus:ring-purple-800 focus:outline-none focus:ring focus:ring-opacity-40 text-lg"
  placeholder="Search..."
/>

          <button className="px-10 py-6 text-white bg-purple-600 rounded-full ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-6"
              fill="none"
              viewBox="0 0 34 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>


      <div>
        <ul>
          {packages &&
            packages.map((packag, i) => (
              <li key={i}>
                <Package packag={packag} />
              </li>
            ))}
        </ul>
      </div>
    </>
  )
}

export default Packages;