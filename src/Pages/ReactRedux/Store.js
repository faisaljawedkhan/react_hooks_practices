import { createStore } from "redux";
import Book_Reducer from "./BookReducer";


const store = createStore(Book_Reducer);

export default store;