import React, { useState, useRef } from "react";

export default function Form() {
  const [data, setData] = useState([]);
  const [id, setId] = useState(1);
  const formRef = useRef(null);
  const formNameRef = useRef(null);
  const formDescriptionRef = useRef(null);
  const formCommentRef = useRef(null);

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

    // Save the data array to local storage
    localStorage.setItem("data", JSON.stringify(data));

    // Clear the form
    e.target.name.value = "";
    e.target.description.value = "";
    e.target.comment.value = "";

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

  const handleDetails = (id) => {
    console.log("Toimii");
    console.log(id);
    return <div>{id}</div>;
  };

  const handleClear = () => {
    formNameRef.current.value = "";
    formDescriptionRef.current.value = "";
    formCommentRef.current.value = "";
  };

  //console.log(data);
  console.log("foreach Javascrip objekti");
  console.log(data);

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
            {" "}
            {item.name} {item.description}{" "}
            <button onClick={() => handleDelete(item.id)}>Delete</button>{" "}
            <button onClick={() => handleDetails(item.id)}>Details</button>{" "}
          </div>
        ))}
      </div>
    </div>
  );
}
