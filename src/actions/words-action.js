const wordsRequested = () => {
    return {
        type: 'FETCH_WORDS_REQUEST'
    }
};


const wordsLoaded = (words) => {
    return {
        type: 'FETCH_WORDS_SUCCESS',
        payload: words
    };
};

const wordsError = (error) => {
    return {
        type: 'FETCH_WORDS_FAILURE',
        payload: error
    };
};


const fetchWords = (apiService, dispatch) => (bookId, page) => {
    dispatch(wordsRequested());
    apiService.getWords(bookId, page)
        .then((words) => dispatch(wordsLoaded(words)))
        .catch((err) => dispatch(wordsError(err)));
};


export {
    fetchWords,
};