import { useState, useContext } from "react";

import { LibraryContext } from "../context/LibraryContext";

import { v4 as uuidv4 } from "uuid";

function AddBookForm() {
  const { dispatch } = useContext(LibraryContext);

  const [title, setTitle] = useState("");

  const [author, setAuthor] = useState("");

  const [year, setYear] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !author || !year) {
      alert("Fill all fields");

      return;
    }

    const newBook = {
      id: uuidv4(),

      title,

      author,

      year,
    };

    dispatch({
      type: "ADD_BOOK",

      payload: newBook,
    });

    setTitle("");
    setAuthor("");
    setYear("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Book title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />

      <input
        type="number"
        placeholder="Year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />

      <button>Add Book</button>
    </form>
  );
}

export default AddBookForm;
