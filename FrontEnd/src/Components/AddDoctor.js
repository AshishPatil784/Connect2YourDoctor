import { useState,useEffect } from "react";
import { useNavigate } from 'react-router-dom';


function AddDoctor(){
    const navigate = useNavigate();
    const [city,setCity]=useState([]);
    const [area,setArea]=useState([]);
    const [data,setData] = useState({
        userName:"",
        password:"",
        firstName:"",
        lastName:"",
        mobileNumber:"",
        gender:"",
        dob:"",
        graduation:"",
        postGraduation:"",
        speciality:"",
        fees:"",
        areaId:"",
        state:[]
    });

    const [Error,setError] = useState({
        user_name_error:"",
        password_error:"",
        first_name_error:"",
        last_name_error:"",
        mobile_number_error:"",
        gender_error:"",
        dob_error:"",
        graduation_error:"",
        speciality_error:"",
        fees_error:"",
        areaId_error:""
    });

    const [flag,setFlag]=useState({
        userName:false,
        password:false,
        firstName:false,
        lastName:false,
        mobileNumber:false,
        gender:false,
        dob:false,
        graduation:false,
        speciality:false,
        fees:false,
        areaId:false,
    });

    const validateEmail=(e)=> {
        let email = e.target.value;
        let emailRegex = new RegExp( /^[A-Za-z0-9._-]+@[A-Za-z0-9._-]+\.[A-Za-z]{2,4}$/);
        if(emailRegex.test(email) === true ) {
             setError({...Error,user_name_error:""});
             setFlag({...flag,userName:true});

        }
        else {
            setError({...Error,user_name_error: "Email format should be 'abc@gmail.com' and it can include (A-Z a-z 0-9 . _ -)"});
            setFlag({...flag,userName:false});

        }
    }

    const validatePassword=(e)=> {
        let pass = e.target.value;
        let passRegex = new RegExp(  /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z]).{8,16}$/);
        if(passRegex.test(pass) === true) {
            setError({...Error,password_error:""});
            setFlag({...flag,password:true});

        }
        else {
           setError({...Error,password_error: "Password must be alphanumeric and should contains at least a special character with min length 8 and max length 16"});
           setFlag({...flag,password:false});

        }
    }

    const validateFirstName=(e)=>{
        let name = e.target.value;
        if(name === ""){
            setError({...Error,first_name_error:"Please enter First Name"});
            setFlag({...flag,firstName:false});

        }
        else{
            setError({...Error,first_name_error:""});
            setFlag({...flag,firstName:true});

        }
    }
    const validateLastName=(e)=>{
        let name = e.target.value;
        if(name === ""){
            setError({...Error,last_name_error:"Please enter Last Name"});
            setFlag({...flag,lastName:false});
            console.log(flag.lastName);

        }
        else{
            setError({...Error,last_name_error:""});
            setFlag({...flag,lastName:true});
            console.log(flag.lastName);

        }
    }
    const validateMobileNumber=(e)=>{
        let mobileNumber = e.target.value;
        let mnRegex = new RegExp(  /^[0-9]{10}$/);
        if(mnRegex.test(mobileNumber) === true){
            setError({...Error,mobile_number_error:""});
            setFlag({...flag,mobileNumber:true});

        }
        else{
            setError({...Error,mobile_number_error:"Mobile Number should be 10 digits without +91 or 0"});
            setFlag({...flag,mobileNumber:false});

        }
    }
    // const validateGenger=(e)=>{
    //     let gender = e.target.name;
    //     if(gender.checked){
    //         setError({...Error,gender_error:""});
    //     }
    //     else{
    //         setError({...Error,gender_error:"Gender must be selected"});
    //     }
    // }
    const validateDob=(e)=>{
        let dob = e.target.value;
        if(dob === ""){
            setError({...Error,dob_error:"Please enter BirthDate"});
            setFlag({...flag,dob:false});

        }
        else{
            setError({...Error,dob_error:""});
            setFlag({...flag,dob:true});

        }
    }

    const validateGraduation=(e)=>{
        let grad = e.target.value;
        if(grad === ""){
            setError({...Error,graduation_error:"Please enter Graduation"});
            setFlag({...flag,graduation:false});

        }
        else{
            setError({...Error,graduation_error:""});
            setFlag({...flag,graduation:true});

        }
    }

    const validateSpeciality=(e)=>{
        let spec = e.target.value;
        if(spec === ""){
            setError({...Error,speciality_error:"Please enter Speciality"});
            setFlag({...flag,speciality:false});

        }
        else{
            setError({...Error,speciality_error:""});
            setFlag({...flag,speciality:true});

        }
    }

    const validateFees=(e)=>{
        let fees = e.target.value;
        if(fees === ""){
            setError({...Error,fees_error:"Please enter Fees"});
            setFlag({...flag,fees:false});

        }
        else{
            setError({...Error,fees_error:""});
            setFlag({...flag,fees:true});

        }
    }

    const validateArea=(e)=>{
        let area = e.target.value;
        if(area === ""){
            setError({...Error,areaId_error:"Please enter area"});
            setFlag({...flag,areaId:false});

        }
        else{
            setError({...Error,areaId_error:""});
            setFlag({...flag,areaId:true});

        }
    }

    // const [state,setState]=useState();
    const changeHandler = (e) => {
        setData((data)=>({
            ...data,
            [e.target.name]:e.target.value
        }));
        console.log(e.target.name+" "+e.target.value)
    }
    const refreshPage = (e) => {
        window.location.reload();
      };


      const cityFetch=(e)=>{
          const val=e.target.value;
          console.log(val);
        fetch("http://localhost:8080/getcitybystate/"+val)
        .then(r => r.json())
        .then(d => setCity(d));
        console.log(city);
      }


      const areaFetch=(e)=>{
        const val=e.target.value;
      fetch("http://localhost:8080/areabycity/"+val)
      .then(r => r.json())
      .then(d => setArea(d))
      console.log(area)
    }

    const logout=()=>{
        sessionStorage.removeItem("admin");
        navigate("/");
    }
 
    useEffect(() => {   
        fetch("http://localhost:8080/allstates")
        .then(r => r.json())
        .then(d => setData({...data,state: d}))
        // console.log(data.state)
    },[]);

    
      const submitData=(e)=>{
        // console.log(data);
        e.preventDefault();
        // console.log(flag.userName+" "+flag.password+" "+flag.firstName+" "+flag.lastName+" "+flag.mobileNumber+" "+flag.dob+" "+" "+flag.graduation+" "+flag.speciality
        // +" "+flag.fees+" "+flag.areaId);
        if(flag.userName&&flag.password&&flag.firstName&&flag.lastName&&flag.mobileNumber&&flag.dob&&flag.graduation&&flag.speciality
            &&flag.fees&&flag.areaId){
            const reqOptions ={
                method : 'POST',
                headers: {
                    'Content-Type':'application/json'
                },
                body : JSON.stringify({
                    userName: data.userName,
                    password: data.password,
                    firstName:data.firstName,
                    lastName:data.lastName,
                    mobileNumber:data.mobileNumber,
                    gender:data.gender,
                    dob:data.dob,
                    graduation:data.graduation,
                    speciality:data.speciality,
                    postGraduation:data.postGraduation,
                    fees:data.fees,
                    areaId:data.areaId
                })
            }
            fetch("http://localhost:8080/savedoctor",reqOptions)
            .then(resp=>resp.text())
            .then(data=> {if(data.length != 0)
                {
                    alert("New Doctor added successfully!!!");
                    navigate('/admin');
                }
                else{
                    alert("Failed!!!");
                    navigate('/adddoctor');
                    //window.location.reload();
                }
            })
        }
        else{
            alert("All fields are compulsory and must follow guidelines");
                // window.location.reload();
                navigate('/adddoctor');
        }

    }
    
    return(
        <div  className="container fluid" style={{marginBottom : "50px"}}>
        <button className="btn btn-danger" onClick={logout} style={{float:"right",marginTop:"10px",marginRight:"10px"}}>Logout</button>
        <button  className='btn btn-secondary' style={{float:"right",marginTop:"10px",marginRight:"10px"}} onClick={() => navigate("/admin")}>Go Back</button> 
    <br/><br/>
    <div className = "container">
    <div className = "row">
        <div className = "card col-md-6 offset-md-3 offset-md-3">
        <h2 className='text-center'>Add New Doctor </h2>

        <form method="POST">
            <div className = "form-group">
                <label><b> User Name: </b></label>
                <input type="text" placeholder="User Name" name="userName" className="form-control" 
                    value={data.userName} onChange={changeHandler} onBlur={validateEmail}/>
                    <span className="text text-danger">{Error.user_name_error}</span>
            </div>
            <div style={{ marginTop: '10px' }} className = "form-group">
                <label><b>  Password: </b></label>
                <input type="password" placeholder="Password" name="password" className="form-control" 
                    value={data.password} onChange={changeHandler} onBlur={validatePassword}/>
                    <span className="text text-danger">{Error.password_error}</span>
            </div >
            <div style={{ marginTop: '10px' }} className = "form-group">
                <label><b>  First Name: </b></label>
                <input type="text" placeholder="First Name" name="firstName" className="form-control" 
                    value={data.firstName} onChange={changeHandler} onBlur={validateFirstName}/>
                    <span className="text text-danger">{Error.first_name_error}</span>
            </div>
            <div style={{ marginTop: '10px' }} className = "form-group">
                <label><b>  Last Name: </b></label>
                <input type="text" placeholder="Last Name" name="lastName" className="form-control" 
                    value={data.lastName} onChange={changeHandler} onBlur={validateLastName}/>
                    <span className="text text-danger">{Error.last_name_error}</span>
            </div >
            <div style={{ marginTop: '10px' }} className = "form-group">
                <label><b>  User mobileNumber: </b></label>
                <input type="text" placeholder="User mobileNumber" name="mobileNumber" className="form-control" 
                    value={data.mobileNumber} onChange={changeHandler} onBlur={validateMobileNumber}/>
                    <span className="text text-danger">{Error.mobile_number_error}</span>
            </div>

            <div style={{ marginTop: '10px' }} className = "form-group" onChange={changeHandler}>
                <label><b>  Gender: </b></label>
                <input style={{ marginLeft: '10px' }} type="radio" value="Male" name="gender" /> Male
                <input style={{ marginLeft: '10px' }} type="radio" value="Female" name="gender" /> Female
                <input style={{ marginLeft: '10px' }} type="radio" value="Other" name="gender" /> Other
            </div>
            {/* <div style={{ marginTop: '10px' }} className = "form-group">
                <label><b>  Blood Group: </b></label>
                <select style={{ marginLeft: '10px' }} value={data.blood_group} name="blood_group" onChange={changeHandler}>
                    <option value="">Select</option>                           
                    <option value="A+">A+</option>
                    <option value="B+">B+</option>
                    <option value="O+">O+</option>
                </select>
              
            </div> */}

            <div style={{ marginTop: '10px' }} className = "form-group">
                <label><b>  Date of Birth: </b></label>
                <input type="date" placeholder="Date Of Birth" name="dob" className="form-control" 
                    value={data.dob} onChange={changeHandler} onBlur={validateDob}/>
                    <span className="text text-danger">{Error.dob_error}</span>
            </div >

            <div style={{ marginTop: '10px' }} className = "form-group">
                <label><b>  Graduation: </b></label>
                <input type="text" placeholder="Enter Graduation Degree name" name="graduation" className="form-control" 
                    value={data.graduation} onChange={changeHandler} onBlur={validateGraduation}/>
                    <span className="text text-danger">{Error.graduation_error}</span>
            </div >

            <div style={{ marginTop: '10px' }} className = "form-group">
                <label><b>  Post Graduation: </b></label>
                <input type="text" placeholder="Enter Post Graduation Degree name(optional)" name="postGraduation" className="form-control" 
                    value={data.postGraduation} onChange={changeHandler}/>
            </div >

            <div style={{ marginTop: '10px' }} className = "form-group">
                <label><b>  Speciality: </b></label>
                <input type="text" placeholder="Speciality" name="speciality" className="form-control" 
                    value={data.speciality} onChange={changeHandler} onBlur={validateSpeciality}/>
                    <span className="text text-danger">{Error.speciality_error}</span> 
            </div >

            <div style={{ marginTop: '10px' }} className = "form-group">
                <label><b>  Fees: </b></label>
                <input type="text" placeholder="Enter fees" name="fees" className="form-control" 
                    value={data.fees} onChange={changeHandler} onBlur={validateFees}/>
                    <span className="text text-danger">{Error.fees_error}</span>
            </div >
            <div style={{ marginTop: '10px' }} className = "form-group">
            <label><b>  Area ID: </b></label>
                {/* <input type="text" placeholder="Enter Area Id" name="areaId" className="form-control" 
                    value={data.areaId} onChange={changeHandler}/> */}
                    
                     <select style={{ marginLeft: '10px' }} name="state" onChange={cityFetch}>
                        <option value="0" >--state--</option>
                        {
                            data.state.map((v)=>{
                            return (
                                <option key={v.stateId} value={v.stateId} >{v.stateName}</option>
                            )})
                        }
                    </select>
                    
                   <select style={{ marginLeft: '10px' }} name="city" onChange={areaFetch}>
                        <option value="0" >--city--</option>
                         {
                            city.map((v)=>{
                            return (
                                <option key={v.cityId} value={v.cityId} >{v.cityName}</option>
                            )})
                        } 
                    </select>

                     <select style={{ marginLeft: '10px' }} name="areaId" value={data.areaId} onChange={changeHandler} onBlur={validateArea}>
                        <option value="">--area--</option>
                        {
                            area.map((v)=>{
                            return (
                                <option key={v.areaId} value={v.areaId} >{v.areaName}</option>
                            )})
                        }
                    </select>
                    <span className="text text-danger">{Error.areaId_error}</span> 
            </div>



            <div style={{marginTop: "10px"}}>
            <button className="btn btn-success" onClick={submitData}>Register</button>
            <button type="button" className="btn btn-danger" style={{marginLeft: "10px"}} onClick={refreshPage}>Reset</button>
            <button className="btn btn-danger" onClick={() => navigate("/admin")} style={{marginLeft: "10px"}}>Cancel</button> 
            <button className="btn btn-primary" onClick={() => navigate("/addarea")} style={{marginLeft: "10px"}}>Add Area</button> 

   
            </div>

</form>

        </div>
        </div>
</div>
    </div>
    );

}
export default AddDoctor;

