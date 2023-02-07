const ADD_BOOK = 'book-store/books/ADD_BOOK';
const REMOVE_BOOK = 'book-store/books/REMOVE_BOOK';
const defaultState = [];

const BooksReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {};
    case REMOVE_BOOK:
      return {};
    default:
      return state;
  }
};

export default BooksReducer;

export const addBook = () => ({
  type: ADD_BOOK,
});

export const removeBook = () => ({
  type: REMOVE_BOOK,
});
