import {createSlice} from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: "user",
    initialState: [

     ],
    reducers:{
        addUser(state,action){
          state.push(action.payload);

        },
        removeUser(state,action){

        },
        clearAll(state,action){

        },
        itsWorking(state,action){

        }
    }
})
export const {addUser} = userSlice.actions;
export default userSlice.reducer;