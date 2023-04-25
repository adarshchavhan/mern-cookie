import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadUser, logout } from '../redux/userActions';

const Home = () => {
    const { currentUser } = useSelector(state => state.user);

    const dispatch = useDispatch();

    const handleLogout = () => {
        if (currentUser) {
            dispatch(logout());
        }
    }

    return (
        <div className="home__page container">
            <div className="box">
                <div className="avatar">{currentUser?.name[0]}</div>
                <div>
                    <h2 className="name">{currentUser?.name}</h2>
                    <p className="email">{currentUser?.email}</p>
                </div>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </div>
    )
}

export default Home