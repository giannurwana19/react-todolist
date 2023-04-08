import React, { useState } from 'react';

const TaskForm = () => {
  const [taskName, setTaskName] = useState('');

  return (
    <form>
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
