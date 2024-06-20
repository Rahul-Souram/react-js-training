import React, { useState } from "react";

const FormComp = () => {
  const [input, setInput] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email } = input;
    console.log(`my name is ${name}, my email is ${email}`);
  };

  //   create a form with one input when click on submission it should store value and show on browser

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" id="" onChange={handleChange} />
        <input type="email" name="email" id="" onChange={handleChange} />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default FormComp;
