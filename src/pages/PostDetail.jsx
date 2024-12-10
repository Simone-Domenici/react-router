import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function PostDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [maxId, setMaxId] = useState(0);

  useEffect(() => {
    axios.get(`http://localhost:3000/posts/${id}`)
      .then(res => setPost(res.data))
      .catch(err => console.error(err));
  }, [id]);

  useEffect(() => {
    axios.get(`http://localhost:3000/posts`)
      .then(res => setMaxId(res.data.length))
      .catch(err => console.error(err));
  }, []);

  const deletePost = () => {
    axios.delete(`http://localhost:3000/posts/${id}`)
      .then(() => navigate('/posts'))
      .catch(err => console.error(err));
  };

  if (!post) return( 
      <>
      <p>Impossibile caricare il post</p>
      <Link to='/'>Torna alla Homepage</Link>
      </>
  );

  const currentId = parseInt(id);

  return (
    <div className="post-detail">
      <h1>{post.title}</h1>
      <img src={post.image} alt={post.title} />
      <p>{post.content}</p>
      <div>
      <Link
          to={`/posts/${currentId - 1}`}
          className={currentId <= 1 ? "disabled" : ""}
          style={{ pointerEvents: currentId <= 1 ? "none" : "auto" }}
        >
          &laquo; Previous
        </Link>
        <Link
          to={`/posts/${currentId + 1}`}
          className={currentId >= maxId ? "disabled" : ""}
          style={{ pointerEvents: currentId >= maxId ? "none" : "auto" }}
        >
          Next &raquo;
        </Link>
      </div>
      <button onClick={deletePost}>Delete Post</button>
    </div>
  );
}
