import { combineReducers } from "redux";
import { quizReducer } from "./quiz/quizReducer";

export const rootReducer = combineReducers({
    quiz: quizReducer
})