import React from "react";
import useFetch from "../hooks/useFetch";

const Practice = () => {
  const url = `https://jsonplaceholder.typicode.com/users`;

  const { data, loading, error } = useFetch(url);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  console.log(data);

  return (
    <div>
      {data.map((item) => {
        return (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <h3>{item.email}</h3>
            <p>{item.company.name}</p>
            <p>{item.company.bs}</p>
            <p>{item.address.geo.lat}</p>
            <p>{item.address.geo.lng}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Practice;
