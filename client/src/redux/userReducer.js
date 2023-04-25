import { createReducer } from "@reduxjs/toolkit";

export const userReducer = createReducer({}, (builder)=>{
    builder
        .addCase('signupRequest', (state)=>{
            state.loading = true;
        })
        .addCase('logoutRequest', (state)=>{
            state.loading = true;
        })
        .addCase('loadUserRequest', (state)=>{
            state.loading = true;
        });
    
    builder
        .addCase('signupSuccess', (state, action)=>{
            state.loading = false;
            state.currentUser = action.user;
            state.message = action.message;
        })
        .addCase('logoutSuccess', (state, action)=>{
            state.loading = false;
            state.message = action.payload;
            state.currentUser =  null;
        })
        .addCase('loadUserSuccess', (state, action)=>{
            state.loading = false;
            state.currentUser = action.payload;
        });

    builder
        .addCase('signupFailure', (state, action)=>{
            state.loading = true;
            state.error = action.payload;
        })
        .addCase('logoutFailure', (state, action)=>{
            state.loading = true;
            state.error = action.payload;
        })
        .addCase('loadUserFailure', (state, action)=>{
            state.loading = true;
            state.error = action.payload;
        });

});