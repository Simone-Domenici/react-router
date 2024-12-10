import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import PostCard from "../../components/PostCard";

export default function Index() {
    const [posts, setPosts] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const postsPerPage = 4; // Numero di post per pagina

    function fetchPosts() {
        axios
            .get(`http://localhost:3000/posts`)
            .then((res) => {
                setPosts(res.data);
                setFilteredPosts(res.data); // Inizialmente tutti i post sono filtrati
            })
            .catch((err) => {
                console.error(err);
            });
    }

    useEffect(() => {
        fetchPosts();
    }, []);

    // Gestisce il filtro dei post in base al titolo
    const handleFilter = (e) => {
        const value = e.target.value.toLowerCase();
        setSearchTerm(value);
        const filtered = posts.filter((post) =>
            post.title.toLowerCase().includes(value)
        );
        setFilteredPosts(filtered);
        setCurrentPage(1); // Resettiamo la pagina corrente quando si filtra
    };

    // Calcola gli indici dei post per la pagina corrente
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

    // Cambia pagina
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    // Calcola il numero totale di pagine
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

    return (
        <main>
            <section>
                <div className="all-posts">
                    <div className="wrapper">
                        <h2 className="title">All Posts</h2>
                        <Link className="link" to="/posts/create">
                            Nuovo post
                        </Link>
                    </div>
                    <input
                        type="text"
                        placeholder="Filter by title..."
                        value={searchTerm}
                        onChange={handleFilter}
                        className="filter-input"
                    />
                </div>

                <div className="all-posts">
                    <ul className="post-grid">
                        {currentPosts.map((post) => (
                            <li key={post.id}>
                                <PostCard onDelete={() => fetchPosts()} post={post} />
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Paginazione */}
                <div className="pagination">
                    {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                        (page) => (
                            <button
                                key={page}
                                onClick={() => handlePageChange(page)}
                                className={`page-button ${page === currentPage ? "active" : ""
                                    }`}
                                disabled={page === currentPage}
                            >
                                {page}
                            </button>
                        )
                    )}
                </div>
            </section>
        </main>
    );
}
