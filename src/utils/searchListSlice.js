import { createSlice } from "@reduxjs/toolkit";

const searchList = createSlice({
    name:"searchList",
    initialState:{
        searchList:[],
        currentSearchText: ""
    },
    reducers: {
        addSearchList: (state, action) => {
            if(state.searchList.length ==100)
            state.searchList.splice(0,1);
            state.searchList.push(action.payload);
        },
        addSearchText: (state, action) => {
            state.currentSearchText = action.payload
        }
    }
})

export default searchList.reducer;
export const {addSearchList, addSearchText} = searchList.actions;