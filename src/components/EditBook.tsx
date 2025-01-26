import React, { Component } from "react";
import { getBookById, updateBook } from "../services/bookService";
import { Book } from "../interfaces/BookInterfaces";
import { Navigate, useParams } from "react-router-dom";
import BookForm from "./BookForm";

interface State {
  title: string;
  author: string;
  redirect: boolean;
}

class EditBook extends Component<{ id: string }, State> {
  state: State = {
    title: "",
    author: "",
    redirect: false,
  };

  async componentDidMount() {
    const book = await getBookById(this.props.id);
    this.setState({ title: book.title, author: book.author });
  }
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    } as unknown as Pick<State, keyof State>);
  };

  handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { title, author } = this.state;
    await updateBook({ id: this.props.id, title, author });
    this.setState({ redirect: true });
  };

  render() {
    if (this.state.redirect) {
      return <Navigate to="/" />;
    }

    return (
      <div className="edit-book">
        <h2>Edit Book</h2>
        <BookForm
          title={this.state.title}
          author={this.state.author}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          buttonText="Update"
        />
        {/* <form onSubmit={this.handleSubmit}>
          <label>Title:</label>
          <input type="text" name="title" value={this.state.title} onChange={this.handleChange} required />
          <label>Author:</label>
          <input type="text" name="author" value={this.state.author} onChange={this.handleChange} required />
          <button type="submit">Update</button>
        </form> */}
      </div>
    );
  }
}

export default (props: any) => {
  const { id } = useParams<{ id: string }>();
  return <EditBook id={id || ""} />;
};
