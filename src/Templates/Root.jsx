import React from "react";
import { Outlet } from "react-router-dom";
import TodoList from "../Organisms/TodoList";
import PalestineFlag from "../Atoms/PalestineFlag";

export default function Root() {
  return (
    <>
      <div className="h-screen flex justify-center items-start pt-32">
        <TodoList />
      </div>
      <div className="sticky bottom-0 w-full">
        <PalestineFlag />
      </div>
      {/* <Outlet /> */}
    </>
  );
}
