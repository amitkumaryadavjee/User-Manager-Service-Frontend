import { Book } from "../interfaces/BookInterfaces";

// Mock Data for Simulated API
let books: Book[] = [
  { id: "1", title: "1984", author: "George Orwell" },
  { id: "2", title: "To Kill a Mockingbird", author: "Harper Lee" },
];

// Fetch all books
export const getBooks = async (): Promise<Book[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(books), 500); // Simulated delay
  });
};

// Fetch a book by ID
export const getBookById = async (id: string): Promise<Book> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const book = books.find((b) => b.id === id);
      if (book) {
        resolve(book);
      } else {
        reject(new Error("Book not found"));
      }
    }, 500);
  });
};

// Create a new book
export const createBook = async (book: Book): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      books.push({ ...book, id: String(books.length + 1) });
      resolve();
    }, 500);
  });
};

// Update an existing book
export const updateBook = async (updatedBook: Book): Promise<void> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const index = books.findIndex((b) => b.id === updatedBook.id);
      if (index !== -1) {
        books[index] = updatedBook;
        resolve();
      } else {
        reject(new Error("Book not found"));
      }
    }, 500);
  });
};

// Delete a book by ID
export const deleteBook = async (id: string): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      books = books.filter((b) => b.id !== id);
      resolve();
    }, 500);
  });
};
