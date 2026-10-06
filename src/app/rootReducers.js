import { combineReducers } from "@reduxjs/toolkit";
import todoReducer from "../features/Todo/todoSlice"

const rootReducers=combineReducers({
    todo:todoReducer
})
export default rootReducers