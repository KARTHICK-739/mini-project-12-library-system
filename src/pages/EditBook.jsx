import { useParams } from "react-router-dom";

import { useContext, useState } from "react";

import { LibraryContext } from "../context/LibraryContext";

import { useNavigate } from "react-router-dom";

function EditBook() {
  const { id } = useParams();

  const navigate = useNavigate();

  const { books, dispatch } = useContext(LibraryContext);

  const book = books.find((b) => b.id.toString() === id);

  const [title, setTitle] = useState(book.title);

  const [author, setAuthor] = useState(book.author);

  const [year, setYear] = useState(book.year);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: "UPDATE_BOOK",

      payload: {
        id: book.id,

        title,

        author,

        year,
      },
    });

    navigate("/");
  };

  return (
    <div className="container">
      <h2>Edit Book</h2>

      <form onSubmit={handleSubmit}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />

        <input value={author} onChange={(e) => setAuthor(e.target.value)} />

        <input value={year} onChange={(e) => setYear(e.target.value)} />

        <button>Save Changes</button>
      </form>
    </div>
  );
}

export default EditBook;
