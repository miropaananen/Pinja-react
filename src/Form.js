
import React, { useState } from 'react';
//import { useState } from 'react';

export default function Form() {
  const [data, setData] = useState([]);
  const [id, setId] = useState(1);


  const handleSubmit = (e) => {
    e.preventDefault();

    // Add the new data to the existing data array
    setData([...data, {id, name: e.target.name.value, email: e.target.email.value }]);

    // Save the data array to local storage
    localStorage.setItem('data', JSON.stringify(data));

    // Clear the form
    e.target.name.value = '';
    e.target.email.value = '';

    //iterate id every time data is saved
    setId(id + 1);

  };

  //console.log(data);
  console.log("foreach Javascrip objekti");
  console.log(data);

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email" />
      </label>
      <br />
      <button type="submit">Save</button>
    </form>

  <ul>
    {data.map((item) => <li key={item.id}> {item.name} {item.email}</li>)}
  </ul>
  </div>

  );
}
