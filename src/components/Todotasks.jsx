const Todotasks = ({ task, date }) => {
  return (
    <>
      <div className="tasks">
        <div className="task">
          <h2>Task : {task}</h2>
        </div>
        <div className="date">
          <h3>Date : {date}</h3>
        </div>
        <button className="bt-del" onClick={delelteHandler}>Delete</button>
      </div>
    </>
  );
};
export default Todotasks;
