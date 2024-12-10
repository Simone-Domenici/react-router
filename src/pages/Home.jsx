import React, {useEffect, useState} from 'react';
// import posts from '../data/posts';
import PostCard from '../components/PostCard';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Home() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3000/posts`)
      .then(res => setPosts(res.data.slice(0, 3)))
      .catch(err => console.error(err));
  }, []);

  return (
    <main>
      <section className="featured">
        <h2>Featured Posts</h2>
        <div className="post-grid">
          {posts.map((post) => (
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
