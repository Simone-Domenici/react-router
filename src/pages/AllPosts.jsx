import React from 'react';
import posts from '../data/posts';
import PostCard from '../components/PostCard.jsx';

export default function AllPosts() {
  return (
    <main>
      <section className="all-posts">
        <h2>All Posts</h2>
        <div className="post-grid">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </main>
  );
};

