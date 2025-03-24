import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editContentTask, addTaskToEdit, addTask } from "../Redux/taskSlice";

export default function AddTask() {
  const { taskToEdit } = useSelector((state) => state.task);
  const dispatch = useDispatch();

  const [taskContent, setTaskContent] = useState("");

  function handleAddTask(e) {
    e.preventDefault();
    dispatch(addTask(taskContent));
    document.getElementById("addTaskForm").reset();
  }

  function handleEditTask(e) {
    e.preventDefault();
    if (taskContent === "") {
      dispatch(
        editContentTask({ content: taskToEdit.content, id: taskToEdit.id })
      );
      dispatch(addTaskToEdit({}));
      document.getElementById("EditTaskForm").reset();
    } else {
      dispatch(editContentTask({ content: taskContent, id: taskToEdit.id }));
      dispatch(addTaskToEdit({}));
      document.getElementById("EditTaskForm").reset();
      setTaskContent("");
    }
  }

  return (
    <>
      {Object.keys(taskToEdit).length === 0 ? (
        <main>
          <form
            onSubmit={handleAddTask}
            id="addTaskForm"
            className="flex flex-col sm:flex-row gap-3 sm:gap-0 items-center w-full"
          >
            <input
              required
              onChange={({ target }) => setTaskContent(target.value)}
              type="text"
              defaultValue=""
              placeholder="What is the task today?"
              className="input input-bordered w-full sm:w-[70%] sm:rounded-s-md sm:rounded-e-none focus:outline-none placeholder:text-xs"
            />
            <button className="btn btn-primary w-full sm:w-[30%] normal-case h-full text-lg font-thin sm:rounded-s-none sm:rounded-e-md">
              Add Task
            </button>
          </form>
        </main>
      ) : (
        <main>
          <form
            onSubmit={handleEditTask}
            id="EditTaskForm"
            className="flex flex-col sm:flex-row gap-3 sm:gap-0 items-center w-full"
          >
            <input
              required
              onChange={({ target }) => setTaskContent(target.value)}
              type="text"
              defaultValue={taskToEdit.content}
              className="input input-bordered w-full sm:w-[70%] rounded-none focus:outline-none"
            />
            <button className="btn btn-success text-white w-full sm:w-[30%] normal-case h-full text-lg font-thin sm:rounded-s-none sm:rounded-e-md">
              Save
            </button>
          </form>
        </main>
      )}
    </>
  );
}
