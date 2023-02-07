import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';

//hooks
import { useState, useEffect } from 'react';
import { useAuthentication } from './hooks/useAuthentication';

//pages
import Login from './pages/login/Login.jsx';
import Register from './pages/register/Register.jsx';

//components
import NavBar from './components/navBar/NavBar';
import Content from './pages/content/Content';

//context
import { AuthProvider } from './context/AuthContext';
import { onAuthStateChanged } from 'firebase/auth';

function App() {

  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();

  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    })
  }, [auth]);

  if (loadingUser) {
    return <p>Carregando...</p>
  }

  return (
    <div className="App">
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <NavBar className='container-navbar'/>
          <div className='container-content'>
            <Routes>
              <Route path="/" element={!user ? <Login /> : <Navigate to="/content"/>} />
              <Route path="/register" element={!user ? <Register /> : <Navigate to="/content" />} />
              <Route path="/content" element={user ? <Content /> : <Navigate to="login"/>} />
            </Routes>
          </div>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
