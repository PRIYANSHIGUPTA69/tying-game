import { createStore, combineReducers, applyMiddleware } from "redux";

import keyboardReducer from "./reducers/keyboardReducer";
import CoursesReducer from "./reducers/CoursesReducer";
import summaryReducer from "./reducers/summaryReducer";
const rootReducer =  combineReducers({
        keyboard: keyboardReducer,
        courses: CoursesReducer,
        summary: summaryReducer
    })

export default rootReducer
