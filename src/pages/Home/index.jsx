//React
import { DotLoader } from 'react-spinners';

//styles
import styles from './Home.module.css';

//Hooks
import { useNavigate, Link, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { useFetchDocument } from '../../hooks/useFetchDocuments';

//components
import PostDetail from '../../components/PostDetail';

const Home = () => {
  const [query, setQuery] = useState();
  const { documents: posts, loading } = useFetchDocument('posts');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query) {
      return navigate(`/search?q=${query}`);
    }
  };

  return (
    <div className={styles.home}>
      <h1>Veja os nossos posts mais recentes</h1>
      <form className={styles.search_form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ou busque tags..."
          onChange={({ target }) => setQuery(target.value)}
        />
        <button className="btn btn-dark">Pesquisar</button>
      </form>
      <div>
        {loading && <DotLoader color="#36d7b7" />}
        {posts && posts.map((post) => <PostDetail key={post.id} post={post} />)}
        {posts && posts.length === 0 && (
          <div className={styles.noposts}>
            <p>Não foram encontrados posts</p>
            <Link to="/posts/create" className="btn">
              Criar primeiro post
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
