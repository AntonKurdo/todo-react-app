import React from 'react'

export default function List(props) {
    const activeTasks = props.list.filter(task => !task.done)
    const doneTasks = props.list.filter(task => task.done)


    function taskCompl(e) {
        e.preventDefault();
        let id = e.target.getAttribute('id');
        props.taskComplete(id);
        
    }

    function remove(e) {
        let id =  e.target.getAttribute('id');
        props.removeTask(id);
    }

    return (
            <React.Fragment>
                <div className = 'active_taks'> Active tasks: <span> {activeTasks.length} </span> </div>
                <ul className="list-group">
                    {
                        [...activeTasks, ...doneTasks].map(item =>     
                        <li className="list-group-item"  id = {item.id} key = {item.id}> {item.done ? <span className = 'ok'>✔</span> : <span  className = 'wrong'>❌</span>}  
                        {item.title} 
                        {item.done ? <button
                        onClick = {remove}
                        className = 'btn_remove'
                        >
                            <i id = {item.id} className="fas fa-trash-alt"></i> 
                        </button> : ''}
                        <button  onClick = {taskCompl} id = {item.id}  className = 'btn btn-danger btn-complete' disabled = {item.done ? true : false}>Complete</button> 
                        </li>)                
                    }
    
                </ul>
            </React.Fragment>
        )  
}  