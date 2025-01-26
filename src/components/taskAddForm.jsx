
const TaskAddForm = ({ handleTaskAdd, titleTaskRef, descriptionTaskRef }) => {
    return (
        <form onSubmit={ handleTaskAdd } aria-label="form">
            <div className="mb-3">
                <input ref={titleTaskRef} type="text" className="form-control" placeholder="Titulo de la tarea" aria-label="Nueva Tarea" aria-describedby="button-addon2"/>
            </div>
            <div className="mb-3">
                <textarea ref={descriptionTaskRef} className="form-control" placeholder="Descripcion de tarea" id="floatingTextarea"/>
            </div>
            <button onClick={handleTaskAdd} className="btn btn-primary mb-3" type="button" id="button-addon2">Agregar tarea</button>
        </form>
    )
}

export default TaskAddForm
