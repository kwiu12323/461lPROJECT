import Box from '@mui/material/Box'
import { height } from '@mui/system'
import './ProjectsPage.css'
import Project from '../Project/Project'
import App from '../../App'
import React, { useEffect, useState } from 'react';
import axios from "axios";

export default class ProjectsPage extends React.Component{
    
    render(){
        
        return(
        <Box  sx={{
            p: 2,
            display: "block",
            backgroundColor: "white",
            color: "white",
            height: "300px",
            width: "1200px",
            padding: "20px",
            "&:hover": {
                padding: "32px"
            },
        }}
        border={1} borderColor="black"  
         >
        
           
            
            
            <Project projectname="Project2" users="na" quantity q1></Project>
            <Project projectname="Project2" users="na" quantity q2></Project>
            <Project projectname="Project3" users="na" quantity q2></Project>
            
        </Box>
        )
    }
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
        <style>
        {`
          td, th {
            color: black;
          }
        `}
      </style>
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
                {/* <p>{hwset.name}</p> */}
              </tr>
            ))}
       
      </div>
    );
  }