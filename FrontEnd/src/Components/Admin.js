import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { NavLink } from "react-router-dom";

function Admin(){
    const[admin,setAdmin]=useState("");
  
    useEffect(() => {    
        let ad= JSON.parse(sessionStorage.getItem("admin"));
        setAdmin(ad.user_name)
    },[]);

    const logout=()=>{
        sessionStorage.removeItem("admin");
        navigate("/");
    }

    const navigate=useNavigate();
    return (
        <>
        {/* <div className="container fluid">
            <button className="btn btn-primary" onClick={logout} style={{ float: "right", marginTop: "10px", marginRight: "10px" }}>Logout</button>
            <div className="container-fluid">
                <h1>Admin Page</h1>s
                <h2>Welcome {admin}</h2>

                <button className='btn btn-primary' onClick={() => navigate("/adddoctor")} style={{ marginLeft: "10px", marginTop: "10px" }}>Add New Doctor</button>
                <button className='btn btn-primary' onClick={() => navigate("/viewdoctor")} style={{ marginLeft: "10px", marginTop: "10px" }}>View Doctor</button>
                <button className='btn btn-primary' onClick={() => navigate("/viewdoctor")} style={{ marginLeft: "10px", marginTop: "10px" }}>Enable/Disable Doctor</button>
                <button className='btn btn-primary' onClick={() => navigate("/viewpatient")} style={{ marginLeft: "10px", marginTop: "10px" }}>View Patient</button>
                <button className='btn btn-primary' onClick={() => navigate("/viewpatient")} style={{ marginLeft: "10px", marginTop: "10px" }}>Enable/Disable Patient</button>
                <button className="btn btn-primary" onClick={() => navigate("/addarea")} style={{ marginLeft: "10px", marginTop: "10px" }}>Add New Area</button>
                <button className="btn btn-primary" onClick={() => navigate("/addcity")} style={{ marginLeft: "10px", marginTop: "10px" }}>Add New City</button>
                <button className="btn btn-primary" onClick={() => navigate("/addstate")} style={{ marginLeft: "10px", marginTop: "10px" }}>Add New State</button>
            </div>
        </div> */}
        <div className="container" style={{marginBottom : "50px"}}>
                <div className="row my-3">
                    <div className="col-sm-6"><h2 className="">Hello, {admin}</h2>
                    </div>
                    <div className="col-sm-6">
                    <button className="btn btn-link btn-danger text-light offset-10 text-uppercase text-decoration-none " onClick={logout}>Logout</button>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Add New Doctor</h5>
                                <p className="card-text">Register a new doctor to database.</p>
                                <button onClick={() => navigate("/adddoctor")} className="btn btn-primary">ADD</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">View Doctor List</h5>
                                <p className="card-text">View details of all registered doctors.</p>
                                <button onClick={() => navigate("/viewdoctor")} className="btn btn-warning">VIEW</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row my-3">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Enable/Disable</h5>
                                <p className="card-text">Enable or disable a doctor.</p>
                                <button onClick={() => navigate("/viewdoctor")} className="btn btn-info">ENABLE/DISBLE</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">View Patient</h5>
                                <p className="card-text">View details of all registered patients.</p>
                                <button className="btn btn-success" onClick={() => navigate("/viewpatient")}>VIEW</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row my-3">
                    {/* <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Enable/Disable</h5>
                                <p className="card-text">Enable or disable a patient.</p>
                                <button onClick={() => navigate("/viewpatient")} className="btn btn-success">ENABLE/DISBLE</button>
                            </div>
                        </div>
                    </div> */}

                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Add Area</h5>
                                <p className="card-text">Add new areas.</p>
                                <button onClick={() => navigate("/addarea")} className="btn btn-info">ADD</button>
                            </div>
                        </div>
                    </div>
                </div>

                    <div className="row my-3">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Add City</h5>
                                <p className="card-text">Add new cities.</p>
                                <button onClick={() => navigate("/addcity")} className="btn btn-warning">ADD</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Add State</h5>
                                <p className="card-text">Add new states.</p>
                                <button onClick={() => navigate("/addstate")} className="btn btn-primary">ADD</button>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </>
    );
}





{/*
class Admin extends Component {
    render() {
        return (
            <div>
                <h1>Admin Page</h1>
                <button type="button" className="btn btn-success" style={{marginLeft: "10px"}} onClick={addDoctor}>Add New Doctor</button>
            </div>
        );
    }
}
*/}
export default Admin;