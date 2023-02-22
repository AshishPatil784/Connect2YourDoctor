import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table'

function DoctorCurrentAppointments(){
    const [doctorId,setDoctorId]=useState("");
    // const [appointments,setAppointments]=useState([]);
    useEffect(() => {
        let doc= JSON.parse(sessionStorage.getItem("doctor"));
        setDoctorId(doc.doctorId);
    },[]);

    const [appointments,setAppointments]=useState([]);
    useEffect(() => {
        fetch("http://localhost:8080/appointmentsbydid/"+doctorId)
        .then(r => r.json())
        .then(d => setAppointments(d))
    });
    // const currentappointments=()=>{
    //     fetch("http://localhost:8080/appointmentsbydid/"+doctorId)
    //     .then(r => r.json())
    //     .then(d => setAppointments(d))
    // }

    const navigate = useNavigate();

    const cancel=(ev)=>{
        // console.log(ev);
        // console.log(ev.appointmentId+""+ ev.appointmentDate+""+ ev.appointmentTime+ev.appointmentType+ev.doctorId+ev.patientId);
        const reqOptions ={
            method : 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body : JSON.stringify({
                appointmentId:ev.appointmentId,
                appointmentDate : ev.appointmentDate,
		        appointmentTime : ev.appointmentTime,
                appointmentType:ev.appointmentType,
		        doctorId : ev.doctorId,
		        patientId : ev.patientId,
                status:"cancelled",
                cancelledBy:"Doctor"
            })
        }
        fetch("http://localhost:8080/cancelappointment",reqOptions)
        .then(resp=>resp.text())
        .then(data=> {if(data.length != 0)
            {
                alert("Appointment cancelled!");
                navigate('/doctor');
            }
            else{
                alert("Appointment cancel Failed!!!");
                window.location.reload();
            }
        })
    }
    const logout=()=>{
        sessionStorage.removeItem("doctor");
        navigate("/");
    }
    return(
        <>
        {/* <div className="container-fluid">
            <button className="btn btn-primary" onClick={logout} style={{ float: "right", marginTop: "10px", marginRight: "10px" }}>Logout</button>
            <button className='btn btn-primary' style={{ float: "right", marginTop: "10px", marginRight: "10px" }} onClick={() => navigate("/doctor")}>Back to Dashboard</button>
            <button className='btn btn-primary' onClick={currentappointments}>Show Current Appointments</button>

            <div>
                <h1 className="font-weight-bold offset-4">Doctor Appointment List</h1>

                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Appointment Date</th>
                            <th>Appointment Time</th>
                            <th>Appointment Type</th>
                            <th>Appointment Status</th>
                            <th>Patient Id</th>
                            <th>Patient Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointments.map((v) => {
                            return (
                                <tr>
                                    <td>{v.appointmentDate}</td>
                                    <td>{v.appointmentTime}</td>
                                    <td>{v.appointmentType}</td>
                                    <td>{v.status}</td>
                                    <td>{v.patientId.patient_id}</td>
                                    <td>{v.patientId.firstName} {v.patientId.lastName}</td>

                                    <td>
                                        <button className="btn btn-primary" onClick={() => cancel(v)}>Cancel Appointment</button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </div>
        </div> */}
        <div className="container my-4" style={{marginBottom : "50px"}}>
        <button className="btn btn-danger" onClick={logout} style={{float:"right",marginTop:"10px",marginRight:"10px"}}>Logout</button>
        <button  className='btn btn-secondary' style={{float:"right",marginTop:"10px",marginRight:"10px"}} onClick={() => navigate("/doctor")}>Go Back</button> 
    <br/><br/>           
         <div>
                    {/* <button className="btn btn-primary" onClick={currentappointments}>Show Current Appointments</button> */}
                    <h3>Doctor List</h3>
                    <table className="table table-bordered">
                        <thead className="bg-dark text-light">
                        <tr>
                            <th>Appointment Date</th>
                            <th>Appointment Time</th>
                            <th>Appointment Type</th>
                            <th>Appointment Status</th>
                            <th>Patient Id</th>
                            <th>Patient Name</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                            {appointments.map((v) => {
                                return (
                                    <tr>
                                    <td>{v.appointmentDate}</td>
                                    <td>{v.appointmentTime}</td>
                                    <td>{v.appointmentType}</td>
                                    <td>{v.status}</td>
                                    <td>{v.patientId.patient_id}</td>
                                    <td>{v.patientId.firstName} {v.patientId.lastName}</td>

                                    <td>
                                        <button className="btn btn-primary" onClick={() => cancel(v)}>Cancel Appointment</button>
                                    </td>
                                </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            </>
    );
}
export default DoctorCurrentAppointments;