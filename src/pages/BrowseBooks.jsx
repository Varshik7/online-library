// Browse books with search functionality
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

function BrowseBooks() {
  const { category } = useParams();
  const books = useSelector(state => state.books);
  const [search, setSearch] = useState("");

  const filteredBooks = books.filter(book => {
    const matchCategory =
      category === "all" || book.category === category;

    const matchSearch =
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  return (
    <div>
      <h1>Browse Books</h1>

      <input
        placeholder="Search by title or author"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      {filteredBooks.map(book => (
        <div key={book.id}> 
          <h3>{book.title}</h3>
          <p>{book.author}</p>
          <Link to={`/book/${book.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
}

export default BrowseBooks;


