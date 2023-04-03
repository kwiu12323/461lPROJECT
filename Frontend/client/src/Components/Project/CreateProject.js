import Box from "@mui/material/Box";
import { height } from "@mui/system";
import React, { useEffect, useState } from "react";
import "./Project.css";
import { TextField } from "@mui/material";
import ProjectButtons from "../ProjectButtons/ProjectButtons";
import App from "../../App";
import axios from "axios";

export default class CreateProject extends React.Component {
  state = {
    projectName: "",
    projectId: "",
    description: "",
  };

  createProject() {
    axios
      .post("/create-project", {
        projectName: this.state.projectName,
        projectId: this.state.projectId,
        description: this.state.description,
        userId: "sdfsdf",
      })
      .then((res) => {
        console.log(res.data);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  setProjectName(name) {
    this.setState((state) => ({
      projectName: name,
    }));
  }

  setProjectId(projectId) {
    this.setState((state) => ({
      projectId: projectId,
    }));
  }

  setProjectDescription(description) {
    this.setState((state) => ({
      description: description,
    }));
  }

  render() {
    //  if(this.props.showValue === true){

    return (
      <Box
        sx={{
          p: 2,
          display: "block",
          backgroundColor: "white",
          color: "white",
          height: "20px ",
          width: "1200px",
          padding: "20px",
          "&:hover": {
            padding: "32px",
          },
        }}
        border={1}
        borderColor="black"
      >
        <input
          type="text"
          value={this.state.projectName}
          placeholder="Project Name"
          onChange={(event) => this.setProjectName(event.target.value)}
        />
        <input
          type="text"
          value={this.state.projectId}
          placeholder="Project Id"
          onChange={(event) => this.setProjectId(event.target.value)}
        />
        <input
          type="text"
          value={this.state.description}
          placeholder="Description"
          onChange={(event) => this.setProjectDescription(event.target.value)}
        />
        <button
          onClick={() => {
            if (
              this.state.projectName === "" ||
              this.state.projectId === "" ||
              this.state.description === ""
            ) {
              alert("Please fill out all project creation fields");
            } else {
              this.createProject();
            }
          }}
        >
          {" "}
          Create Project{" "}
        </button>
        {/* <button onClick={
            this.createProject
        }>Create Project</button> */}
      </Box>
    );
    //  }
  }
}
