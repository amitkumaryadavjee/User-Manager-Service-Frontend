import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Book } from "../interfaces/BookInterfaces";
import { getBooks, deleteBook } from "../services/bookService";
import {RootState} from "../redux/store"
import {fetchBookRequest} from '../redux/actions/bookActions'
import { AnyAction } from "redux-saga";

interface State {
  books: Book[];
  loading: boolean;
}

class LocalBookList extends Component<{}, State> {
  state: State = {
    books: [],
    loading: true,
  };

  componentDidMount() {
    this.fetchBooks();
  }

  fetchBooks = async () => {
    const books = await getBooks();
    this.setState({ books, loading: false });
  };

  handleDelete = async (id: string) => {
    await deleteBook(id);
    this.fetchBooks();
  };

  render() {
    const { books, loading } = this.state;
    return (
      <div className="book-list">
        <h2>Book List</h2>
        {loading ? (
          <p>Loading...</p>
        ) : books.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book) => (
                <tr key={book.id}>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>
                    <Link to={`/view/${book.id}`}>View</Link> |{" "}
                    <Link to={`/edit/${book.id}`}>Edit</Link> |{" "}
                    <button onClick={() => this.handleDelete(book.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No books available.</p>
        )}
      </div>
    );
  }
}

export default LocalBookList;