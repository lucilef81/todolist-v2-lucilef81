import React from 'react';
import PropTypes from 'prop-types';
import Task from '../Task';
import TasksStyled from './TasksStyled';

const Tasks = ({ tasks, setTasks }) => {
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          task.done = !task.done;
        }

        return task;
      }),
    );
  };

  const sortedTasks = tasks.sort((a, b) => a.done - b.done);

  return (
    <TasksStyled>
      <section className="tasks">
        {sortedTasks.map((task) => (
          <Task key={task.id} task={task} handleChange={toggleTask} />
        ))}
      </section>
    </TasksStyled>
  );
};

Tasks.propTypes = {
  tasks: PropTypes.array.isRequired,
  setTasks: PropTypes.func.isRequired,
};

export default Tasks;
