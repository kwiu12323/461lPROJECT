import Box from "@mui/material/Box";
import { height } from "@mui/system";
import React, { useEffect, useState } from "react";
import "./Project.css";
import { Stack, TextField } from "@mui/material";
import ProjectButtons from "../ProjectButtons/ProjectButtons";
import App from "../../App";
import axios from "axios";

export default class Project extends React.Component {
  state = {
    value: 0,
    qty: this.props.quantity,
    qty1: this.props.q2,
    projectId: this.props.projectId,
    userId: this.props.userId,
    qty2: "0",
  };

  componentWillMount() {
    this.userInProject();
  }
  enterhandler = (e) => {
    if (e.key === "Backspace") {
      this.setState((state) => ({
        value: 0,
      }));
    }
    if (
      e.key === "1" ||
      e.key === "2" ||
      e.key === "3" ||
      e.key === "4" ||
      e.key === "5" ||
      e.key === "6" ||
      e.key === "7" ||
      e.key === "8" ||
      e.key === "9" ||
      e.key === "0"
    ) {
      const newValue = parseInt(e.target.value + e.key, 10);
      this.setState((state) => ({
        value: newValue,
      }));
    }
  };

  callback = (childData) => {
    if (childData === "b1") {
      this.setState((state) => ({
        qty: parseInt(state.qty) + parseInt(state.value),
      }));
    }
    if (childData === "b2") {
      this.setState((state) => ({
        qty1: parseInt(state.qty1) + parseInt(state.value),
      }));
    }
    if (childData === "b3") {
      if (parseInt(this.state.qty) >= parseInt(this.state.value)) {
        this.setState((state) => ({
          qty: parseInt(state.qty) - parseInt(state.value),
        }));
      } else {
        alert("too much");
      }
    }
    if (childData === "b4") {
      if (parseInt(this.state.qty1) >= parseInt(this.state.value)) {
        this.setState((state) => ({
          qty1: parseInt(state.qty1) - parseInt(state.value),
        }));
      } else {
        alert("too much");
      }
    }
  };

  userInProject() {
    axios
      .get(
        "http://localhost:5000/user-in-project?userId=" +
          this.state.userId +
          "&projectId=" +
          this.state.projectId
      )
      .then((response) => {
        const res = response.data;
        this.setState((state) => ({
          joinstate: res["Result"],
        }));
      });
  }
  render() {
    return (
      <Box
        sx={{
          m: 1,
          display: "flex",
          backgroundColor: "white",
          color: "white",
          height: "150px",
          width: "1000px",
          padding: "2px",
          // "&:hover": {
          // backgroundColor: "red"
          // },
        }}
        border={1}
        borderColor="black"
      >
        <Stack>
        <p>Project Name</p>
        <p>{this.props.projectName}</p>
        </Stack>
        <Stack>
        <p>User List</p>
        <p>{this.props.users}</p>
        </Stack>
        <Stack>
        <p>Project Id</p>
        <p>{this.props.projectId}</p>
        </Stack>
        <Stack>
        <p>Project description</p>
        <p>{this.props.description}</p>
        </Stack>
        <div
          sx={{
            display: "flex",
          }}
        >
          <ShowHWSet1 />

          {/* <p sx={{
                    color: "black",
                    
                }}
                > */}
          <ShowHWSet2 />
          {/* </p> */}
        </div>
        <TextField
          id="qtyBox"
          onKeyDown={this.enterhandler}
          label="qty"
          //value={this.state.value}
        />
        <ProjectButtons
          joinstate={this.state.joinstate}
          quantity={this.state.value}
          projectId={this.state.projectId}
          userId={this.state.userId}
        ></ProjectButtons>
      </Box>
    );
  }
}
function HWSets() {
  const [hwsets, setHWSets] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/hwsets").then((response) => {
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
          {hwsets.map((hwset) => (
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
    axios.get("http://localhost:5000/api/hwsets").then((response) => {
      setHWSets(
        response.data.hwsets.filter((hwset) => hwset.name === "HWSet1")
      );
    });
  }, []);

  return (
    <span>
      {hwsets.map((hwset) => (
        <tr key={hwset._id}>
          <p sx={{ marginBottom: "0.2rem" }}>
            {hwset.name} : {hwset.qty}/{hwset.maxQuantity}
          </p>
        </tr>
      ))}
    </span>
  );
}
function ShowHWSet2() {
  const [hwsets, setHWSets] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/hwsets").then((response) => {
      setHWSets(
        response.data.hwsets.filter((hwset) => hwset.name === "HWSet2")
      );
    });
  }, []);

  return (
    <span>
      {hwsets.map((hwset) => (
        <tr key={hwset._id}>
          <p>
            {hwset.name} : {hwset.qty}/{hwset.maxQuantity}
          </p>
        </tr>
      ))}
    </span>
  );
}
