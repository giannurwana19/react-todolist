import React, { useState } from 'react';

const TaskForm = ({ onAdd }) => {
  const [taskName, setTaskName] = useState('');

  const handleSubmt = e => {
    e.preventDefault();
    onAdd(taskName);
    setTaskName('');
  };

  return (
    <form onSubmit={handleSubmt}>
      <button>+</button>
      <input
        type="text"
        value={taskName}
        onChange={e => setTaskName(e.target.value)}
        placeholder="Tugas Selanjutnya"
      />
    </form>
  );
};

export default TaskForm;
