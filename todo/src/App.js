import './App.css';
import Board from "./components/Board"
import Todo from "./components/Todo"
import Archive from "./components/Archive"

function App() {
  return (
    <div className="main-container">
      <div className="board-container">
        <Board />
      </div>
      <div className="todo-container">
        <Todo />
      </div>
      <div className="archive-container">
        <Archive />
      </div>
    </div>
  );
}

export default App;
