import { useEffect, useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import PostCard from '../../components/PostCard';

export default function Index() {

  const [posts,setPosts] = useState([])

  function fetchPosts() {
    axios.get(`http://localhost:3000/posts`)
    .then(res => {
      setPosts(res.data)
    })
    .catch(err => {
      console.error(err)
    })
  }

  useEffect(() => {
    fetchPosts()
  },[])

  return (
    <main>
      <section>
        <div className='all-posts'>
          <h2 className='title'>All Posts</h2>
          <Link className='link' to="/posts/create">Nuovo post</Link>
        </div>
        <div className="all-posts">
          <ul className='post-grid'>
            {posts.map(post => (
              <li key={post.id}>
                <PostCard onDelete={() => fetchPosts()} post={post}/>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}
