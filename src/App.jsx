import Todoinput from "./components/todoinput";
import Todotasks from "./components/todotasks";
import Todoname from "./components/todoname";
import "./App.css";

function App() {
  return (
    <>
      <div className="todo-app">
        <div className="todo-container">
          <Todoname />
          <Todoinput />
          <Todotasks />
        </div>
      </div>
    </>
  );
}
export default App;
