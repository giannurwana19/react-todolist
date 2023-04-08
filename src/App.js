import { useState } from 'react';
import './App.css';
import Task from './components/Task';
import TaskForm from './components/TaskForm';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = name => {
    setTasks(prevTask => {
      return [...prevTask, { name: name, done: false }];
    });
  };

  return (
    <main>
      <TaskForm onAdd={addTask} />
      {tasks.map((task, index) => (
        <Task {...task} key={index} />
      ))}
    </main>
  );
}

export default App;
