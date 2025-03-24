import React, { useState } from "react";
import AddTask from "../Molecules/AddTask";
import ListTasks from "../Molecules/ListTasks";

export default function TodoList() {
  return (
    <>
      <main className="flex flex-col gap-10 w-[300px] sm:w-[500px] rounded-md mx-3 p-5 shadow-lg bg-[#1c1942]">
        <h1 className="text-center text-xl sm:text-4xl">Tasks</h1>
        <AddTask />
        <ListTasks />
      </main>
    </>
  );
}
