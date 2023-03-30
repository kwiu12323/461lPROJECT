const Login = () => {
    const handleclick = () => {
        alert('Works');
    }

    return (  
        <div className="login">
            <p><input type= "text" placeholder = "Username"/></p>
            <p><input type= "text" placeholder = "Password"/></p>
            <button onClick={handleclick}>Login</button>
        </div>
    );
}
 
export default Login;