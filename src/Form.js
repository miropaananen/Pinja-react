import React, { useState } from 'react';

export default function Form() {
  const [data, setData] = useState([]);
  const [id, setId] = useState(1);


  const handleSubmit = (e) => {
    e.preventDefault();

    // Add the new data to the existing data array
    setData([...data, {id, name: e.target.name.value, description: e.target.description.value, comment:e.target.comment.value }]);

    // Save the data array to local storage
    localStorage.setItem('data', JSON.stringify(data));

    // Clear the form
    e.target.name.value = '';
    e.target.description.value = '';
    e.target.comment.value = '';

    //iterate id every time data is saved
    setId(id + 1);

    console.log(e);

  };

  const handleDelete = (id) => {
    // Remove the item with the specified ID from the data array
    setData(data.filter((item) => item.id !== id));

    // Remove the item from local storage
    localStorage.removeItem(id);
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
        Description
        <input type="text" name="description" />
      </label>
      <br />
      <label>
        Comment
        <input type="text" name="comment" />
      </label>
      <br />
      <button type="submit">Save</button>
    </form>

  <div className='Listview'>
    {data.map((item) => <div key={item.id}> {item.name} {item.description} <button onClick={() => handleDelete(item.id)}>Delete</button></div>)}
  </div>
  </div>

  );
}
