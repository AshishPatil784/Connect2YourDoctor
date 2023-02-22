import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function PatientRegistration(){

    const [data,setData] = useState({
        user_name:"",
        password:"",
        first_name:"",
        last_name:"",
        mobile_number:"",
        gender:"",
        blood_group:"",
        dob:""
    });

    const [Error,setError] = useState({
        user_name_error:"",
        password_error:"",
        first_name_error:"",
        last_name_error:"",
        mobile_number_error:"",
        gender_error:"",
        blood_group_error:"",
        dob_error:""
    });

    const [flag,setFlag]=useState({
        userName:false,
        password:false,
        firstName:false,
        lastName:false,
        mobileNumber:false,
        gender:false,
        bloodGroup:false,
        dob:false,
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
    const validateBloodGroup=(e)=>{
        let bg = e.target.value;
        if(bg === ""){
            setError({...Error,blood_group_error:"Please select Blood Group"});
            setFlag({...flag,bloodGroup:false});

        }
        else{
            setError({...Error,blood_group_error:""});
            setFlag({...flag,bloodGroup:true});

        }
    }
    const navigate = useNavigate();

    const changeHandler = (e) => {
        setData((data)=>({
            ...data,
            [e.target.name]:e.target.value
        }));
    }
    const refreshPage = (e) => {
        window.location.reload();
      };
    

    const submitData=(e)=>{
        // if(data.gender===""){
        //     setError({...Error,gender_error:"Please select gender"})
        //     setFlag({...flag,gender:false})
        //     return;
        // }else{
        //     setError({...Error,gender_error:""})
        //     setFlag({...flag,gender:true})
        // }
        e.preventDefault();
        //console.log(flag.userName+" "+flag.password+" "+flag.firstName+" "+flag.lastName+" "+flag.mobileNumber+" "+flag.dob+" "+flag.bloodGroup);
        if(flag.userName&&flag.password&&flag.firstName&&flag.lastName&&flag.mobileNumber&&flag.dob&&flag.bloodGroup)
            {
                const reqOptions ={
                    method : 'POST',
                    headers: {
                        'Content-Type':'application/json'
                    },
                    body : JSON.stringify({
                        user_name: data.user_name,
                        password: data.password,
                        first_name:data.first_name,
                        last_name:data.last_name,
                        mobile_number:data.mobile_number,
                        gender:data.gender,
                        blood_group:data.blood_group,
                        dob:data.dob
                    })
                }
                fetch("http://localhost:8080/savepatient",reqOptions)
                .then(resp=>resp.text())
                .then(data=> {if(data.length != 0)
                    {
                        alert("Registration successful!!!");
                        navigate('/login');
                    }
                    else{
                        alert("Registration Failed!!!");
                        navigate('/signup');
                    }
                })
            }else{
                alert("All fields are compulsory and must follow guidelines");
                // window.location.reload();
                navigate('/signup');
            }
       

    }


    return(
        <div>
        
    <br/><br/>
    <div className = "container" style={{marginBottom : "50px"}}>
    <div className = "row my-4">
        <div className = "card col-md-6 offset-md-3 offset-md-1">
        <h2 className='text-center'>Patient Registration </h2>

        <form method="POST">
            <div className = "form-group">
                <label><b> User Name: </b></label>
                <input type="text" placeholder="User Name" name="user_name" className="form-control" 
                    value={data.user_name} onChange={changeHandler} onBlur={validateEmail}/>
                    <span className="text text-danger">{Error.user_name_error}</span>

            </div>
            <div style={{ marginTop: '10px' }} className = "form-group">
                <label><b>  Password: </b></label>
                <input type="password" placeholder="Password" name="password" className="form-control" 
                    value={data.password} onChange={changeHandler} onBlur={validatePassword}/>
                    <span className="text text-danger">{Error.password_error}</span>
            </div >
            <div style={{ marginTop: '10px' }} className = "form-group">
                <label><b>  first Name: </b></label>
                <input type="text" placeholder="First Name" name="first_name" className="form-control" 
                    value={data.first_name} onChange={changeHandler} onBlur={validateFirstName}/>
                    <span className="text text-danger">{Error.first_name_error}</span>
            </div>
            <div style={{ marginTop: '10px' }} className = "form-group">
                <label><b>  Last Name: </b></label>
                <input type="text" placeholder="Last Name" name="last_name" className="form-control" 
                    value={data.last_name} onChange={changeHandler} onBlur={validateLastName}/>
                    <span className="text text-danger">{Error.last_name_error}</span>
            </div >
            <div style={{ marginTop: '10px' }} className = "form-group">
                <label><b>  User mobile_number: </b></label>
                <input type="text" placeholder="User mobile_number" name="mobile_number" className="form-control" 
                    value={data.mobile_number} onChange={changeHandler} onBlur={validateMobileNumber}/>
                     <span className="text text-danger">{Error.mobile_number_error}</span>
            </div>

            <div style={{ marginTop: '10px' }} className = "form-group" onChange={changeHandler} >
                <label><b>  Gender: </b></label>
                <input style={{ marginLeft: '10px' }} type="radio" value="Male" name="gender" /> Male
                <input style={{ marginLeft: '10px' }} type="radio" value="Female" name="gender" /> Female
                <input style={{ marginLeft: '10px' }} type="radio" value="Other" name="gender" /> Other
                <span className="text text-danger">{Error.gender_error}</span>
            </div>
            <div style={{ marginTop: '10px' }} className = "form-group">
                <label><b>  Blood Group: </b></label>
                <select style={{ marginLeft: '10px' }} value={data.blood_group} name="blood_group" onChange={changeHandler} onBlur={validateBloodGroup}>
                    <option value="">Select</option>                           
                    <option value="A+">A+</option>
                    <option value="B+">B+</option>
                    <option value="O+">O+</option>
                    <option value="AB+">AB+</option>
                    <option value="A-">A-</option>
                    <option value="B-">B-</option>
                    <option value="O-">O-</option>
                    <option value="AB-">AB-</option>
                    <option value="NA">NA</option>
                </select>
                <span className="text text-danger">{Error.blood_group_error}</span>
            </div>

            <div style={{ marginTop: '10px' }} className = "form-group">
                <label><b>  Date of Birth: </b></label>
                <input type="date" placeholder="Date Of Birth" name="dob" className="form-control" 
                    value={data.dob} onChange={changeHandler} onBlur={validateDob}/>
                    <span className="text text-danger">{Error.dob_error}</span>
            </div >
            <div style={{marginTop: "10px"}}>
            <button className="btn btn-success" onClick={submitData}>Register</button>
            <button type="button" className="btn btn-primary" style={{marginLeft: "10px"}} onClick={refreshPage}>Reset</button>
            <button className="btn btn-danger" onClick={() => navigate("/")} style={{marginLeft: "10px"}}>Cancel</button> 
            

   
            </div>

</form>

        </div>
        </div>
</div>
    </div>
    );
}




{/*
class PatientRegistration extends Component {
    constructor(props){
        super(props)
        this.state={
            user_name:"",
            password:"",
	        first_name:"",
            last_name:"",
            mobile_number:"",
            gender:"",
            blood_group:"",
            dob:"",
            status:""
        }
    }
    handleChange=(e)=>{
        const nm = e.target.name;
        const val = e.target.value;
        this.setState({ [nm]: val});
    }
    cancel(){
        this.props.history.push('/signup');
    }

    submitData=(e)=>{
        e.preventDefault();
        const reqOptions ={
            method : 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body : JSON.stringify({
                user_name: this.state.user_name,
                password: this.state.password,
                first_name:this.state.first_name,
                last_name:this.state.last_name,
                mobile_number:this.state.mobile_number,
                gender:this.state.gender,
                blood_group:this.state.blood_group,
                dob:this.state.dob
            })
        }
        fetch("http://localhost:8080/savepatient",reqOptions)
        .then(resp=>resp.text())
        .then(data=> {if(data.length != 0)
            {
                const json = JSON.parse(data);
                this.setState({status:"Registration successful!!!"})
            }
            else{
                this.setState({status:"Registration Failed!!!"})
            }
        })

    }
    render() {
        return (
            <div>
            <br/><br/>
            <div className = "container">
            <div className = "row">
                <div className = "card col-md-6 offset-md-3 offset-md-3">
                <h2 className='text-center'>Patient Registration </h2>

                <form>
                    <div className = "form-group">
                        <label><b> User Name: </b></label>
                        <input type="text" placeholder="User Name" name="user_name" className="form-control" 
                            value={this.state.user_name} onChange={this.handleChange}/>
                    </div>
                    <div style={{ marginTop: '10px' }} className = "form-group">
                        <label><b>  Password: </b></label>
                        <input type="password" placeholder="Password" name="password" className="form-control" 
                            value={this.state.password} onChange={this.handleChange}/>
                    </div >
                    <div style={{ marginTop: '10px' }} className = "form-group">
                        <label><b>  first Name: </b></label>
                        <input type="text" placeholder="First Name" name="first_name" className="form-control" 
                            value={this.state.first_name} onChange={this.handleChange}/>
                    </div>
                    <div style={{ marginTop: '10px' }} className = "form-group">
                        <label><b>  Last Name: </b></label>
                        <input type="text" placeholder="Last Name" name="last_name" className="form-control" 
                            value={this.state.last_name} onChange={this.handleChange}/>
                    </div >
                    <div style={{ marginTop: '10px' }} className = "form-group">
                        <label><b>  User mobile_number: </b></label>
                        <input type="text" placeholder="User mobile_number" name="mobile_number" className="form-control" 
                            value={this.state.mobile_number} onChange={this.handleChange}/>
                    </div>
                //     <div className = "form-group">
                //         <label> Gender: </label>
                //         <input type="text" placeholder="Gender" name="gender" className="form-control" 
                //             value={this.state.gender} onChange={this.handleChange}/>

                //      </div >
                    <div style={{ marginTop: '10px' }} className = "form-group" onChange={this.handleChange}>
                        <label><b>  Gender: </b></label>
                        <input style={{ marginLeft: '10px' }} type="radio" value="Male" name="gender" /> Male
                        <input style={{ marginLeft: '10px' }} type="radio" value="Female" name="gender" /> Female
                        <input style={{ marginLeft: '10px' }} type="radio" value="Other" name="gender" /> Other
                    </div>
                    <div style={{ marginTop: '10px' }} className = "form-group">
                        <label><b>  Blood Group: </b></label>
                        <select style={{ marginLeft: '10px' }} value={this.state.blood_group} name="blood_group" onChange={this.handleChange}>
                            <option value="">Select</option>                           
                            <option value="A+">A+</option>
                            <option value="B+">B+</option>
                            <option value="O+">O+</option>
                        </select>
                        // <input type="radio" placeholder="Blood Group" name="blood_group" className="form-control" 
                        //     value={this.state.blood_group} onChange={this.handleChange}/>
                    </div>

                    <div style={{ marginTop: '10px' }} className = "form-group">
                        <label><b>  Date of Birth: </b></label>
                        <input type="date" placeholder="Date Of Birth" name="dob" className="form-control" 
                            value={this.state.dob} onChange={this.handleChange}/>
                    </div >
                    <div style={{marginTop: "10px", marginLeft:"240px"}}>
                    <button className="btn btn-success" onClick={this.submitData}>Register</button>
                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                    </div>

                </form>

                <p>{this.state.status}</p>
                </div>
                </div>
            </div>
            </div>
        );
    }
}
*/}
export default PatientRegistration;