import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    address: ''
}

const addressSlisce = createSlice({
    name: 'address',
    initialState,
    reducers: {
        updateByAddress(state, action) {
            state.address = action.payload;
        }
    }
})

export const { updateByAddress } = addressSlisce.actions;
export default addressSlisce.reducer;