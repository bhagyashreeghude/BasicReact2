import { createSlice } from "@reduxjs/toolkit";

const schoolSlice = createSlice({
    name:"school",
    initialState: [],
    reducers:{
        addmission(state,action){
            state.push(action.payload)
        },
        readdmission(state,action){

        }
    }
})
export const {addmission}  = schoolSlice.actions;
export default schoolSlice.reducer;