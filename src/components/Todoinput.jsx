import { useState, useEffect } from "react";
import Todotasks from "./todotasks";
const Todoinput = () => {
  const [input, setInput] = useState("");
  const [date, setDate] = useState("");
  const [arr, setArr] = useState([]);
  // const [tasks, setTasks] = useState(() => {
  //   const savedTasks = localStorage.getItem("tasks");
  //   return savedTasks ? JSON.parse(savedTasks) : [];
  // });

  const hanndlerInputTask = (e) => {
    setInput(e.target.value);
  };
  const handlerInputDate = (e) => {
    setDate(e.target.value);
  };
  const clickHandler = () => {
    if ((input, date)) {
      const newObj = { task: input, date: date };
      const updatedArr = [...arr, newObj];
      setArr(updatedArr);
      console.log("obj create" + newObj);
      console.log(updatedArr);

      setInput("");
      setDate("");
    } else {
      console.log("Please enter task and date");
    }
  };

  // useEffect(() => {
  //   localStorage.setItem("tasks", JSON.stringify(tasks));
  //   console.log("run");
  // }, [tasks]);
  return (
    <>
      <div className="addtask">
        <input
          type="text"
          value={input}
          placeholder="Enter task"
          className="input-container"
          id="textInput"
          onChange={hanndlerInputTask}
        />
        <input
          type="date"
          value={date}
          id="dateInput"
          className="input-container"
          onChange={handlerInputDate}
        />
        <button className="bt-add" onClick={clickHandler}>
          Add
        </button>
      </div>

      {arr.map((item, index) => {
        return <Todotasks key={index} task={item.task} date={item.date} />;
      })}
    </>
  );
};
export default Todoinput;
