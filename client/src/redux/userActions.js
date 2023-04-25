import axios from 'axios';

export const signup = (userData) => async(dispatch) => {
    try {
        dispatch({
            type: 'signupRequest'
        });

        const {data} = await axios.post('/auth/signup', userData);

        dispatch({
            type: 'signupSuccess',
            user: data.user,
            message: data.message
        });
        
    } catch (error) {
        dispatch({
            type: 'signupFailure',
            payload: error.response?.data.message
        });
    }
}

export const logout = () => async(dispatch) => {
    try {
        dispatch({
            type: 'logoutRequest'
        });

        const {data} = await axios.post('/auth/logout');

        dispatch({
            type: 'logoutSuccess',
            payload: data.message
        });
        
    } catch (error) {
        dispatch({
            type: 'logoutFailure',
            payload: error.response?.data.message
        });
    }
}

export const loadUser = () => async(dispatch) => {
    try {
        dispatch({
            type: 'loadUserRequest'
        });

        const {data} = await axios.get('/auth/me');

        dispatch({
            type: 'loadUserSuccess',
            payload: data.user
        });
        
    } catch (error) {
        dispatch({
            type: 'loadUserFailure',
            payload: error.response?.data.message
        });
    }
}