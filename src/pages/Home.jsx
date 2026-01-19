// Home page showing categories and popular books
import { Link } from "react-router-dom";
import books from "../data/books";

function Home() {
  return (
    <div>
      <h1>Welcome to Online Library</h1>

      <h2>Categories</h2>
      <ul>
        <li><Link to="/books/fiction">Fiction</Link></li>
        <li><Link to="/books/scifi">Sci-Fi</Link></li>
        <li><Link to="/books/nonfiction">Non-Fiction</Link></li>
      </ul>

      <h2>Popular Books</h2>
      {books.map(book => (
        <div key={book.id} className="book-card">
          <h3>{book.title}</h3>
          <p>{book.author}</p>
          <Link to={`/book/${book.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
}

export default Home;

