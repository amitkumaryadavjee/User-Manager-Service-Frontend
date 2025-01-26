import React, { Component } from "react";

interface BookFormProps {
  title: string;
  author: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  buttonText: string;
}

class BookForm extends Component<BookFormProps> {
  render() {
    const { title, author, onChange, onSubmit, buttonText } = this.props;

    return (
      <form onSubmit={onSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={onChange}
          required
        />
        <label>Author:</label>
        <input
          type="text"
          name="author"
          value={author}
          onChange={onChange}
          required
        />
        <button type="submit">{buttonText}</button>
      </form>
    );
  }
}

export default BookForm;
