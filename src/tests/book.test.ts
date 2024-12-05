import { createBook, getBooks, deleteBook } from "../services/bookService";
import { Book } from "../interfaces/BookInterfaces";

describe("Book Service Tests", () => {
  it("should add a new book", async () => {
    const initialBooks = await getBooks();
    const newBook: Book = { id: "", title: "New Book", author: "New Author" };
    await createBook(newBook);
    const updatedBooks = await getBooks();
    expect(updatedBooks.length).toBe(initialBooks.length + 1);
    expect(updatedBooks[updatedBooks.length - 1].title).toBe("New Book");
  });

  it("should delete a book", async () => {
    const initialBooks = await getBooks();
    const bookToDelete = initialBooks[0];
    await deleteBook(bookToDelete.id);
    const updatedBooks = await getBooks();
    expect(updatedBooks.length).toBe(initialBooks.length - 1);
    expect(updatedBooks.find((b) => b.id === bookToDelete.id)).toBeUndefined();
  });

  it("should fetch all books", async () => {
    const books = await getBooks();
    expect(books.length).toBeGreaterThan(0);
  });
});
