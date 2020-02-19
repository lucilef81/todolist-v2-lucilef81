import React, { useState } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import AddTaskFormStyled from './AddTaskFormStyled';
import Field from '../Field';

const AddTaskForm = ({ tasks, setTasks }) => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setTasks([
      ...tasks,
      {
        id: uuid(),
        label: value,
        done: false,
      },
    ]);
  };

  return (
    <AddTaskFormStyled>
      <form className="add-task" onSubmit={handleSubmit}>
        <Field
          name="add-task"
          placeholder="Add a task"
          value={value}
          handleChange={handleChange}
        />
      </form>
    </AddTaskFormStyled>
  );
};

AddTaskForm.propTypes = {
  tasks: PropTypes.array.isRequired,
  setTasks: PropTypes.func.isRequired,
};

export default AddTaskForm;
