
const AlertInfo = ({ taskCompleted }) => {
  const alertClass = taskCompleted === 0 ? 'alert alert-success' : 'alert alert-warning';

  return (
    <div className={alertClass} role="alert">
      {
        taskCompleted === 0
        ? 'No tenes tareas pendientes!'
        : `Te quedan ${ taskCompleted } tareas por completar.`
      }
    </div>
  )
}

export default AlertInfo;
