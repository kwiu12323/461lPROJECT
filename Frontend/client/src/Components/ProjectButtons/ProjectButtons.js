import { height } from "@mui/system";
import React from "react";
import { Button, ButtonGroup } from "@mui/material";
import axios from "axios";

export default class ProjectButtons extends React.Component {
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
    var quantity = 0
    quantity = this.props.quantity; // Access the quantity prop
    
    var projectId = this.props.projectId;
    var userId = this.props.userId;

    axios
      .get("/get_availability")
      .then((response) => {
        const currentAvailability = 100 - response.data.quantity;

        if (quantity > currentAvailability) {
          alert(
            `The maximum number of items is 100, You can only check in smaller amount than ${currentAvailability}.`
          );
          //alert(currentAvailability)
        } else {
          axios
            .post("/update_quantity", {
              quantity: quantity,
              projectId: projectId,
              userId: userId, // Use the quantity prop here
            })
            .then((res) => {
              console.log(res.data);
              if (res.data["result"] != "Failed") {
                alert("Checked in " + quantity);
                window.location.reload();
                quantity = 0;
              } else {
                alert("Checked in failed please join project ");
              }
            })
            .catch((err) => {
              console.log(err);
              alert("Checked out failed please join project ");

            });
        }
      })
      .catch((error) => {
        alert("An error occurred while getting availability!");
      });
  };
  sendCheckinToBackend2 = () => {
    var quantity = 0
    quantity = this.props.quantity; // Access the quantity prop
    var projectId = this.props.projectId;
    var userId = this.props.userId;

    axios
      .get("/get_availability2")
      .then((response) => {
        const currentAvailability = 100 - response.data.quantity;

        if (quantity > currentAvailability) {
          alert(
            `The maximum number of items is 100, You can only check in smaller amount than ${currentAvailability}.`
          );
        } else {
          axios
            .post("/update_quantity2", {
              quantity: quantity,
              projectId: projectId,
              userId: userId, // Use the quantity prop here
            })
            .then((res) => {
              if (res.data["result"] != "Failed") {
                alert("Checked in " + quantity);
                window.location.reload();
                quantity = 0;
              } else {
                alert("Checked in failed please join project ");
              }
            })
            .catch((err) => {
              console.log(err);
              
              alert("Checked out failed please join project ");
            });
        }
      })
      .catch((error) => {
        alert("An error occurred while getting availability!");
      });
  };
  sendCheckoutToBackend = () => {
    var quantity = 0
    quantity = this.props.quantity; // Access the quantity prop
    var projectId = this.props.projectId;
    var userId = this.props.userId;

    axios
      .get("/get_availability")
      .then((response) => {
        const currentAvailability = response.data.quantity;

        if (quantity > currentAvailability) {
          alert(
            `Not enough items available. Current availability is ${currentAvailability}.`
          );
        } else {
          axios
            .post("/checkout_quantity", {
              quantity: quantity,
              projectId: projectId,
              userId: userId, // Use the quantity prop here
            })
            .then((res) => {
              if (res.data["result"] != "Failed") {
                alert("Checked out " + quantity);
                window.location.reload();
                quantity = 0;
              } else {
                alert("Checked out failed please join project ");
              }
            })
            .catch((err) => {
              console.log(err);
              alert("Checked out failed please join project ");
            });
        }
      })
      .catch((error) => {
        alert("An error occurred while getting availability!");
      });
  };
  sendCheckoutToBackend2 = () => {
    var quantity = 0
    quantity = this.props.quantity; // Access the quantity prop
    var projectId = this.props.projectId;
    var userId = this.props.userId;

    axios
      .get("/get_availability2")
      .then((response) => {
        const currentAvailability = response.data.quantity;

        if (quantity > currentAvailability) {
          alert(
            `Not enough items available. Current availability is ${currentAvailability}.`
          );
        } else {
          axios
            .post("/checkout_quantity2", {
              quantity: quantity,
              projectId: projectId,
              userId: userId, // Use the quantity prop here
            })
            .then((res) => {
              if (res.data["result"] != "Failed") {
                alert("Checked out " + quantity);
                window.location.reload();
                quantity = 0;
              } else {
                alert("Checked out failed please join project ");
              }
            })
            .catch((err) => {
              console.log(err);
              alert("Checked out failed please join project ");
            });
        }
      })
      .catch((error) => {
        alert("An error occurred while getting availability!");
      });
  };

  sendBack = () => {
    //alert("check in 1");
    //this.props.pcallBack("b1");
    this.sendCheckinToBackend();
  };
  sendBack2 = () => {
    //this.props.pcallBack("b2");
    this.sendCheckinToBackend2();
  };
  sendBack3 = () => {
    //this.props.pcallBack("b3");
    this.sendCheckoutToBackend();
  };
  sendBack4 = () => {
    //this.props.pcallBack("b4");
    this.sendCheckoutToBackend2();
  };

  joinLeaveAction = () => {
    var projectId = this.props.projectId;
    var userId = this.props.userId;
    if(this.props.joinstate === "Join"){
        axios
            .post("/join-project", {
              'projectId': projectId,
              'userId': userId, // Use the quantity prop here
            })
            .then((res) => {
              if (res.data["result"] != "Failed") {
                alert("Joined Project ");
                window.location.reload();
              } else {
                alert("Failed to join project");
              }
            })
            .catch((err) => {
              console.log(err);
            });
    } else {
        axios
            .post("/leave-project", {
              'projectId': projectId,
              'userId': userId, // Use the quantity prop here
            })
            .then((res) => {
              if (res.data["result"] != "Failed") {
                alert("Left Project ");
                window.location.reload();
              } else {
                alert("Failed to leave project");
              }
            })
            .catch((err) => {
              console.log(err);
            });
    }
  };
  render() {
    return (
      <>
        <ButtonGroup variant="contained" orientation="vertical">
          <Button onClick={this.sendBack}>checkin HW1</Button>
          <Button onClick={this.sendBack2}>checkin HW2</Button>
        </ButtonGroup>

        <ButtonGroup variant="contained" orientation="vertical">
          <Button onClick={this.sendBack3}>checkout HW1</Button>
          <Button onClick={this.sendBack4}>checkout HW2</Button>
        </ButtonGroup>
        <button onClick={this.joinLeaveAction} variant="contained"> {this.props.joinstate}</button>
      </>
    );
  }
}
