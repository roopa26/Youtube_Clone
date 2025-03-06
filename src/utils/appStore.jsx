import {configureStore} from '@reduxjs/toolkit'
import videoSliceReducer from '../utils/videoSlice'
import sidebarTogglerReducer from '../utils/sidebarToggleSlice'
import chatSlice from '../utils/chatSlice'
import searchSlice from '../utils/searchListSlice'

const appStore = configureStore({
    reducer: {
        videoSliceReducer,
        sidebarTogglerReducer,
        chatSlice,
        searchSlice
    }
})

export default appStore
