import React, { useState, useRef, useEffect } from "react";

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
    localStorage.setItem("data", JSON.stringify(data));
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
    formNameRef.current.value = "";
    formDescriptionRef.current.value = "";
    formCommentRef.current.value = "";
  };

  return (
    <div>
      <form id="Form" onSubmit={handleSubmit} ref={formRef}>
        <div>
          <div className="FormTop">
          <div className="Form-row-name">
            <label>
              Name:
              <input className="form-control" type="text" name="name" ref={formNameRef} />
            </label>
          </div>
          <div className="Form-row-description">
            <label>
              Description
              <input className="form-control" type="text" name="description" ref={formDescriptionRef} />
            </label>
          </div>
          </div>
          <div>
            <label>
              Comment
              <input type="text" name="comment" ref={formCommentRef} />
            </label>
          </div>
        </div>

        <div className="Form-buttons-container">
          <button className="btn" type="submit">
            Save
          </button>
          <button className="btn" type="button" onClick={handleClear}>
            Clear
          </button>
        </div>
      </form>

      <div className="Listview">
        <div className="Header">
         <div className="item-field"><span>Name</span></div> <div className="item-field"> <span>Description</span></div> 
        </div>
        {data.map((item) => (
          <div className="Item-container" key={item.id}>
            <div className="name item-field"><span>{item.name}</span></div> 
            <div className="description item-field"><span>{item.description}</span></div>
            <div className="buttons-container">
            <button className="btn" onClick={() => handleDelete(item.id)}>Delete</button>
            <button className="btn" onClick={() => handleDetails(item.id)}>Details</button>
          </div>
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
