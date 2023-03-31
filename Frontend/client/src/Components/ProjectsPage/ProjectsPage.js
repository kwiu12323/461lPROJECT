import Box from '@mui/material/Box'
import { height } from '@mui/system'
import React from 'react'
import './ProjectsPage.css'
import Project from '../Project/Project'

export default class ProjectsPage extends React.Component{
    render(){
        return(
        <Box  sx={{
            p: 2,
            display: "block",
            backgroundColor: "white",
            color: "white",
            height: "400px",
            width: "1200px",
            padding: "16px",
            "&:hover": {
                padding: "32px"
            },
        }}
        border={1} borderColor="black"  
         >
        
            <p sx={{
                color: "black",
            }}
            >this is a box</p>
            <Project projectname="Project1" users="na" quantity={20} q2={30}></Project>
            <Project projectname="Project2" users="na" quantity="10/100" q2="20/100"></Project>
            <Project projectname="Project3" users="na" quantity="0/100" q2="30/100"></Project>
        </Box>
        )
    }
}