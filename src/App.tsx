
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from "react-router-dom";
import UserList from "./components/UserList";
import CreateUser from "./components/CreateUser";
import EditUser from "./components/EditUser";
import ViewUser from "./components/ViewUser";
import "./styles/App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app-container">
          <nav className="navbar">
            <h1>User Manager</h1>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/create">Add User</Link></li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<UserList />} />
            <Route path="/create" element={<CreateUser />} />
            <Route path="/edit/:id" element={<EditUser />} />
            <Route path="/view/:id" element={<ViewUser />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;


