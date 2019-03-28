import http from './http'

const startGetUSers = () => {return { type: 'START_GET_USERS', ready: false}}
const completeGetUSers = data => {return {type: 'COMPLETE_GET_USERS', data}}
const errorGetUSers = err => {return {typ: 'ERROR_GET_USERS', err}}

export const getUsers = () => {
    return (dispatch, getState) => {
        dispatch(startGetUSers()); 
        http.get('all/')
        .then((response) => {
            if(response.data)
                dispatch(completeGetUSers(response.data)); 
        })
        .catch((err) => {
            dispatch(errorGetUSers(err)); 
        })
    }
}