import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table'

function ViewDoctor(){

    const [doctor,setDoctor]=useState([]);
    const navigate = useNavigate();

    useEffect(() => {    
        fetch("http://localhost:8080/alldoctors")
        .then(r => r.json())
        .then(d => setDoctor(d))
        //setData({firstName:doctor.firstName,lastName:doctor.lastName,loginId:doctor.login_id})
    },[]);

    const logout=()=>{
        sessionStorage.removeItem("admin");
        navigate("/");
    }

    const deactivate=(ev)=>{
        const reqOptions ={
            method : 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body : JSON.stringify({
                login_id: ev.login_id.login_id,
                user_name: ev.login_id.user_name,
                password: ev.login_id.password,
                user_type: ev.login_id.user_type,
                status:"inactive"
            })
        }
        fetch("http://localhost:8080/updateuser",reqOptions)
        .then(resp=>resp.text())
        .then(data=> {if(data.length != 0)
                        {
                            alert("Status Updated!");
                            window.location.reload()
                        }
                        else{
                            alert("Status Update Failed!")
                        }
                    })
    }

    const activate=(ev)=>{
        const reqOptions ={
            method : 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body : JSON.stringify({
                login_id: ev.login_id.login_id,
                user_name: ev.login_id.user_name,
                password: ev.login_id.password,
                user_type: ev.login_id.user_type,
                status:"active"
            })
        }
        fetch("http://localhost:8080/updateuser",reqOptions)
        .then(resp=>resp.text())
        .then(data=> {if(data.length != 0)
                        {
                            alert("Status Updated!");
                            window.location.reload()
                        }
                        else{
                            alert("Status Update Failed!")
                        }
                    })

    }
    return(
        // <><div className="container fluid">
        //     <button className='btn btn-primary' style={{ float: "right", marginTop: "10px", marginRight: "10px" }} onClick={() => navigate("/admin")}>Back to Dashboard</button>
        //     <h1 className="font-weight-bold offset-4">Doctor List</h1>

        //     <Table striped bordered hover variant="dark">


        //         <thead>
        //             <tr>
        //                 <th>First Name</th>
        //                 <th>Last Name</th>
        //                 <th>Mobile Number</th>
        //                 <th>Gender</th>
        //                 <th>Date Of Birth</th>
        //                 <th>Graduation</th>
        //                 <th>Post Graduation</th>
        //                 <th>Speciality</th>
        //                 <th>Fees</th>
        //                 <th>Area</th>
        //                 <th>City</th>
        //                 <th>State</th>
        //                 <th>Status </th>
        //                 <th>Action</th>
        //             </tr>
        //         </thead>
        //         <tbody>
        //             {doctor.map((v) => {
        //                 return (
        //                     <tr>
        //                         <td>{v.firstName}</td>
        //                         <td>{v.lastName}</td>
        //                         <td>{v.mobileNumber}</td>
        //                         <td>{v.gender}</td>
        //                         <td>{v.dob}</td>
        //                         <td>{v.graduation}</td>
        //                         <td>{v.postGraduation}</td>
        //                         <td>{v.speciality}</td>
        //                         <td>{v.fees}</td>
        //                         <td>{v.area_id.areaName}</td>
        //                         <td>{v.area_id.city_id.cityName}</td>
        //                         <td>{v.area_id.city_id.state_id.stateName}</td>
        //                         <td>{v.login_id.status}</td>
        //                         <td>
        //                             <button style={{ display: v.login_id.status === 'active' ? 'block' : 'none' }} className="btn btn-primary" onClick={() => deactivate(v)}>Deactivate</button>
        //                             <button style={{ display: v.login_id.status === 'inactive' ? 'block' : 'none' }} className="btn btn-primary" onClick={() => activate(v)}>Activate</button>
        //                         </td>
        //                     </tr>
        //                 );
        //             })}
        //         </tbody>
        //     </Table>
        // </div>
        <div className="container my-4" style={{marginBottom : "50px"}}>
               <button className="btn btn-danger" onClick={logout} style={{float:"right",marginTop:"10px",marginRight:"10px"}}>Logout</button>
        <button  className='btn btn-secondary' style={{float:"right",marginTop:"10px",marginRight:"10px"}} onClick={() => navigate("/admin")}>Go Back</button> 
    <br/><br/>
                    <div>
                        <h3>Doctor List</h3>
                        <table className="table table-bordered">
                            <thead className="bg-dark text-light">
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Mobile Number</th>
                                <th>Gender</th>
                                <th>Date Of Birth</th>
                                <th>Graduation</th>
                                <th>Post Graduation</th>
                                <th>Speciality</th>
                                <th>Fees</th>
                                <th>Area</th>
                                <th>City</th>
                                <th>State</th>
                                <th>Status </th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                                {doctor.map((v) => {
                                    return(
                                        <tr>
                                <td>{v.firstName}</td>
                                <td>{v.lastName}</td>
                                <td>{v.mobileNumber}</td>
                                <td>{v.gender}</td>
                                <td>{v.dob}</td>
                                <td>{v.graduation}</td>
                                <td>{v.postGraduation}</td>
                                <td>{v.speciality}</td>
                                <td>{v.fees}</td>
                                <td>{v.area_id.areaName}</td>
                                <td>{v.area_id.city_id.cityName}</td>
                                <td>{v.area_id.city_id.state_id.stateName}</td>
                                <td>{v.login_id.status}</td>
                                <td>
                                    <button style={{ display: v.login_id.status === 'active' ? 'block' : 'none' }} className="btn btn-primary" onClick={() => deactivate(v)}>Deactivate</button>
                                    <button style={{ display: v.login_id.status === 'inactive' ? 'block' : 'none' }} className="btn btn-primary" onClick={() => activate(v)}>Activate</button>
                                </td>
                            </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
            </div>
    )
}
export default ViewDoctor;
