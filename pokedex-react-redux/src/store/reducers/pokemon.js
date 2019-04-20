const initialState = {
    fetching: false,
    fetched: false,
    pokemons: [],
    err: null,
}

const initialStateSearch = {
    fetching: false,
    fetched: false,
    searchValue: '', 
    err: null,
    filter: []
}

const initialStateResults = {
    fetching: false,
    fetched: false, 
    err: null,
    filter: false
}


export const pokemonDataReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'RECEIVE_RESULTS_START':
            return {
                ...state, 
                fetching: true, 
            }
        case 'RECEIVE_RESULTS_FINISH':
            return {
                ...state, 
                fetching: false, 
                fetched: true, 
                pokemons: action.payload 
            }
        default:
            return state;
    }
}

export const pokemonSearch = (state = initialStateSearch, action) => {
    switch (action.type) {
        case 'RECEIVE_SEARCH_POKEMON': 
            return {
                ...state, 
                fetched: true, 
                searchValue: action.payload
            }
        case 'RECEIVE_FILTERED_COMPLETE': 
            return {
                ...state, 
                fetching: false, 
                fetched: true,
                filter: action.payload
            }
        
        default:
            return state;
    }
}
 
export const pokemonfiltered = (state = initialStateResults, action ) => {
    switch (action.type) {
        case 'RECEIVE_FILTERED_START': 
            return {
                ...state, 
                fetching: true, 
            }
        
        default:
            return state;
    }
}
 