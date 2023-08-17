//React
import { Link } from 'react-router-dom';

//Styles
import styles from './Search.module.css';

//Components
import PostDetail from '../../components/PostDetail';

// hooks
import { useFetchDocument } from '../../hooks/useFetchDocuments';
import { useQuery } from '../../hooks/useQuery';

const Search = () => {
  const query = useQuery();
  const search = query.get('q');

  const { documents: posts } = useFetchDocument('posts', search);

  return (
    <div className={styles.search_container}>
      <h1>Search</h1>
      {posts && posts.length === 0 && (
        <div className={styles.noposts}>
          <p>Não foram encontrados posts a partir da sua busca...</p>
          <Link to="/" className="btn btn-dark">
            Voltar
          </Link>
        </div>
      )}
      {posts && posts.map((post) => <PostDetail key={post.id} post={post} />)}
    </div>
  );
};

export default Search;
