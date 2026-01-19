// Navigation bar component
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
      <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
      <Link to="/books/all" style={{ marginRight: "10px" }}>Browse Books</Link>
      <Link to="/add">Add Book</Link>
    </nav>
  );
}

export default Navbar;

