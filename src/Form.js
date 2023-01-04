import React, { useState, useRef, useEffect  } from "react";

export default function Form() {
  const [data, setData] = useState([]);
  const [id, setId] = useState(1);
  const formRef = useRef(null);
  const formNameRef = useRef(null);
  const formDescriptionRef = useRef(null);
  const formCommentRef = useRef(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add the new data to the existing data array
    setData([
      ...data,
      {
        id,
        name: e.target.name.value,
        description: e.target.description.value,
        comment: e.target.comment.value,
      },
    ]);

    // Clear the form
    e.target.name.value = "";
    e.target.description.value = "";
    e.target.comment.value = "";

    //iterate id every time data is saved
    setId(id + 1);

  };

   // Save the data array to local storage
    useEffect(() => {
      localStorage.setItem('data', JSON.stringify(data));
    }, [data]);

  const handleDelete = (id) => {
    // Remove the item with the specified ID from the data array
    setData(data.filter((item) => item.id !== id));

    // Remove the item from local storage
    localStorage.removeItem(String(id));
  };

  const handleDetails = (id) => {
    const item = data.find((item) => item.id === id);
    setSelectedItem(item);
  };

  const handleClear = () => {
    formNameRef.current.value = '';
    formDescriptionRef.current.value = '';
    formCommentRef.current.value = '';
  };

  return (
    <div>
      <form onSubmit={handleSubmit} ref={formRef}>
        <label>
          Name:
          <input type="text" name="name" ref={formNameRef} />
        </label>
        <br />
        <label>
          Description
          <input type="text" name="description" ref={formDescriptionRef} />
        </label>
        <br />
        <label>
          Comment
          <input type="text" name="comment" ref={formCommentRef} />
        </label>
        <br />
        <button type="submit">Save</button>
        <button type="button" onClick={handleClear}>
          Clear
        </button>
      </form>

      <div className="Listview">
      {data.map((item) => (
        <div key={item.id}>
          {item.name} {item.description}
          <button onClick={() => handleDelete(item.id)}>Delete</button>
          <button onClick={() => handleDetails(item.id)}>Details</button>
        </div>
      ))}
      {selectedItem && (
        <div>
          <h2>{selectedItem.name}</h2>
          <p>{selectedItem.description}</p>
          <button onClick={() => setSelectedItem(null)}>Close</button>
        </div>
      )}
      </div>
    </div>
  );
}
