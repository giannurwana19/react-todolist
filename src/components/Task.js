import React from 'react';
import Checkbox from './Checkbox';

const Task = () => {
  return (
    <div className="task">
      <Checkbox defaultChecked={true} />
      test task
    </div>
  );
};

export default Task;
