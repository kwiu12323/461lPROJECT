import Box from '@mui/material/Box'
import { height,  } from '@mui/system'
import React, { useEffect, useState } from 'react'
import './Project.css'
import { TextField } from '@mui/material'
import ProjectButtons from '../ProjectButtons/ProjectButtons'
import App from '../../App'
import axios from "axios";

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
            <Box sx={{
                m: 1,
                display: "flex",
                backgroundColor: "white",
                color: "white",
                height: "70px",
                width: "1000px",
                padding: "5px",
                "&:hover": {
                  backgroundColor: "red"
                },
              }} border={1} borderColor="black">
                <p sx={{
                  color: "black",
                }}>
                  {this.props.projectname}
                </p>
                <p sx={{
                  color: "black",
                }}>
                  {this.props.users}
                </p>


                <div sx={{
                display: "flex",
            }}>
                
            <p sx={{
                color: "black",
            }}
            >
                <ShowHWSet1/>
            </p>
            <p sx={{
                color: "black",
            }}
            >
                <ShowHWSet2/>
            </p>
            
            </div>
                <TextField id='qtyBox' value={this.state.value} onKeyDown={this.enterhandler}
                  label="qty"
                />
                <ProjectButtons pcallBack={this.callback} joinstate="join"></ProjectButtons>
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
      <span>
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
      </span>
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
      <span>
        {hwsets.map(hwset => (
          <tr key={hwset._id}>
            <p sx={{ marginBottom: "0.2rem" }}>{hwset.name} : {hwset.qty}/{hwset.maxQuantity}</p>
          </tr>
        ))}
      </span>
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
      <span>
            {hwsets.map(hwset => (
              <tr key={hwset._id}>
                <p sx={{ marginBottom: "0.2rem" }}>{hwset.name} : {hwset.qty}/{hwset.maxQuantity}</p>
  
              </tr>
            ))}
       
      </span>
    );
  }