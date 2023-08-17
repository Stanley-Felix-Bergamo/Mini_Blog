import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

import { useAuthentication } from '../../hooks/useAuthentication';
import { useAuthValue } from '../../context/AuthContext';

const Navbar = () => {
  const { user } = useAuthValue();
  const { logout } = useAuthentication();

  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? styles.isActive : '')}
        >
          Mini <span>Blog</span>
        </NavLink>
      </div>
      <ul className={styles.lisks_list}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        {!user && (
          <>
            <li>
              <NavLink to="/login">Entrar</NavLink>
            </li>
            <li>
              <NavLink to="/register">Cadastrar</NavLink>
            </li>
          </>
        )}
        {user && (
          <>
            <li>
              <NavLink to="/posts/create">Novo post</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
          </>
        )}
        <li>
          <NavLink to="/about">Sobre</NavLink>
        </li>
        {user && (
          <li>
            <a href="/" onClick={logout}>
              Sair
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
