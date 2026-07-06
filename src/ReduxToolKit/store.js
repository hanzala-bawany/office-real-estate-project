import { combineReducers, configureStore }  from "@reduxjs/toolkit";
import authSlice from "./authSlice.js";

const rootReducers = combineReducers({
    authReducer : authSlice
})

export const store = configureStore({
    reducer : rootReducers
})