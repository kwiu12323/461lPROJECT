import Box from '@mui/material/Box'
import { height,  } from '@mui/system'
import React, { useEffect, useState } from 'react'
import './Project.css'
import { TextField } from '@mui/material'
import ProjectButtons from '../ProjectButtons/ProjectButtons'
export default class Project extends React.Component{
    state = {
        value:  0,
        qty:    this.props.quantity,
        qty1: this.props.q2,
        qty2: "0",
    }
    
    enterhandler = (e) => {
        
        if(e.key === 'Backspace'){
            this.setState(state => ({
                value: 0,
                
            }));
        }
        this.setState(state => ({
            value: e.target.value + state.value,
            
        }));
        
        
        

    }
    
    callback = (childData) => {
        alert(this.state.value)
        if(childData === "b1"){}
        this.setState(state =>({
            qty: state.qty + state.value
        }))
        if(childData === "b2"){}
        this.setState(state =>({
            qty1: state.qty1 -state.value
        }))
        if(childData === "b3"){}
        this.setState(state =>({
            qty: state.qty + state.value
        }))
        if(childData === "b1"){}
        this.setState(state =>({
            qty: state.qty1 -state.value
        }))
        this.setState(state => ({
            value: 0,
            
        }));
        
    }
    
    render(){
        return(
        <Box  sx={{
            m: 2,
            display: "flex",
            backgroundColor: "white",
            color: "white",
            height: "70px",
            width: "1000px",
            padding: "16px",
            "&:hover": {
                backgroundColor: "red"
            },
        }}
        border={1} borderColor="black"  
         >
        
            <p sx={{
                color: "black",
            }}
            >
                {this.props.projectname}
            </p>
            <p sx={{
                color: "black",
            }}
            >
                {this.props.users}
            </p>


            <div sx={{
                display: "block",
            }}>
            <p sx={{
                color: "black",
            }}
            >
                HWSet1: {this.state.qty}
            </p>
            <p sx={{
                color: "black",
            }}
                
            >
                HWSet2: {this.state.qty1}
            </p>
            </div>
            <TextField id='qtyBox'  value={this.value} onKeyDown={this.enterhandler} 
            label="qty"
            />
            <ProjectButtons pcallBack ={this.callback} joinstate="join"></ProjectButtons>
        </Box>
        )
    }
}