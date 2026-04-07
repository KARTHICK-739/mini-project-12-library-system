import { useState } from "react";

function SearchBar({ setSearch }) {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);

    setSearch(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search books..."
      value={text}
      onChange={handleChange}
    />
  );
}

export default SearchBar;
