import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
  const { currentUser } = useSelector(state => state.user);
  return (
    <div className="header">
        <div className="container">
            <div className="logo">LOGO</div>
            {currentUser ? <Link to='/'>Profile</Link> : <Link to='/login'>Login</Link>}
        </div>
    </div>
  )
}

export default Header