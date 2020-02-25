export const initialState = {
    words: [],
    loading: true,
    error: null,

}


const words = (state, action) => {
    if (state === undefined) {
        return initialState
    }

    switch (action.type) {
        case 'FETCH_WORDS_REQUEST':
            return {
                ...state,
                loading: true,
                error: null,
            };

        case 'FETCH_WORDS_SUCCESS':
            return {
                ...state,
                words: action.payload,
                loading: false,
                error: null,

            };

        case 'FETCH_WORDS_FAILURE':
            return {
                ...state,
                words: [],
                loading: false,
                error: action.payload,

            };

        default:
            return state;
    }
};


export default words;