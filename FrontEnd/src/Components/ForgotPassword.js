import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function ForgotPassword(){

    const [data,setData] = useState({
        username:"",
    });




    const changeHandler = (e) => {
        setData((data)=>({
            ...data,
            [e.target.name]:e.target.value
        }));
    }

    const navigate = useNavigate();

    const submitData=(e)=>{
        e.preventDefault();
        if(data.username == '') {
            alert('Username cannot be null');
            return;
        }

        const reqOptions ={
            method : 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body : JSON.stringify({
                user_name: data.username,
            })
        }
        fetch("http://localhost:8080/forgotpassword",reqOptions)
        .then(resp=>resp.text())
        .then(data=> {if(data.length != 0)
            {
                alert("Password sent to registered emailId successfully");
                navigate("/login");
            }
            else{
                alert("Wrong emailId.. Please try again");
                navigate("/forgotpassword");
            }
        })
    }




    return (
        <div>
            <br/><br/>
            <div className = "container">
            <div className = "row">
                <div className = "card col-md-6 offset-md-3 offset-md-3">
                <h2 className='text-center'>Send Password To Email</h2>

                <form >
                    <div className = "form-group">
                        <label> Enter your registered emailId: </label>
                        <input type="email" placeholder="Enter Email ID" name="username" className="form-control" 
                            value={data.username} onChange={changeHandler}/>
                            
                    </div>
                    <div style={{marginTop: "10px", marginLeft:"200px"}}>
                    <button className="btn btn-success" onClick={submitData}>SEND</button>
                    <button className="btn btn-danger" onClick={() => navigate("/login")} style={{marginLeft: "10px"}}>Cancel</button> 
                    </div>

                </form>
                </div>
                </div>
             </div>
        </div>

);
}
export default ForgotPassword;