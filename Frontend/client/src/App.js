import React, {useState, useEffect} from 'react'
import Userid from "./Userid";
import Login from "./Login";
import SignUp from "./SignUp";
import NewProject from "./NewProject";

function App() {
  

    
  
    const [data, setData] = useState([{}])

    useEffect(() => {
        fetch("http://localhost:5000/members")
        .then(res => res.json())
        .then(
            data => {
                setData(data)
                console.log(data)
            }   
        )


    },[])

  return (
    <div>
        {(typeof data.members === 'undefined') ? (
            <p>Loading...</p>
        ) : (
            data.members.map((member, i) => (
                <p key ={i}>{member}</p>
            ))
        )}

      <>
      <NewProject />
      <Login />
      <SignUp />
      
      </>
    </div>
    
  )
  
}

export default App