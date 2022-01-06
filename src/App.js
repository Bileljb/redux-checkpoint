import './App.css';
import AddTask from './components/addtask';
import TaskList from './components/listtask';
function App() {
  return (
    <div className="App">
      <AddTask></AddTask>
      <TaskList></TaskList>
    </div>
  );
}

export default App;
