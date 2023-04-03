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
        var quantity = this.props.quantity; // Access the quantity prop

        axios.get('/get_availability')
        .then(response => {
            const currentAvailability = 100-response.data.quantity
           
            
            if (quantity > currentAvailability) {
                 alert(`The maximum number of items is 100, You can only check in smaller amount than ${currentAvailability}.`);
                //alert(currentAvailability)
            }else{
                
                alert("Checked in " + quantity)
                axios.post('/update_quantity', {
                  quantity: quantity, // Use the quantity prop here
                })
                .then(res => {
                  console.log(res.data)
                  
                  window.location.reload();
                  quantity = 0;
                })
                .catch(err => {
                  console.log(err)
                })
            }
        }).catch(error => {
            alert('An error occurred while getting availability!');
        });
        
      }
      sendCheckinToBackend2 = () => {
        var quantity = this.props.quantity; // Access the quantity prop

        axios.get('/get_availability2')
        .then(response => {
            const currentAvailability = 100-response.data.quantity
           
            
            if (quantity > currentAvailability) {
                alert(`The maximum number of items is 100, You can only check in smaller amount than ${currentAvailability}.`);
            }else{
                
                alert("Checked in " + quantity)
        axios.post('/update_quantity2', {
          quantity: quantity, // Use the quantity prop here
        })
        .then(res => {
          console.log(res.data)
          window.location.reload();
          quantity = 0;
        })
        .catch(err => {
          console.log(err)
        })
            }
        }).catch(error => {
            alert('An error occurred while getting availability!');
        });
        
      }
      sendCheckoutToBackend = () => {
        var quantity = this.props.quantity; // Access the quantity prop

        axios.get('/get_availability')
        .then(response => {
            
            const currentAvailability = response.data.quantity
            
            if (quantity > currentAvailability) {
                alert(`Not enough items available. Current availability is ${currentAvailability}.`);
            }else{
                alert("Checked out " + quantity)
                axios.post('/checkout_quantity', {
                  quantity: quantity, // Use the quantity prop here
                })
                .then(res => {
                  console.log(res.data)
                  window.location.reload();
                  quantity = 0;
                })
                .catch(err => {
                  console.log(err)
                })
            }
        }).catch(error => {
            alert('An error occurred while getting availability!');
        });
        
      }
      sendCheckoutToBackend2 = () => {

        var quantity = this.props.quantity; // Access the quantity prop

        axios.get('/get_availability2')
        .then(response => {
            
            const currentAvailability = response.data.quantity
            
            if (quantity > currentAvailability) {
                alert(`Not enough items available. Current availability is ${currentAvailability}.`);
            }else{
                alert("Checked out " + quantity)
                axios.post('/checkout_quantity2', {
                  quantity: quantity, // Use the quantity prop here
                })
                .then(res => {
                  console.log(res.data)
                  window.location.reload();
                  quantity = 0;
                })
                .catch(err => {
                  console.log(err)
                })
            }
        }).catch(error => {
            alert('An error occurred while getting availability!');
        });
        


        
       
      
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
