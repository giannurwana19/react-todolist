import { useEffect, useState } from 'react';
import './App.css';
import Task from './components/Task';
import TaskForm from './components/TaskForm';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (tasks.length === 0) return;

    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem('tasks'));

    setTasks(tasks);
  }, []);

  const addTask = name => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    setTasks(prevTask => {
      return [...prevTask, { name: name, done: false }];
    });
  };

  const udpateTaskDone = (taskindex, newDone) => {
    setTasks(prevTask => {
      const newTasks = [...prevTask];
      newTasks[taskindex].done = newDone;

      return newTasks;
    });
  };

  const removeTask = indexRemoved => {
    setTasks(prevTask => {
      return prevTask.filter((_, index) => index !== indexRemoved);
    });
  };

  const numberComplete = tasks.filter(t => t.done).length;
  const numberTotal = tasks.length;
  const getMessage = () => {
    const percentage = (numberComplete / numberTotal) * 100;

    if (percentage === 0) {
      return 'Try to do at least one! 🙏🏻';
    }

    if (percentage === 100) {
      return 'Nice job for today! 👍🏻';
    }

    return 'Keep it going💪🏻';
  };

  const renameTask = (index, name) => {
    setTasks(prev => {
      const newTasks = [...prev];
      newTasks[index].name = name;
      return newTasks;
    });
  };

  return (
    <main>
      <h1>
        {numberComplete}/{numberTotal} Completed
      </h1>
      <h2>{getMessage()}</h2>

      <TaskForm onAdd={addTask} />
      {tasks.map((task, index) => (
        <Task
          {...task}
          key={index}
          onToggle={done => udpateTaskDone(index, done)}
          onTrash={newName => removeTask(index, newName)}
          onRename={name => renameTask(index, name)}
        />
      ))}
    </main>
  );
}

export default App;
