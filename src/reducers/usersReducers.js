import {FETCH_USERS} from '../actions/types';

const initialState = {
    usersData : {}
}

export default function(state = initialState, action){
    switch(action.type){
        case FETCH_USERS:
            return {...state, users : action.payload }
        default :
            return state;
    }
}