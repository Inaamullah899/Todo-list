import { useState } from "react";
const [input, setInput] = useState("");
const [date, setDate] = useState("");

const Todoinput = () => {
    
  return (
    <>
      <div className="addtask">
        <input
          type="text"
          placeholder="Enter task"
          className="input-container"
        />
        <input type="date" className="input-container" />
        <button className="bt-add">Add</button>
      </div>
    </>
  );
};
export default Todoinput;
