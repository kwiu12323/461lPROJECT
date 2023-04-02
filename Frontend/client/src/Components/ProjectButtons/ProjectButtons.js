import { height } from '@mui/system'
import React from 'react'
import { Button, ButtonGroup } from '@mui/material'
import axios from 'axios'

export default class ProjectButtons extends React.Component{

   
    // handleCheckinHW1 = () => {
    //     const quantity = parseInt(prompt("Enter the quantity:"));
    //     if (!isNaN(quantity)) {
    //         axios.post('/checkin-hw1', { quantity })
    //             .then(response => {
    //                 alert('Quantity updated successfully!');
    //             })
    //             .catch(error => {
    //                 alert('An error occurred while updating quantity!');
    //             });
    //     }
    // }
    sendCheckinToBackend = () => {
        const quantity = this.props.quantity; // Access the quantity prop
        
        alert("checked in " + quantity)
        axios.post('/update_quantity', {
          quantity: quantity, // Use the quantity prop here
        })
        .then(res => {
          console.log(res.data)
          window.location.reload();
        })
        .catch(err => {
          console.log(err)
        })
      }
      sendCheckinToBackend2 = () => {
        const quantity = this.props.quantity; // Access the quantity prop
        
        alert("checked in " + quantity)
        axios.post('/update_quantity2', {
          quantity: quantity, // Use the quantity prop here
        })
        .then(res => {
          console.log(res.data)
          window.location.reload();
        })
        .catch(err => {
          console.log(err)
        })
      }
      sendCheckoutToBackend = () => {
        const quantity = this.props.quantity; // Access the quantity prop
        
        alert("checked out " + quantity)
        axios.post('/checkout_quantity', {
          quantity: quantity, // Use the quantity prop here
        })
        .then(res => {
          console.log(res.data)
          window.location.reload();
        })
        .catch(err => {
          console.log(err)
        })
      }
      sendCheckoutToBackend2 = () => {
        const quantity = this.props.quantity; // Access the quantity prop
        
        alert("checked out " + quantity)
        axios.post('/checkout_quantity2', {
          quantity: quantity, // Use the quantity prop here
        })
        .then(res => {
          console.log(res.data)
          window.location.reload();
        })
        .catch(err => {
          console.log(err)
        })
      }


    sendBack = () => {
        //alert("check in 1");
        //this.props.pcallBack("b1");
        this.sendCheckinToBackend();
        
    }
    sendBack2 = () => {
        
        //this.props.pcallBack("b2");
        this.sendCheckinToBackend2();
        
        

    }
    sendBack3 = () => {
       
        //this.props.pcallBack("b3");
        this.sendCheckoutToBackend();
    }
    sendBack4 = () => {
        
        //this.props.pcallBack("b4");
        this.sendCheckoutToBackend2();
    }
    render(){
        
        return(
            <>
           
            
            
            
            <ButtonGroup variant='contained' orientation='vertical'>
                <Button
                    onClick={this.sendBack}
                >
                    checkin HW1
                </Button>
                <Button
                    onClick={this.sendBack2}
                >checkin HW2
                </Button>
            </ButtonGroup>

            <ButtonGroup variant='contained' orientation='vertical'>
                <Button
                    onClick={this.sendBack3}
                >
                    checkout HW1
                </Button>
                <Button
                    onClick={this.sendBack4}
                >
                    checkout HW2
                </Button>
            </ButtonGroup>
            <button variant="contained"> {this.props.joinstate}</button>
            </>
            
        )
    }
}
