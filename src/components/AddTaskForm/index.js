import React, { useState } from 'react';
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
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </AddTaskFormStyled>
  );
};

export default AddTaskForm;
