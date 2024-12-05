import React, { Component } from "react";
import { Book } from "../interfaces/BookInterfaces";
import { getBookById } from "../services/bookService";
import { Link } from "react-router-dom";
import { withRouter, RouteComponentProps } from "../utils/withRouter"; // Custom HOC for routing

interface MatchParams {
  id: string;
}

interface ViewBookProps extends RouteComponentProps<MatchParams> {}

interface ViewBookState {
  book: Book | null;
  loading: boolean;
  error: string | null;
}

class ViewBook extends Component<ViewBookProps, ViewBookState> {
  constructor(props: ViewBookProps) {
    super(props);
    this.state = {
      book: null,
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    const { id } = this.props.params; // Extract 'id' from the params
    this.fetchBookDetails(id);
  }

  async fetchBookDetails(id: string) {
    try {
      const book = await getBookById(id);
      this.setState({ book, loading: false });
    } catch (error: any) {
      this.setState({
        error: error.message || "Failed to fetch book details",
        loading: false,
      });
    }
  }

  render() {
    const { book, loading, error } = this.state;

    if (loading) {
      return <div>Loading book details...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    if (!book) {
      return <div>Book not found.</div>;
    }

    return (
      <div className="view-book">
        <h2>View Book</h2>
        <div>
          <strong>Title:</strong> {book.title}
        </div>
        <div>
          <strong>Author:</strong> {book.author}
        </div>
        <div>
          <Link to="/">Back to Book List</Link>
        </div>
      </div>
    );
  }
}

export default withRouter(ViewBook);
