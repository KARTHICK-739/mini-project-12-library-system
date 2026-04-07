import { createContext, useReducer, useEffect } from "react";

import LibraryReducer from "./LibraryReducer";

export const LibraryContext = createContext();

export const LibraryProvider = ({ children }) => {
  const initialState = {
    books: JSON.parse(localStorage.getItem("books")) || [
      {
        id: 1,
        title: "Atomic Habits",
        author: "James Clear",
        year: 2018,
      },

      {
        id: 2,
        title: "Deep Work",
        author: "Cal Newport",
        year: 2016,
      },
    ],
  };

  const [state, dispatch] = useReducer(LibraryReducer, initialState);

  /* SAVE BOOKS */

  useEffect(() => {
    localStorage.setItem(
      "books",

      JSON.stringify(state.books),
    );
  }, [state.books]);

  return (
    <LibraryContext.Provider
      value={{
        books: state.books,

        dispatch,
      }}
    >
      {children}
    </LibraryContext.Provider>
  );
};
