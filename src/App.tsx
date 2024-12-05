
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from "react-router-dom";
import BookList from "./components/BookList";
import LocalBookList from "./components/LocalBookList";
import CreateBook from "./components/CreateBook";
import EditBook from "./components/EditBook";
import ViewBook from "./components/ViewBook";
import "./styles/App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app-container">
          <nav className="navbar">
            <h1>Book Manager</h1>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/create">Add Book</Link></li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<LocalBookList />} />
            <Route path="/create" element={<CreateBook />} />
            <Route path="/edit/:id" element={<EditBook />} />
            <Route path="/view/:id" element={<ViewBook />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;


