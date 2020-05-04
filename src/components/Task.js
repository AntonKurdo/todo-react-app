import React, {useState} from 'react'

export default function Task(addTask) {
    const  [task, setTask] = useState('');
    function valueChange(e) {
        setTask(e.target.value);  
        document.querySelector('.task_inp').classList.remove('_error')    
    }
    function addNewTask(e) {
        e.preventDefault();
        addTask.addTask(task);
        setTask('');       
    }

    return (            
        <form>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">New Task</label>
                <div className = 'task_cont'>
                    <input type="text" className="form-control task_inp" id="exampleInputEmail1" aria-describedby="emailHelp" onChange = {valueChange} value = {task}/>
                    <button onClick = {addNewTask} className = 'btn btn-primary btn_add'>Add</button>                
                </div>
                <small id="emailHelp" className="form-text text-muted">Write here your new task</small>
            
            </div>
        
        </form>

    )

}