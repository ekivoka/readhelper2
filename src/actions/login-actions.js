const loginRequested = () => {
    return {
        type: 'FETCH_LOGIN_REQUEST'
    }
};


const loginSuccessed = (data) => {
    return {
        type: 'FETCH_LOGIN_SUCCESS',
        payload: data
    };
};

const loginError = (error) => {
    return {
        type: 'FETCH_LOGIN_FAILURE',
        payload: error
    };
};

const saveTockenInLocal = (data) => {
    localStorage.setItem('tocken', data.id)
}


const fetchLogin = (apiService, dispatch) => () => {
    dispatch(loginRequested());
    apiService.login()
        .then((data) => {
            dispatch(loginSuccessed(data))
            saveTockenInLocal(data)
        })
        .catch((err) => dispatch(loginError(err)));
};


export {
    fetchLogin,
};