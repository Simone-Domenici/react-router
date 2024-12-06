import React from 'react';
import posts from '../data/posts';
import PostCard from '../components/PostCard';
import { Link } from 'react-router-dom';

function Home() {

  const featuredPosts = posts.slice(0, 3);

  return (
    <main>
      <section className="featured">
        <h2>Featured Posts</h2>
        <div className="post-grid">
          {featuredPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
        <div className="view-all">
          <Link to="/posts">View All Posts</Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
