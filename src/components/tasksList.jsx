import TaskItem from './taskItem';

const TasksList = ({ tasks, toggleTask, deleteTask }) => {
  return (
    <ol className="list-group list-group-numbered" role="group" aria-label="Basic checkbox toggle button group">
      {
        tasks.map((task) => (
          <TaskItem key={task.id} taskItem={task} toggleTask={toggleTask} deleteTask={deleteTask} />
        ))
      }
    </ol>
  )
}

export default TasksList;
