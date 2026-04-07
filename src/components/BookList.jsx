import { useContext, useState } from "react";

import { LibraryContext } from "../context/LibraryContext";

import BookCard from "./BookCard";

import SearchBar from "./SearchBar";

function BookList() {
  const { books } = useContext(LibraryContext);

  const [search, setSearch] = useState("");

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      <SearchBar setSearch={setSearch} />

      {filteredBooks.length === 0 ? (
        <p>No books found</p>
      ) : (
        filteredBooks.map((book) => <BookCard key={book.id} book={book} />)
      )}
    </div>
  );
}

export default BookList;
  