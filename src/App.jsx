import { useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TasksList from './components/tasksList';
import TaskAddForm from './components/taskAddForm';
import AlertInfo from './components/alertInfo';

const KEY = "taskApp.task";

function App() {
  const [tasks, setTasks] = useState([]);

  const titleTaskRef = useRef();
  const descriptionTaskRef = useRef();

  useEffect(() => {
    const storedTask = JSON.parse(localStorage.getItem(KEY));
  
    if (storedTask) {
      setTasks(storedTask);
    }
  }, []);
  

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(tasks));
  }, [tasks]);
  

  const toggleTask = (id) => {
    const newTasks = [...tasks];
    const task = newTasks.find((task) => task.id === id);
    task.completed = !task.completed
    setTasks(newTasks);
  };

  const handleTaskAdd = () => {
    const titleTask = titleTaskRef.current.value;
    const descriptionTask = descriptionTaskRef.current.value;

    if (titleTask === '') return;

    setTasks((prevTask) => {
      return [...prevTask, {id: uuidv4(), titleTask, descriptionTask, completed: false}]
    });

    titleTaskRef.current.value = null;
    descriptionTaskRef.current.value = null;
  }

  const handleClearall = () => {
    const isConfirmed = window.confirm("¿Estás seguro de que deseas eliminar las tarea completadas?");

    if (isConfirmed) {
      const newTasks = tasks.filter((task) => !task.completed);
      setTasks(newTasks);
    }
  }

  const handleDeleteTask = (id) => {
    const isConfirmed = window.confirm("¿Estás seguro de que deseas eliminar esta tarea?");

    if (isConfirmed) {
      const newTasks = tasks.filter((task) => task.id !== id);
      setTasks(newTasks);
    }
  }

  const countCompleted = () => {
    return tasks.filter((task) => !task.completed).length;
  }

  return (
    <div className="container my-5">
      <h1 className='mb-4'>Gestor de tareas</h1>
      <div className='row'>
        <div className='col-md-4'>
          <TaskAddForm handleTaskAdd={handleTaskAdd} titleTaskRef={titleTaskRef} descriptionTaskRef={descriptionTaskRef} />
          <button className='btn btn-secondary' onClick={handleClearall}>Eliminar tareas completas</button>
        </div>
        <div className='col-md-8'>
          <AlertInfo taskCompleted={countCompleted()} classAlert={'alert-warning'} />
          <TasksList tasks={tasks} toggleTask={toggleTask} deleteTask={handleDeleteTask}/>
        </div>
      </div>
    </div>
  );
}

export default App;
