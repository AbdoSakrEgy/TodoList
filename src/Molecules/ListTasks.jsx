import React from "react";
import { Icon } from "@iconify/react";
import { useSelector, useDispatch } from "react-redux";
import { addTaskToEdit, deleteTask, maketTaskDone } from "../Redux/taskSlice";

export default function ListTasks() {
  const { todayTasks } = useSelector((state) => state.task);
  const dispatch = useDispatch();

  return (
    <>
      {todayTasks.map((task) => (
        <main
          key={task.id}
          className="flex justify-between gap-3 p-3 rounded-md bg-[#855afd]"
        >
          {task.isDone ? (
            <p className="w-2/3 break-words h-auto text-gray-300">
              <del>{task.content}</del>
            </p>
          ) : (
            <p className="w-2/3 break-words h-auto">{task.content}</p>
          )}
          <section className="flex justify-between gap-3 w-1/3 items-center">
            <Icon
              onClick={() => dispatch(maketTaskDone({ id: task.id }))}
              icon="gg:check-o"
              width="24"
              className="hover:cursor-pointer"
            />
            <Icon
              icon="bxs:edit"
              width="24"
              className="hover:cursor-pointer"
              onClick={() => dispatch(addTaskToEdit(task))}
            />
            <Icon
              onClick={() => dispatch(deleteTask({ id: task.id }))}
              icon="mdi:trash"
              width={24}
              className="hover:cursor-pointer"
            />
          </section>
        </main>
      ))}
    </>
  );
}
