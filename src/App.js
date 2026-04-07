import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookDetails from "./pages/BookDetails";
import Navbar from "./components/Navbar";
import AddBook from "./pages/AddBook";
import "./App.css";
import EditBook from "./pages/EditBook";



import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/add" element={<AddBook />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/edit/:id" element={<EditBook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
