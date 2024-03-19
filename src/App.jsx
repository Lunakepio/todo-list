import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Todo } from "./Todo";
import { TextInput } from "./TextInput";
import { InProgress } from "./InProgress";
import { Done } from "./Done";

function App() {
  return (
    <>
      <div className="list">
        <Todo />
        <InProgress />
        <Done />
      </div>
      <TextInput />
    </>
  );
}

export default App;
