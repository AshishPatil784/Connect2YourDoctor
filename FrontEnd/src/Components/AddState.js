import { useState,useEffect } from "react";
import { useNavigate } from 'react-router-dom';

function AddState(){



    const [data,setData] = useState({
        stateName:""
    });


    const navigate=useNavigate();

    const changeHandler = (e) => {
        setData((data)=>({
            ...data,
            [e.target.name]:e.target.value
        }));
        console.log(e.target.value)
    }

    const refreshPage = (e) => {
        window.location.reload();
    };
      const submitData=(e)=>{
        e.preventDefault();
        const reqOptions ={
            method : 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body : JSON.stringify({
                stateName:data.stateName
            })
        }
        fetch("http://localhost:8080/savestate",reqOptions)
        .then(resp=>resp.text())
        .then(data=> {if(data.length != 0)
            {
                alert("New State added successfully!!!");
                navigate('/admin');
            }
            else{
                alert("Failed!!!");
                window.location.reload();

            }
        })

    }

    const logout=()=>{
        sessionStorage.removeItem("admin");
        navigate("/");
    }


    return(
        <div className="container-fluid" >
            <button className="btn btn-primary" onClick={logout} style={{float:"right",marginTop:"10px",marginRight:"10px"}}>Logout</button> 
            <button  className='btn btn-secondary' style={{float:"right",marginTop:"10px",marginRight:"10px"}} onClick={() => navigate("/admin")}>Go Back</button>
            <h2> Add New State</h2>
            <form>
                <div style={{ marginTop: '10px' }} className = "form-group">
                    
                    <label><b> State Name: </b></label>
                    <input type="text" placeholder="Enter State Name" name="stateName" className="form-control" 
                        value={data.stateName} onChange={changeHandler}/>
                </div>
                    
                <div style={{marginTop: "10px", marginLeft:"240px"}}>
                <button className="btn btn-success" onClick={submitData}>Add State</button>
                <button type="button" className="btn btn-danger" style={{marginLeft: "10px"}} onClick={ refreshPage}>Reset</button>
                <button className="btn btn-danger" onClick={() => navigate("/admin")} style={{marginLeft: "10px"}}>Cancel</button> 
                
                </div>
            </form>
        </div>
    );
}
export default AddState;