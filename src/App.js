import React, { useState } from 'react';
import './App.css'; // Import CSS file for styling

const books = [
  { title: 'Harry Potter', genre: 'Suspense', author: 'J.K. Rowling' },
  { title: 'The Lord of the Rings', genre: 'Fantasy', author: 'J.R.R. Tolkien' },
  { title: 'The Great Gatsby', genre: 'Fiction', author: 'F. Scott Fitzgerald' },
  { title: 'The Alchemist', genre: 'Adventure', author: 'Paulo Coelho' },
];

const BookList = () => {
  const [isGrid, setIsGrid] = useState(true);

  const toggleView = () => {
    setIsGrid(!isGrid);
  };

  return (
    <div className="book-list-container">
      <h2>Book List</h2>
      <button onClick={toggleView}>{isGrid ? 'List View' : 'Grid View'}</button>
      {isGrid ? (
        <div className="book-grid">
          {books.map((book) => (
            <div key={book.title} className="book-card">
              <div className="book-details">
                <h3>{book.title}</h3>
                <p>{book.genre} - {book.author}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <table className="book-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Author</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.title}>
                <td>{book.title}</td>
                <td>{book.genre}</td>
                <td>{book.author}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default BookList;
