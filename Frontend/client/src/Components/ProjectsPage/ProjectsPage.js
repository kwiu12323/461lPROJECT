import Box from '@mui/material/Box'
import { height, Stack } from '@mui/system'
import './ProjectsPage.css'
import Project from '../Project/Project'
import CreateProject from '../Project/CreateProject'
import App from '../../App'
import React, { useEffect, useState } from 'react';
import axios from "axios";

export default class ProjectsPage extends React.Component{
    state = {
        projects: [],
    }

    componentWillMount(){
      this.fetchProjectData()
    }
    fetchProjectData() {
      axios({
        method: "GET",
        url:"/fetch-projects",
      })
      .then((response) => {
        const res =response.data
        console.log(res)
        const fetched_projects = []
        const count = res["count"]
        var charInt = "0"
        for (var i=0; i < count; i++) {
          console.log(res["result"][charInt])
          fetched_projects.push(res["result"][charInt])
          charInt++;
        }
        this.setState({projects: fetched_projects})
      }).catch((error) => {
        if (error.response) {
          console.log(error.response)
          console.log(error.response.status)
          console.log(error.response.headers)
          }
      })
    }

    renderProjects() {
      console.log("in project")
      console.log(this.state.projects)
      if(this.state.projects.count != 0) {
      return this.state.projects.map((project) => {
        return (
          <Project projectname={project["projectName"]} users={project["users"]} quantity={project["qty"]}></Project>
        );
    });
    }
    }
    render(){
        // if(this.props.showValue === true){
        return(
        <Stack>
        <Box  sx={{
            p: 2,
            display: "block",
            backgroundColor: "white",
            color: "white",
            height: "300px ",
            width: "1200px",
            padding: "20px",
            "&:hover": {
                padding: "32px"
            },
        }}
        border={1} borderColor="black"  
         >
            {this.renderProjects()}
        </Box>
        <CreateProject></CreateProject>
        </Stack>
        )
       //}
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