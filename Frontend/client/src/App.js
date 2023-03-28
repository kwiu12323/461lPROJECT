import './App.css';
import React, { useEffect, useState } from 'react';
import data from "./projectsdatas.json"

function App() {
  const[data, setData] = useState([{}])

  useEffect(() =>{
    fetch("/members").then(
      res => res.json()

    ).then(
        data => {
          setData(data)
          console.log(data)
        }
    )
  }, [])

  return (
    <div className="App">
      <h1>Projects</h1>
      <div className="content">
        <Projects></Projects>
      </div>
    </div>
  );
}

function Projects({}) {
  const[projectsdata, setContacts] = useState(data);
  function clickMe() {
    <form action = "http://127.0.0.1:5000/login3"></form>
  }
  function clickMe2() {
    alert("Joined Project 1");
  }
  function clickMe3() {
    alert("Joined Project 1");
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Numbers</th>
          <th>HW1</th>
          <th>HW2</th>
          <th>Join</th>
          <th>Leave</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Project Name 1</td>
          <td>HWSet1 0/100 <input type= "text" placeholder = "Enter Qty" name="Project1"/><button theme="gray">Check In</button><button theme="gray">Check Out</button></td>
          <td>HWSet1 0/100 <input type= "text" placeholder = "Enter Qty" name="Project2"/><button theme="gray">Check In</button><button theme="gray">Check Out</button></td>
          <td><button theme="gray" onClick = {clickMe}>Join</button></td>
          <td><button theme="gray" onClick = {clickMe}>Leave</button></td>
        </tr>
        <tr>
          <td>Project Name 2</td>
          <td>HWSet1 0/100 <input type= "text" placeholder = "Enter Qty" name="Project1"/><button theme="gray">Check In</button><button theme="gray">Check Out</button></td>
          <td>HWSet1 0/100 <input type= "text" placeholder = "Enter Qty" name="Project2"/><button theme="gray">Check In</button><button theme="gray">Check Out</button></td>
          <td><button theme="gray" onClick = {clickMe2}>Join</button></td>
          <td><button theme="gray" onClick = {clickMe}>Leave</button></td>
        </tr>
        <tr>
          <td>Project Name 3</td>
          <td>HWSet1 0/100 <input type= "text" placeholder = "Enter Qty" name="Project1"/><button theme="gray">Check In</button><button theme="gray">Check Out</button></td>
          <td>HWSet1 0/100 <input type= "text" placeholder = "Enter Qty" name="Project2"/><button theme="gray">Check In</button><button theme="gray">Check Out</button></td>
          <td><button theme="gray" onClick = {clickMe3}>Join</button></td>
          <td><button theme="gray" onClick = {clickMe}>Leave</button></td>
        </tr>
        
      </tbody>
    </table>
  );
}

export default App;