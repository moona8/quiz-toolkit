import { createSlice } from "@reduxjs/toolkit";
// import todo from "../components/todo";

export const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    scores: 0,
  },

  reducers: {
    addScore: (state, action) => {
        console.log(action)
      state.scores+=1
    },
    // deleteTodo: (state, action) => {
    //     // const {recordIndex} = action.payload;
    //     state.todos.splice(action.payload,1)
    //   },
    //   deleteAll:(state)=>{
    //       state.todos=[]
    //     console.log(state)
    //   },
    //   editTodo:(state,action)=>{
    //     state.todos[action.payload].editMode=true
    //   },
    //   saveTodo:(state,action)=>{
    //     state.todos[action.payload.todoIndex].editMode=false
    //     state.todos[action.payload.todoIndex].val=action.payload.value
    //   }
  },
});


export const { addScore,deleteTodo ,deleteAll,editTodo,saveTodo} = quizSlice.actions;
export default quizSlice.reducer;
