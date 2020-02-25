const setBook = (book) => {
    return {
        type: 'SET_BOOK',
        payload: book
    }
};


const incPage = () => {
    return {
        type: 'INC_PAGE',

    };
};

const decPage = () => {
    return {
        type: 'DEC_PAGE',
    };
};

const setPage = (page) => {
    return {
        type: 'SET_PAGE',
        payload: page
    };
};

const setLevel = (level) => {
    return {
        type: 'SET_LEVEL',
        payload: level
    };
};

export {
    setBook,
    incPage,
    decPage,
    setPage,
    setLevel
};