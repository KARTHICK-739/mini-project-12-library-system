import { useContext } from "react";
import { LibraryContext } from "../context/LibraryContext";
import { Link } from "react-router-dom";


function BookCard({ book }) {
  const { dispatch } = useContext(LibraryContext);

  const deleteBook = () => {
    dispatch({
      type: "DELETE_BOOK",
      payload: book.id,
    });
  };

  return (
    <div className="card">
      <h3>{book.title}</h3>

      <p>Author: {book.author}</p>

      <p>Year: {book.year}</p>

      <Link to={`/book/${book.id}`}>
        <button>View</button>
      </Link>
      <Link to={`/edit/${book.id}`}>
        <button>Edit</button>
      </Link>

      <button onClick={deleteBook}>Delete</button>
    </div>
  );
}

export default BookCard;
