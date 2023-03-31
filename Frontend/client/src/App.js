import './App.css';
import React, { useEffect, useState } from 'react';
import axios from "axios";


import data from "./projectsdatas.json"

function App() {
  const [data, setData, setHwsetsQty, hwsets, setHwsets] = useState([{}])
  const [profileData, setProfileData, ] = useState(null)
  
  function getData() {
    axios({
      method: "GET",
      url:"/userList",
    })
    .then((response) => {
      const res =response.data
      setProfileData(({
        profile_name: res.name,
        userId: res.userId,
        userPW: res.password,}))
    }).catch((error) => {
      if (error.response) {
        console.log(error.response)
        console.log(error.response.status)
        console.log(error.response.headers)
        }
    })}
    


    useEffect(() => {
      fetch('/api/hwsets')
        .then(response => response.json())
        .then(data => {
          console.log(data); // log the data to the console
          setHwsets(data.hwsets);
        })
        .catch(error => console.error(error));
    }, []);
  

  return (
    
    
    <div className="App">
      <h1>Projects</h1>
      <div className="content">
        <Projects></Projects>
      </div>
      <HWSets></HWSets>
      
      <ShowHWSet1></ShowHWSet1>
      <ShowHWSet2></ShowHWSet2>
      
      {/* //testing from here */}
      {/* new line start*/}
      <button onClick={getData}>CheckUserButton</button>
       {profileData && <div>
             <p>User name: {profileData.profile_name}</p>
             <p>User ID: {profileData.userId}</p>
             <p>User password: {profileData.userPW}</p>
             <p>User password: {profileData.userPW}</p>
           </div>
       }
        {/* end of new line */}
     
    </div>
  //   <div className="App">
    
  //   <main>
  //     <HWSets />
  //   </main>
  // </div>
  );
}

function HWSets() {
  const [hwsets, setHWSets] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/hwsets').then(response => {
      setHWSets(response.data.hwsets);
    });
  }, []);

  return (
    <div>
      <h2>Hardware Sets</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Max Quantity</th>
            <th>Current Quantity</th>
          </tr>
        </thead>
        <tbody>
          {hwsets.map(hwset => (
            <tr key={hwset._id}>
              <td>{hwset.name}</td>
              <td>{hwset.maxQuantity}</td>
              <td>{hwset.qty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


function ShowHWSet1() {
  const [hwsets, setHWSets] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/hwsets').then(response => {
      setHWSets(response.data.hwsets.filter(hwset => hwset.name === "HWSet1"));
    });
  }, []);

  return (
    <div>
          {hwsets.map(hwset => (
            <tr key={hwset._id}>
              <p>{hwset.name} {hwset.qty}/{hwset.maxQuantity}</p>

            </tr>
          ))}
     
    </div>
  );
}
function ShowHWSet2() {
  const [hwsets, setHWSets] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/hwsets').then(response => {
      setHWSets(response.data.hwsets.filter(hwset => hwset.name === "HWSet2"));
    });
  }, []);

  return (
    <div>
          {hwsets.map(hwset => (
            <tr key={hwset._id}>
              <p>{hwset.name} {hwset.qty}/{hwset.maxQuantity}</p>

            </tr>
          ))}
     
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
    // <div className="App">
           
    //        </div>
    
    <table>
      <thead>
        <tr>
          <th scope = "col">Numbers</th>
          <th>HW1</th>
          <th>HW2</th>
          <th>Join</th>
          <th>Leave</th>
        </tr>
      </thead>
      <tbody>
      
        <tr>
          <td>Project Name 1</td>
          
          <td style={{display: 'flex', alignItems: 'center'}}> 
          <ShowHWSet1 style={{marginRight: '10px'}}/>
          <input type= "text" placeholder = "Enter Qty" name="Project1"/>
          <button theme="gray">Check In</button>
          <button theme="gray">Check Out</button></td>
          
          <td>
          <ShowHWSet2 style={{marginRight: '10px'}}/> 
          <input type= "text" placeholder = "Enter Qty" name="Project2"/>
          <button theme="gray">Check In</button>
          <button theme="gray">Check Out</button></td>

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