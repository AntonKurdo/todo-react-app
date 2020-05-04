import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Task from './components/Task';
import List from './components/List';
import './styles.css'

function App() {        
      const [tasks, setTasks] = useState( [
        {id: 1, title: 'Create app', done: false},
        {id: 2, title: 'Happy birthday to friend', done: false},
        {id: 3, title: 'Watch a video about hooks', done: true}  
      ])


      useEffect(() => {
        if(localStorage.data) {
          let data = localStorage.getItem('data')
          setTasks(JSON.parse(data));
        }
      }, [])

      function addTask(task) {
        if(task === '') {
            document.querySelector('.task_inp').classList.add('_error')
        } else{
        let count = tasks.length;
        let arr = tasks.slice();
        arr.push({id: count + 1, title: task, done: false});
        setTasks(arr);
        localStorage.setItem('data',JSON.stringify(arr))
        }
      }

      function taskComplete(id) {
        let arr = tasks.slice()
        arr.forEach(item => {
            if(item.id === +id)
            item.done = true;
        })
        setTasks(arr);
        localStorage.setItem('data',JSON.stringify(arr))
      }

      function removeTask(id) {
        let arr = [];
        tasks.forEach(item => {
          if(item.id !== +id) {
          arr.push(item)
          }
        })
       setTasks(arr);
       localStorage.setItem('data',JSON.stringify(arr))
      }

      return (
      <div className = 'container'>
        <h1>ToDoList</h1>
        <Task addTask = {addTask}/>
        <List list = {tasks}
          taskComplete = {taskComplete}  
          removeTask = {removeTask}      
          />
      </div>
      );
}

export default App;
