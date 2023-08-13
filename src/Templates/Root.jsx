import React from "react";
import { Outlet } from "react-router-dom";
import TodoList from "../Organisms/TodoList";

export default function Root() {
  return (
    <>
      <div className="h-screen flex justify-center items-start pt-32">
        <TodoList />
      </div>
      {/* <Outlet /> */}
    </>
  );
}
