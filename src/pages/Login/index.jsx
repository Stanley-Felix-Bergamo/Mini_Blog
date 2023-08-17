import styles from './Login.module.css';
import { useEffect, useState } from 'react';
import { useAuthentication } from '../../hooks/useAuthentication';
import { DotLoader } from 'react-spinners';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { login, error: authError, loading } = useAuthentication();
  const handleSubit = async (e) => {
    e.preventDefault();

    setError('');

    const user = {
      email,
      password
    };

    const res = await login(user);
    console.log(res);
  };

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);
  return (
    <div className={styles.login}>
      <h1>Entrar</h1>
      <p>Faça o login para poder utilizar o sistema</p>
      <form onSubmit={handleSubit}>
        <label>
          <span>Email:</span>
          <input
            type="email"
            name="email"
            required
            placeholder="E-mail do usuário"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
        </label>
        <label>
          <span>Senha:</span>
          <input
            type="password"
            name="password"
            required
            placeholder="Senha do usuário"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
        </label>
        {!loading && <button className="btn">Entrar</button>}
        {loading && (
          <button className="btn" disabled>
            <DotLoader color="#36d7b7" />;
          </button>
        )}

        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
