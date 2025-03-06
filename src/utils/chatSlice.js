import { createSlice } from "@reduxjs/toolkit";

const ChatSlice = createSlice({
    name: "chatMessage",
    initialState: {
        chatMessage: []
    },
    reducers: {
        addChatList: (state, action)=>{
            state.chatMessage.splice(10,1)
            state.chatMessage.unshift(action.payload);
        }
    }
});

export const {addChatList} = ChatSlice.actions

export default ChatSlice.reducer;