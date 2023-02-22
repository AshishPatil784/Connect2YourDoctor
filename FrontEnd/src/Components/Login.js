import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function Login(){
    const [data,setData] = useState({
        username:"",
        password:"",
        loginerror:""
    });




    const changeHandler = (e) => {
        setData((data)=>({
            ...data,
            [e.target.name]:e.target.value
        }));
    }

    const navigate = useNavigate();

    const submitData=(e)=>{
        if(data.username == '') {
            alert('Username cannot be null');
            return;
        }
        if(data.password == '') {
            alert('Password cannot be null');
            return;
        }
        e.preventDefault();
        const reqOptions ={
            method : 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body : JSON.stringify({
                user_name: data.username,
                password: data.password
            })
        }
        fetch("http://localhost:8080/logincheck",reqOptions)
        .then(resp=>resp.text())
        .then(data=> {if(data.length != 0)
            {
                const json = JSON.parse(data);
                if(json.login_id.user_type == "Patient"){
                    sessionStorage.setItem("patient",JSON.stringify(json))
                    navigate('/patient');
                }
                    
                if(json.login_id.user_type == "Doctor"){
                    sessionStorage.setItem("doctor",JSON.stringify(json))
                    navigate('/doctor');
                }
                
                if(json.user_type == "Admin"){
                    sessionStorage.setItem("admin",JSON.stringify(json))
                    navigate('/admin');
                }
            }
            else{
            //setData({loginerror:"Wrong Username or Password (or account may be disabled)! Try Again..."})
            alert("Wrong Username or Password (or account may be disabled)! Try Again...");
            }
        })

    }




    return (
        <div>
            <br/><br/>
            <div className = "container">
            <div className = "row">
                <div className = "card col-md-6 offset-md-3 offset-md-3">
                <h2 className='text-center'>Login</h2>

                <form >
                    <div className = "form-group">
                        <label> User Name: </label>
                        <input type="email" placeholder="Enter Email ID" name="username" className="form-control" 
                            value={data.username} onChange={changeHandler}/>
                            
                    </div>
                    <div className = "form-group">
                        <label> Password: </label>
                        <input type="password" placeholder="Password" name="password" className="form-control" 
                            value={data.password} onChange={changeHandler}/>
                            
                    </div >
                    <div style={{marginTop: "10px", marginLeft:"200px"}}>
                    <button className="btn btn-success" onClick={submitData}>Login</button>
                    <button className="btn btn-danger" onClick={() => navigate("/")} style={{marginLeft: "10px"}}>Cancel</button> 
                    </div>

                </form>
                <a href="/forgotpassword">Forgot password? click here...</a>
                <p className="text-danger">{data.loginerror}</p>
                </div>
                </div>
             </div>
        </div>


);
}

export default Login;