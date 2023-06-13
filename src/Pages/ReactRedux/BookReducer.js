import { buy_book } from "./BookType"

const initialstate = {
    NumberOfBooks : 20
}

const Book_Reducer = (state = initialstate, action) => {
    switch (action.type) {
        case buy_book : return {
            ...state, NumberOfBooks : state.NumberOfBooks - 1
        }
        default : return state
    }
}

export default Book_Reducer;