import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

function Patient(){
    const [state,setState]=useState({
        firstName:"",
        lastName:""
    });
    const navigate=useNavigate();

      // Similar to componentDidMount and componentDidUpdate:  
      useEffect(() => {    
            let patient= JSON.parse(sessionStorage.getItem("patient"));
            setState({firstName:patient.firstName,lastName:patient.lastName})
        },[]);
        
    const logout=()=>{
        sessionStorage.removeItem("patient");
        navigate("/");
    }
        
    return(
        <>
        {/* <div className="container fluid">
            <button className="btn btn-primary" onClick={logout} style={{ float: "right", marginTop: "10px", marginRight: "10px" }}>Logout</button>
            <div className="container-fluid">
                <h1>Patient DashBoard</h1>
                <h2>Welcome...{state.firstName} {state.lastName}</h2>
                <button className='btn btn-primary' onClick={() => navigate("/updatepatient")} style={{ marginLeft: "10px", marginTop: "10px" }}>Update Profile</button>
                <button className='btn btn-primary' style={{ marginLeft: "10px", marginTop: "10px" }} onClick={() => navigate("/searchdoctor")}>Search Doctor</button>
                <button className='btn btn-primary' style={{ marginLeft: "10px", marginTop: "10px" }} onClick={() => navigate("/patientcurrentappointments")}>Current Appointments</button>
                <button className='btn btn-primary' style={{ marginLeft: "10px", marginTop: "10px" }} onClick={() => navigate("/patientappointmenthistory")}>Appointment History</button>
                <button className='btn btn-primary' style={{ marginLeft: "10px", marginTop: "10px" }} onClick={() => navigate("/patientcurrentappointments")}>Cancel Appointments</button>
                <button className='btn btn-primary' style={{ marginLeft: "10px", marginTop: "10px" }} onClick={() => navigate("/searchdoctor")}>Book Appointment</button>
            </div>

        </div> */}
        <div className="container" style={{marginBottom : "50px"}}>
                <div className="row my-3">
                    <div className="col-sm-6"><h2 className="">Hello, {state.firstName} {state.lastName}</h2></div>
                    <div className="col-sm-6">
                        <button onClick={logout} className="btn btn-link btn-danger text-light offset-10 text-uppercase text-decoration-none ">Logout</button>
                    </div>
                </div>

                <div className="row my-3">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Update Profile</h5>
                                <p className="card-text">Update your account details.</p>
                                <button onClick={() => navigate("/updatepatient")} className="btn btn-primary">UPDATE</button>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Search Doctor</h5>
                                <p className="card-text">Search doctor.</p>
                                <button onClick={() => navigate("/searchdoctor")} className="btn btn-info">SEARCH</button>
                            </div>
                        </div>
                    </div> */}
                </div>

                <div className="row my-3">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Current Appointments</h5>
                                <p className="card-text">Check your current appointments.</p>
                                <button onClick={() => navigate("/patientcurrentappointments")} className="btn btn-success">CHECK</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Appointment History</h5>
                                <p className="card-text">Check your appointment history.</p>
                                <button onClick={() => navigate("/patientappointmenthistory")} className="btn btn-warning">CHECK</button>
                            </div>
                        </div>
                    </div>
                </div>
                    <div className="row my-3">
                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Cancel Appointments</h5>
                                    <p className="card-text">Cancel your appointments.</p>
                                    <button onClick={() => navigate("/patientcurrentappointments")} className="btn btn-danger">CANCEL</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Book Appointment</h5>
                                    <p className="card-text">Book your appointment.</p>
                                    <button onClick={() => navigate("/searchdoctor")} className="btn btn-info">BOOK</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row my-3">
                            <div className="col-sm-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Change Password</h5>
                                        <p className="card-text">Change your password.</p>
                                        <button onClick={() => navigate("/changepasswordpatient")} className="btn btn-success">CHANGE</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </>
    );
}
















{/*
class Patient extends Component {
    constructor(props) {
        super(props)

        this.state = {
            patientId: '',
            firstName: ''
        }

    }
    componentDidMount(){
        let patient = JSON.parse(sessionStorage.getItem("patient"));
        this.setState({
            patientId: patient.patient_id,
            firstName: patient.first_name
        })
    }
    render() {
        return (
            <div>
                <h1>Patient Page{this.state.patientId}{this.state.firstName}</h1>
            </div>
        );
    }
}
*/}
export default Patient;