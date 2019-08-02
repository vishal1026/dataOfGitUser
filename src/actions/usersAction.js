
import {FETCH_USERS} from './types';

export const fetchUsers = (name) => dispatch => {
    fetch(`https://api.github.com/search/users?q=${name}`)
    .then((response) => response.json())
    .then((users)=>dispatch({
        type : FETCH_USERS,
        payload : users
    }))
    .catch((error)=>console.log(error));
}