import React from 'react';
import posts from '../data/posts';

function Home(){
  return (
    <main>
      <section className="featured">
        <h2>Featured Posts</h2>
        <div className="post-grid">
            {/* Qui andranno i post */}
        </div>
      </section>
    </main>
  );
};

export default Home;
