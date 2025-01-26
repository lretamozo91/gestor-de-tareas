
const TaskItem = ({taskItem, toggleTask, deleteTask}) =>  {
    const {id, titleTask, descriptionTask, completed} = taskItem;

    const handleTaskClick = () => {
      toggleTask(id);
    }

    const handleDelete = () => {
      deleteTask(id)
    }

    return (
      <li className="list-group-item d-flex align-items-start">
        <div className="ms-2 me-2">
          <div className="fw-bold">{titleTask}</div>
          {descriptionTask}
        </div>
        <div className='my-auto ms-auto d-flex'>
          <input type="checkbox" className="btn-check" id={id} checked={completed} onChange={handleTaskClick} />
          <label className="btn btn-outline-success" htmlFor={id}>Completa</label>
          <button className='btn btn-outline-light ms-1' onClick={handleDelete}>🗑️</button>
        </div>
      </li>
    )
  }

export default TaskItem
