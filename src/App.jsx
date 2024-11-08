import Todoinput from "./components/todoinput";

import Todoname from "./components/todoname";
import "./App.css";

function App() {
  
  return (
    <>
      <div className="todo-app">
        <div className="todo-container">
          <Todoname />
          <Todoinput />
        </div>
      </div>
    </>
  );
}
export default App;
