import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function CreatePost() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
      title: "",
      content: "",
      image: "",
      tags: [],
      published: true,
      category: "",
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: name === "tags" ? value.split(",").map((tag) => tag.trim()) : value,
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();

      const newPost = { ...formData};
  
      axios
        .post("http://localhost:3000/posts", newPost)
        .then(() => {
          navigate("/posts");
        })
        .catch((err) => {
          console.error(err);
        });
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <h2>Create a New Post</h2>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Content:
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Image URL:
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
        </label>
        <label>
          Tags (comma-separated):
          <input
            type="text"
            name="tags"
            value={formData.tags.join(", ")}
            onChange={handleChange}
          />
        </label>
        <label>
          Published:
          <select
            name="published"
            value={formData.published}
            onChange={handleChange}
          >
            <option value={true}>True</option>
            <option value={false}>False</option>
          </select>
        </label>
        <label>
          Category:
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Create Post</button>
      </form>
    );
  }
