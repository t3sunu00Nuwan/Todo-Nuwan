import './App.css';
import React from 'react';
import {useEffect, useState } from 'react';
import Row from './components/Row';
import axios from 'axios';

const url = 'http://localhost:3001';

 
function App() {

  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

//..............................................................
  useEffect(() => {

    axios.get(url)
    .then(response => {
      setTasks(response.data)
    }).catch(error => {
      alert(error.response.data.error ? error.response.data.error : error);
    })
  } , []);







//..............................................................
  const addTask = () => {
    axios.post(url + '/create', 
      {description: task})

    .then(response => {
      setTasks([...tasks, {id: response.data.id, description: task}]);
      setTask('');
    }).catch(error => {
      alert(error.response.data.error ? error.response.data.error : error);
    })
  }



  const deleteTask = (id) => {
    axios.delete(url + '/delete/' + id)
    .then(response => {
      const WithoutRemoved = tasks.filter((item) => item.id !== id);
      setTasks(WithoutRemoved);

    }).catch(error => {
      alert(error.response.data.error ? error.response.data.error : error);
    })
    
  }


  return (
    <div id="container">
      <h3>Todos</h3>
      <form>
        <input 
          placeholder='Add new task'
          value = {task}
          onChange = {e => setTask(e.target.value)}
          onKeyDown = {e => {
            if (e.key === 'Enter') {
              e.preventDefault();
              addTask();
            }

          }} 
        />
      </form>
      <ul>
        {
          tasks.map (item => (
            <Row key={item.id} item={item} deleteTask={deleteTask} />
          ))
        }

      </ul>
    </div>
  );
}

export default App;
