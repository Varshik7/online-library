// Book details page
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";


function BookDetails() {
  const { id } = useParams();
  const book = useSelector(state =>
    state.books.find(b => b.id === id)
  );

  if (!book) return <h2>Book not found</h2>;


  return (
    <div>
      <h1>{book.title}</h1>
      <p>{book.author}</p>
      <p>{book.description}</p>
      <p>Rating: {book.rating}</p>

      <Link to="/books/all">⬅ Back to Browse</Link>
    </div>
  );
}

export default BookDetails;


