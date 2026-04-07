import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import BookDetails from "./pages/BookDetails";
import Navbar from "./components/Navbar";
import AddBook from "./pages/AddBook";
import "./App.css";
import EditBook from "./pages/EditBook";
import Home from "./pages/Home";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddBook />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/edit/:id" element={<EditBook />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
