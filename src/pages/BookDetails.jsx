import { useParams } from "react-router-dom";

import { useContext } from "react";

import { LibraryContext } from "../context/LibraryContext";

function BookDetails() {
  const { id } = useParams();

  const { books } = useContext(LibraryContext);

  const book = books.find((b) => b.id.toString() === id);

  if (!book) {
    return <h2>Book not found</h2>;
  }

  return (
    <div className="container">
      <div className="card">
        <h2>{book.title}</h2>

        <p>
          <b>Author:</b> {book.author}
        </p>

        <p>
          <b>Year:</b> {book.year}
        </p>

        <p>
          <b>ID:</b> {book.id}
        </p>
      </div>
    </div>
  );
}

export default BookDetails;
