const initialState = {
    pData: [],
    error: false
};

const pokemonDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'RECEIVE_RESULTS_POKEMON':
            
            return { ...state, pData: action.payload}     
        default:
            return state;
    }
}

export default pokemonDataReducer;