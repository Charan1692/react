import { createStore, combineReducers } from "redux";
import todos from "./reducer/todo";

const rootReducer = combineReducers({ todos });

export const store = createStore(rootReducer);
