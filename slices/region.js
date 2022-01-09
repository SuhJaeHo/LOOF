import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    region: {
        latitude: 37.49783315274643, 
        longitude: 127.02783092726877,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
    },
}

const regionSlice = createSlice({
    name: 'region',
    initialState,
    reducers: {
        updateBy(state, action) {
            state.region = action.payload;            
        }
    }
})

export const { updateBy } = regionSlice.actions;
export default regionSlice.reducer;