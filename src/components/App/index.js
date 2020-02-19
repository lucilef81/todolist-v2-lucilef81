// == Import npm
import React, { useState } from 'react';
import data from '../../data/tasks';
// == Import
import './styles.css';
import Tasks from '../Tasks';
import Title from '../Title';
import AddTaskForm from '../AddTaskForm';
import AppStyled from './AppStyled';

// == Composant
const App = () => {
  const [tasks, setTasks] = useState(data);

  const remainingCount = tasks.filter((t) => !t.done).length;

  return (
    <AppStyled>
      <div className="app">
        <AddTaskForm tasks={tasks} setTasks={setTasks} />
        <Title
          title={`${remainingCount} task${
            remainingCount !== 1 ? 's' : ''
          } remaining.`}
        />
        <Tasks tasks={tasks} setTasks={setTasks} />
      </div>
    </AppStyled>
  );
};

// == Export
export default App;
