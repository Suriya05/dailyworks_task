import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users:[],
    loggedin: false,
    currentUser: {},
}

const usersSlice = createSlice({
    name:'users',
    initialState,
    reducers: {
        register: (state, action) => {
            state.users = [...state.users, action.payload];
        },
        login: (state, action) => {
            state.loggedin = true;
            state.currentUser = action.payload;
        },
        logout: (state) => {
            state.users = [];
            state.loggedin = false;
            state.currentUser = {};
        }
    }

})

export const {register, login, logout} = usersSlice.actions
export default usersSlice.reducer;