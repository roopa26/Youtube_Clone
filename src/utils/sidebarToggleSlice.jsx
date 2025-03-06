import { createSlice } from "@reduxjs/toolkit";

const sidebarToggleSlice = createSlice({
    name: "sideMenuTogglerSlice",
    initialState: {
        isToggle : false
    },
    reducers:{
        toggleMenu: (state, action) => {
            state.isToggle = !state.isToggle;
        }
    }
})

export const {toggleMenu} = sidebarToggleSlice.actions
export default sidebarToggleSlice.reducer