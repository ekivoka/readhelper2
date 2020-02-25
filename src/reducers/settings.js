
export const initialState = {
    lastBookId: null,
    bookName: null,
    lastPage: 1,
    pageCount: 1,
    level: 3,
    bookmarks: [],
    theme: 'white',
    loading: true,
    error: null,
}


const books = (state, action) => {
    if (state === undefined) {
        return initialState
    }

    switch (action.type) {
        case 'SET_BOOK':
            const { id, filename, date, current, count, page_size } = action.payload;

            return {
                ...state,
                lastBookId: id,
                bookName: filename,
                lastPage: current + 1,
                pageCount: count,
                pageSize: page_size,

                loading: true,
                error: null,
            };

        case 'INC_PAGE':
            return {
                ...state,
                lastPage: state.lastPage + 1
            };

        case 'DEC_PAGE':
            return {
                ...state,
                lastPage: state.lastPage - 1
            };

        case 'SET_PAGE':
            return {
                ...state,
                lastPage: action.payload
            };

        case 'SET_LEVEL':
            return {
                ...state,
                level: action.payload
            };



        default:
            return state;
    }
};


export default books;