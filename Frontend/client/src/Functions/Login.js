
import React from "react";
export default class Login extends React.Component{
     handleclick = () => {
        this.props.callback();
    }
    render(){
    return (  
        <div className="login">
            <p><input type= "text" placeholder = "Username"/></p>
            <p><input type= "text" placeholder = "Password"/></p>
            <button onClick={this.handleclick}>Login</button>
        </div>
    );
}
}

