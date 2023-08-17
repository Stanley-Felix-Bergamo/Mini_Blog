//React
import { Navigate, Route, Routes } from 'react-router-dom';

//Pages
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import CreatePost from './pages/CreatePost';
import Dashboard from './pages/Dashboard';
import Search from './pages/Search';
import Post from './pages/Post';
import EditPost from './pages/EditPost';

const Rotas = ({ user }) => (
  <div className="container">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/search" element={<Search />} />
      <Route path="/post/:id" element={<Post />} />
      <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
      <Route
        path="/register"
        element={!user ? <Register /> : <Navigate to="/" />}
      />
      <Route
        path="/posts/create"
        element={user ? <CreatePost /> : <Navigate to="/login" />}
      />
      <Route
        path="/posts/edit/:id"
        element={user ? <EditPost /> : <Navigate to="/login" />}
      />
      <Route
        path="/dashboard"
        element={user ? <Dashboard /> : <Navigate to="/login" />}
      />
    </Routes>
  </div>
);

export default Rotas;
