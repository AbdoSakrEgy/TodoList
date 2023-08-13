import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  todayTasks: [
    {
      content: "Study math",
      isDone: false,
      id: uuidv4(),
    },
    {
      content: "Clean my room",
      isDone: false,
      id: uuidv4(),
    },
  ],
  taskToEdit: {},
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.todayTasks.push({
        content: action.payload,
        isDone: false,
        id: uuidv4(),
      });
    },
    editContentTask: (state, action) => {
      for (let i = 0; i < state.todayTasks.length; i++) {
        if (state.todayTasks[i].id === action.payload.id) {
          state.todayTasks.splice(i, 1, {
            content: action.payload.content,
            isDone: state.todayTasks[i].isDone,
            id: action.payload.id,
          });
        }
      }
    },
    deleteTask: (state, action) => {
      for (let i = 0; i < state.todayTasks.length; i++) {
        if (state.todayTasks[i].id === action.payload.id) {
          state.todayTasks.splice(i, 1);
        }
      }
    },
    maketTaskDone: (state, action) => {
      for (let i = 0; i < state.todayTasks.length; i++) {
        if (state.todayTasks[i].id === action.payload.id) {
          state.todayTasks.splice(i, 1, {
            content: state.todayTasks[i].content,
            isDone: !state.todayTasks[i].isDone,
            id: state.todayTasks[i].id,
          });
        }
      }
    },
    addTaskToEdit: (state, action) => {
      state.taskToEdit = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addTask,
  editContentTask,
  deleteTask,
  maketTaskDone,
  addTaskToEdit,
} = taskSlice.actions;

export default taskSlice.reducer;
