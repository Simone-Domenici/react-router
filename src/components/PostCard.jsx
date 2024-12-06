import React from 'react';

export default function PostCard({ post }) {
  return (
    <div className="post">
      <h3>{post.title}</h3>
      <img src={post.image} alt={post.title} />
      <p>{post.content}</p>
    </div>
  );
};
