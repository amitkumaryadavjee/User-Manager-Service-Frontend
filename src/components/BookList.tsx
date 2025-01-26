
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchBookRequest } from "../redux/actions/bookActions";
import { Book } from "../interfaces/BookInterfaces";
import { RootState } from "../redux/store";
import { getBooks, deleteBook } from "../services/bookService";

interface StateProps {
  books: Book[];
  loading: boolean;
}

interface DispatchProps {
  
}

type Props = StateProps ;

class BookList extends Component<Props> {
  componentDidMount() {
    //this.props.fetchBooks();
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
    const { books, loading } = this.props;

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
                    <button onClick={() => this.handleDelete(book.id)}>
                      Delete
                    </button>
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

const mapStateToProps = (state: RootState): StateProps => ({
  books: state.bookReducer.books, 
  loading: state.bookReducer.loading, 
});

const mapDispatchToProps = (dispatch: any): DispatchProps => ({
  fetchBooks: () => dispatch(fetchBookRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
