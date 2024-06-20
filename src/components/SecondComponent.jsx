import React from "react";

// props

const SecondComponent = () => {
  const data = [
    {
      name: "john",
      age: 22,
      email: "abc@gmail.com",
    },
    {
      name: "john1",
      age: 25,
      email: "atbc@gmail.com",
    },
    {
      name: "john2",
      age: 27,
      email: "fabc@gmail.com",
    },
  ];

  const NewComponent = ({ data }) => {
    console.log(data);
    return (
      <div className="container">
        {data.map((item) => {
          const { name, age, email } = item;
          return (
            <div key={age}>
              <h2>name:{name}</h2>
              <h2>Age: {age}</h2>
              <h2>Email: {email}</h2>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div>
      <NewComponent data={data} />
    </div>
  );
};

export default SecondComponent;
