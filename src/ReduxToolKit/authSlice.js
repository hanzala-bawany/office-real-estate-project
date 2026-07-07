import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    user : localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
}

const authSlice = createSlice({
    name : "auth",
    initialState,
    reducers : {
        setUser : (state, action) => {
            // console.log(action , "<< action in auth slice");
            state.user = action.payload; 
        },
        logoutUser : (state) => {
            // console.log("Log out Chala he");
            state.user = null;
            localStorage.removeItem("user");
        }
    }
})


export const { setUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;