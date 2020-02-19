import React from 'react';
import Field from '../Field';
import TaskStyled from '../Task/TaskStyled';

const Task = ({ task, handleChange }) => {
  return (
    <TaskStyled>
      <div className="task">
        <Field
          type="checkbox"
          name={`task-${task.id}`}
          placeholder={task.label}
          handleChange={() => handleChange(task.id)}
          checked={task.done}
        />
      </div>
    </TaskStyled>
  );
};

export default Task;
