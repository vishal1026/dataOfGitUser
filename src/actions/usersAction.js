
import {FETCH_USERS} from './types';

export const fetchUsers = () => dispatch => {
    fetch(`https://api.github.com/search/users?q=vishal`)
    .then((response) => response.json())
    .then((users)=>dispatch({
        type : FETCH_USERS,
        payload : users
    }))
    .catch((error)=>console.log(error));
}