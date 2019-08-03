
import {FETCH_USERS , SORT_DATA} from './types';

// export const fetchUsers = (name) => dispatch => {
//     fetch(`https://api.github.com/search/users?q=${name}`)
//     .then((response) => response.json())
//     .then((users)=>dispatch({
//         type : FETCH_USERS,
//         payload : users
//     }))
//     .catch((error)=>console.log(error));
// }
export const sortUserData = (users) => dispatch => {
    dispatch({
        type : FETCH_USERS,
        payload : users
    })
}
export const fetchUsers = (name) => dispatch => {
    let users = {};

    let result = fetch(`https://api.github.com/search/users?q=${name}`, {
        method: 'get',
    }).then(function(response) {
        return response.json();
    }).then(function(data) {
        let userArray = data.items;
        users = data;
        for(let i=0;i<userArray.length; i++){
            fetch(userArray[i].url).then(function(response){
                return(response.json());
            }).then(function(data){
                // console.log("nested",data);
                users.items[i] = {...userArray[i], ...data}
            })
        }
        dispatch({
            type : FETCH_USERS,
                    payload : users
                })
        return users;
    })
    .catch(function(error) {
        console.log('Request failed', error)
    })
}