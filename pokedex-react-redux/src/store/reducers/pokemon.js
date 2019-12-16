const initialState = {
    fetching: false,
    fetched: false,
    initialInfo: [],
    err: null,
    filter: [], 
    inputValue: '',
    searchResults: false
    
}

// const pokemonSearch = {
//     fetching: false,
//     fetched: false,
//     initialInfo: [],
//     err: null,
//     filter: [], 
//     searchValue: '', 
// }

export const pokemonDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'RECEIVE_RESULTS_START':
            return {
                ...state, fetching: true, 
            }
        case 'RECEIVE_RESULTS_FINISH':
            return {
                ...state, fetching: false, fetched: true, initialInfo: action.data,
            }
        case 'RECEIVE_FILTERED_START': 
            return {
                ...state, fetching: true, 
            }
        case 'RECEIVE_SEARCH_POKEMON':
            return {
            ...state, inputValue: action.inputValue, searchResults: true
            }
        case 'RECEIVE_SEARCH_DETAIL_POKEMON': 
            return {
                ...state, filter: action.filter
            }
        default:
            return state;
    }
}
 
export const pokemonfiltered = (state = initialState, action ) => {
    switch (action.type) {
        case 'RECEIVE_FILTERED_START': 
            return {
                ...state, fetching: true, 
            }
        default:
            return state;
    }
}

export default pokemonDataReducer;
 