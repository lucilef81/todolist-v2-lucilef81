import React from 'react';
import PropTypes from 'prop-types';

import Field from '../Field';
import TaskStyled from './TaskStyled';

const Task = ({ task, handleChange }) => {
  return (
    <TaskStyled>
      <div className={`task ${task.done ? 'done' : ''}`}>
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

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Task;
