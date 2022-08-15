import { ADD_CHOICE } from "./quizActions";


export const quizReducer = (state = [], action) => {
    switch(action.type) {

        case ADD_CHOICE: 
            return [...state, action.choice];


        default: return state;
    }
}