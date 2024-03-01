import {createSlice} from '@reduxjs/toolkit'

const usersSlice = createSlice({
    name: "user",
    initialState: [ ],
    reducers:{
        addUser(state,action){

        },
        removeUser(state,action){

        },
        clearAll(state,action){

        }
    }
})
console.log(usersSlice)
export default usersSlice.reducer;