import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import { AuthProvider } from './components/auth';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import { RequiredAuth } from './components/RequiredAuth';
import SignUp from './components/SignUp';
import { auth } from './firebase';

function App() {
  
  return (
    <div className="App main">
      <Router>
        <AuthProvider>
          <Routes>
            <Route exact path='/' element={<RequiredAuth><Dashboard /></RequiredAuth>}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/signup' element={<SignUp />}></Route>
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
