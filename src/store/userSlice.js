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
          console.log("hiii" + action.payload)
          state.splice(action.payload,1)
        },
        // clearAll(state,action){

        //   return [];

        // },
        extraReducers(builder){
          builder.addCase (userSlice.actions.clearAll,() =>{
            return [];
          })
        }
        
    }
})
export const {addUser,removeUser,clearAll,extraReducers} = userSlice.actions;
export default userSlice.reducer;