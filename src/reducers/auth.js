export const initialState = {
    login: false,
    loading: true,
    error: null,
    tocken: null
}


const auth = (state, action) => {
    if (state === undefined) {
        return initialState
    }

    switch (action.type) {
        case 'FETCH_LOGIN_REQUEST':
            return {
                ...state,
                loading: true,
                error: null,
            };

        case 'FETCH_LOGIN_SUCCESS':
            return {
                ...state,
                tocken: action.payload.id,
                login: true,
                loading: false,
                error: null,

            };

        case 'FETCH_LOGIN_FAILURE':
            return {
                ...state,
                tocken: null,
                login: false,
                loading: false,
                error: action.payload,

            };

        default:
            return state;
    }
};


export default auth;