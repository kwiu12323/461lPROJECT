import Box from '@mui/material/Box'
import { height,  } from '@mui/system'
import React, { useEffect, useState } from 'react'
import './Project.css'
import { TextField } from '@mui/material'
import ProjectButtons from '../ProjectButtons/ProjectButtons'
export default class Project extends React.Component{
    state = {
        value:  0,
        qty:  this.props.quantity,
        qty1: this.props.q2,
        qty2: "0",
    }
    
    enterhandler = (e) => {
        
        if(e.key === 'Backspace'){
            this.setState(state => ({
                value: 0,
                
            }));
        }
        if(e.key === '1' || e.key==='2' || e.key==='3' || e.key==='4' || e.key==='5' || e.key==='6' || e.key==='7' || e.key==='8' || e.key==='9' || e.key==='0'){
            
            this.setState(state => ({
            
            value: e.target.value + e.key
            
            }));
        }
    }
        
        

    
    
    callback = (childData) => {

        
        if(childData === "b1"){
        this.setState(state =>({
            qty: parseInt(state.qty) + parseInt(state.value)
        }))
        }
        if(childData === "b2"){
        this.setState(state =>({
            qty1: parseInt(state.qty1) +parseInt(state.value)
        }))
        }
        if(childData === "b3"){
            
            if(parseInt(this.state.qty) >= parseInt(this.state.value)){
                this.setState(state =>({
            
                    qty: parseInt(state.qty) - parseInt(state.value)
                }))
        
            } 
            else{
                alert("too much")
            } 
        }     
        if(childData === "b4"){
            if(parseInt(this.state.qty1) >= parseInt(this.state.value)){
                this.setState(state =>({
                    qty1: parseInt(state.qty1) -parseInt(state.value)
                }))
        
            }
            else{
                alert("too much");
            }
        }    
        
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
            <TextField id='qtyBox'  value={this.state.value} onKeyDown={this.enterhandler} 
            label="qty"
            />
            <ProjectButtons pcallBack ={this.callback} joinstate="join"></ProjectButtons>
        </Box>
        )
    }
}