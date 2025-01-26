
const AlertInfo = ({taskCompleted, classAlert }) => {
  const alertClass = taskCompleted === 0 ? 'alert alert-success' : 'alert alert-warning';

  return (
    <div className={alertClass} role="alert">
        Te quedan { taskCompleted } tareas por completar.
    </div>
  )
}

export default AlertInfo;
