import { useDispatch } from "react-redux";
import { addBook } from "../redux/booksSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function AddBook() {
  const [form, setForm] = useState({
    title: "",
    author: "",
    category: "",
    description: "",
    rating: ""
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = e => {
    e.preventDefault();

    if (
      !form.title ||
      !form.author ||
      !form.category ||
      !form.description ||
      !form.rating
    ) {
      alert("All fields are required");
      return;
    }

    dispatch(
      addBook({
        ...form,
        id: Date.now().toString()
      })
    );

    navigate("/books/all");
  };

  return (
    <form onSubmit={submitHandler}>
      <h1>Add Book</h1>

      <input placeholder="Title"
        onChange={e => setForm({ ...form, title: e.target.value })} />

      <input placeholder="Author"
        onChange={e => setForm({ ...form, author: e.target.value })} />

      <input placeholder="Category"
        onChange={e => setForm({ ...form, category: e.target.value })} />

      <input placeholder="Description"
        onChange={e => setForm({ ...form, description: e.target.value })} />

      <input placeholder="Rating"
        onChange={e => setForm({ ...form, rating: e.target.value })} />

      <button>Add Book</button>
    </form>
  );
}

export default AddBook;

