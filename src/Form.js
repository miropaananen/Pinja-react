import React, { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save the form data to local storage
    localStorage.setItem('name', name);
    localStorage.setItem('description', description);
    localStorage.setItem('comment', comment);

    // Clear the form
    setName('');
    setDescription('');
    setComment('');
  };

  const handleClear = () => {
    // Clear the form when pressing the clear button
    setName('');
    setDescription('');
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Description:
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <br />
      <label>
        Comment:
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Add</button>
      <button onClick={handleClear}>Clear</button>
    </form>
  );
}

export default Form;