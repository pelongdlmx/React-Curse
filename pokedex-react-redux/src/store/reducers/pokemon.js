export const pokemonDataReducer = (state = [], action) => {

    switch (action.type) {
        case 'RECEIVE_RESULTS_POKEMON':
            return action
        default:
            return state;
    }
}

export const pokemonDatailReducer = (state = [], action) => {
    switch (action.type) {
        case 'RECEIVE_DETAIL_POKEMON': 
            return action
        default:
            return state;
    }
}


 