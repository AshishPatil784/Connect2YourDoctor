import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';


function DoctorAppointmentSlot(){

    const [timeslot, setTimeSlots]=useState([]);
    const [date, setDate]=useState("");
    const [empty, setEmpty]=useState([]);
    const [slot,setSlot]=useState([]);

    // const [data,setData]=useState({
    //     appointmentDate:"",
    //     appointmentTime:"",
    //     doctor_id:"",
    //     patient_id:""
    // })
    const [doctor,setDoctor]=useState({});

    const [patient,setPatient]=useState({});
    useEffect(() => {    
        let doctor= JSON.parse(sessionStorage.getItem("doctor"));
        setDoctor(doctor);
        let patient = JSON.parse(sessionStorage.getItem("patient"));
        setPatient(patient);
    },[]);

    const appointments=(e)=>{
        var today,dd,mm,yyyy;
        today = new Date();
        mm=today.getMonth()+1;
        if(mm<10){
            mm=0+""+mm;
        }
        yyyy=today.getFullYear();
        setDate(e.target.value);
        // console.log("dd-"+mm+"-"+yyyy);
        if(e.target.value === "dd-"+mm+"-"+yyyy){
            setEmpty("Please select valid date!!!")
        }
        else{
            fetch("http://localhost:8080/getappointments/"+doctor.doctorId+"/"+e.target.value)
            .then(r => r.json())
            .then(d => {/*console.log(d);*/setTimeSlots(d)}
            );
        }
}

const minDate=()=>{
    var today,dd,mm,yyyy;
    today = new Date();
    dd=today.getDate()+1;
    if(dd<10){
        dd=0+""+dd;
    }
    mm=today.getMonth()+1;
    if(mm<10){
        mm=0+""+mm;
    }
    yyyy=today.getFullYear();
    return yyyy+"-"+mm+"-"+dd;

}

const maxDate=()=>{
    var today,dd,mm,yyyy;
    today = new Date();
    dd=today.getDate()+14;
    if(dd<10){
        dd=0+""+dd;
    }
    mm=today.getMonth()+1;
    if(mm<10){
        mm=0+""+mm;
    }
    yyyy=today.getFullYear();
    return yyyy+"-"+mm+"-"+dd;
    
}
    const navigate =useNavigate();

    const getTimeSlots=()=>{

            if(timeslot.length==0){
                setEmpty("Doctor Appointments not available for current selection!");
                setSlot([]);
            }else{
                setEmpty("");
                setSlot(timeslot);
                // setEmpty(time);
            }
        

    }
    const book=(e)=>{

        // console.log(doctor);
        // console.log(patient);

        const reqOptions ={
            method : 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body : JSON.stringify({
                appointmentDate : date,
		        appointmentTime : e,
                appointmentType:"walk-in",
		        doctorId : doctor,
		        patientId : patient,
                status:"scheduled"
            })
        }
        fetch("http://localhost:8080/saveappointment",reqOptions)
        .then(resp=>resp.text())
        .then(data=> {if(data.length != 0)
            {
                alert("Appointment Booked!");
                navigate('/patient');
            }
            else{
                alert("Appointment Failed!!!");
                window.location.reload();
            }
        })

    }
    const logout=()=>{
        sessionStorage.removeItem("patient");
        navigate("/");
    }


    return(
        <div className="container-fluid" style={{marginBottom : "50px"}}>
          <button className="btn btn-danger" onClick={logout} style={{float:"right",marginTop:"10px",marginRight:"10px"}}>Logout</button>
        <button  className='btn btn-secondary' style={{float:"right",marginTop:"10px",marginRight:"10px"}} onClick={() => navigate("/patient")}>Go Back</button> 
    <br/><br/>
            <h2 className="font-weight-bold offset-4">Select Day</h2>
            <label><b>Select a Date :</b></label>

            <input type="date" onChange={appointments} min={minDate()} max={maxDate()} name="date" />

             <button  className='btn btn-primary' style={{marginLeft:"10px"}} onClick={getTimeSlots}>View Time Slots</button>
             <h1 className="font-weight-bold offset-4">Available Appointments</h1>
               
                <p className="text text-danger offset-4"><b>{empty}</b></p>
                
            <Table className="table table-bordered" >
            <thead className="bg-dark text-light">
                 <tr>
                    <th>Slot</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
        {
            slot.map((v)=>{
                return (
            <tr>
                <td>{v}</td>
                <td>
                <button className="btn btn-primary" onClick={()=>book(v)}  >Book Appointment</button>
                </td>
            </tr>
            )})
            
        }
            </tbody>
        </Table>
        </div>
    );

}
export default DoctorAppointmentSlot;