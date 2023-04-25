import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { signup } from '../redux/userActions'

const Signup = () => {
    const [data, setData] = useState({ name: '', email: '', password: '' })
    const { error } = useSelector(state => state.user);

    const dispatch = useDispatch();

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setData({
            ...data, [name]: value
        });
    }

    const handleSubmit = (e) => {
        dispatch(signup(data));
    }

    return (
        <div className="auth__page container">
            <div className="box">
                <h2>Signup</h2>
                {error && <div className="error">{error}</div>}
                <input type="text" placeholder='Name' name='name' value={data.name} onChange={handleChange} />
                <input type="email" placeholder='Email' name='email' value={data.email} onChange={handleChange} />
                <input type="password" placeholder='Password' name='password' value={data.password} onChange={handleChange} />
                <div>
                    <button onClick={handleSubmit}>Signup</button>
                    <span>Have an account? <Link to='/login'>login</Link></span>
                </div>
            </div>
        </div>
    )
}

export default Signup