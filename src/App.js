import { HashRouter, Routes, Route } from "react-router-dom"; // ← HashRouter
import BookDetails from "./pages/BookDetails";
import Navbar from "./components/Navbar";
import AddBook from "./pages/AddBook";
import "./App.css";
import EditBook from "./pages/EditBook";
import Home from "./pages/Home";

function App() {
  return (
    <HashRouter>
      {" "}
      {/* ← changed */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddBook />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/edit/:id" element={<EditBook />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
