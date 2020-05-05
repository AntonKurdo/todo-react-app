import React, {useState} from 'react'

export default function Task(props) {
    const  [task, setTask] = useState('');
    const [_error, setError] = useState('form-control task_inp')
    function valueChange(e) {
        setTask(e.target.value);  
        setError('form-control task_inp')  
    }
    function addNewTask(e) {
        e.preventDefault();
        props.addTask(task, setError);
        setTask('');       
    }
    return (            
        <form>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">New Task</label>
                <div className = 'task_cont'>
                    <input type="text" className= {_error} id="exampleInputEmail1" aria-describedby="emailHelp" onChange = {valueChange} value = {task}/>
                    <button onClick = {addNewTask} className = 'btn btn-primary btn_add'>Add</button>                
                </div>
                <small id="emailHelp" className="form-text text-muted">Write here your new task</small>
            
            </div>
        
        </form>

    )

}