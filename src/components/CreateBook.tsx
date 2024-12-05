import React, { Component } from "react";
import { createBook } from "../services/bookService";
import { Book } from "../interfaces/BookInterfaces";
import { Navigate } from "react-router-dom";
import { RootState } from "../redux/store";
import { connect } from "react-redux";
import { createBookRequest } from "../redux/actions/bookActions";
interface State {
  title: string;
  author: string;
  redirect: boolean;
}

interface StateProps {
  book: Book | null;
  loading: boolean;
}

interface DispatchProps {
  createBook: (book:Book) => void;
}
type Props = StateProps & DispatchProps;

class CreateBook extends Component<Props, State> {
  state: State = {
    title: "",
    author: "",
    redirect: false,
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    } as unknown as Pick<State, keyof State>);
  };

  
  handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("create book e",e)
    const { title, author } = this.state;
    const newBook: Book = { id: "", title, author };
   // this.props.createBook(newBook);
    await createBook(newBook);
    this.setState({ redirect: true });
  };

  render() {
    if (this.state.redirect) {
      return <Navigate to="/" />;
    }

    return (
      <div className="create-book">
        <h2>Create Book</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Title:</label>
          <input type="text" name="title" value={this.state.title} onChange={this.handleChange} required />
          <label>Author:</label>
          <input type="text" name="author" value={this.state.author} onChange={this.handleChange} required />
          <button type="submit">Create</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState): StateProps => ({
  book: state.bookReducer.book, 
  loading: state.bookReducer.loading, 
});

const mapDispatchToProps = (dispatch: any): DispatchProps => ({
  createBook: (book:Book) => dispatch(createBookRequest(book)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateBook);
