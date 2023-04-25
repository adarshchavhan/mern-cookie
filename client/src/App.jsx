import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home';
import Signup from './pages/Signup';
import Footer from './components/Footer';
import { useDispatch, useSelector } from 'react-redux'
import { loadUser } from './redux/userActions';

const App = () => {

  const dispatch = useDispatch();

  const { currentUser } = useSelector(state => state.user);

  useEffect(()=>{
      dispatch(loadUser());
  }, [dispatch])

  return <Router>
    <Header />
    <div className="router">
      <Routes>
        <Route path='/' element={currentUser ? <Home /> : <Signup />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </div>
    <Footer />
  </Router>
}

export default App