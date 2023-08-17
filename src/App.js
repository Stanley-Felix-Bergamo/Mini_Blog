//React
import { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { DotLoader } from 'react-spinners';

//Hooks
import { useAuthentication } from './hooks/useAuthentication';

//Routes
import Rotas from './rotas';

//Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

//Context
import { AuthProvider } from './context/AuthContext';

function App() {
  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();

  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  if (loadingUser) {
    return <DotLoader color="#36d7b7" />;
  }

  return (
    <AuthProvider value={{ user }}>
      <BrowserRouter>
        <Navbar />
        <Rotas user={user} />
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
