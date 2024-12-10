import React from 'react';
import { Link } from 'react-router-dom';

export default function PostCard({ post }) {
  return (
    <div className="post">
      <h3>{post.title}</h3>
      <img src={post.image} alt={post.title} />
      <p>{post.content}</p>
      <Link to={`/posts/${post.id}`} className="view-detail">
        View Details
      </Link>
    </div>
  );
};
