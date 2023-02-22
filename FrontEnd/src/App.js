import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import PatientRegistration from './Components/PatientRegistration';
import Landing from './Components/Landing';
import Header from './Components/Header';
import Footer from './Components/Footer'
import About from './Components/About';
import Contact from './Components/Contact';
import {BrowserRouter, Routes } from 'react-router-dom';
import{Route} from 'react-router';
import Admin from './Components/Admin';
import Doctor from './Components/Doctor';
import AddDoctor from './Components/AddDoctor';
import Patient from './Components/Patient';
import AddArea from './Components/AddArea';
import ViewDoctor from './Components/AdminViewDoctor';
import AdminViewPatient from './Components/AdminViewPatient';
import UpdateDoctor from './Components/UpdateDoctor';
import UpdatePatient from './Components/UpdatePatient';
import SearchDoctor from './Components/SearchDoctor';
import AddState from './Components/AddState';
import AddCity from './Components/AddCity';
import UpdateTimeTable from './Components/UpdateTimeTable';
import UpdateTimeTableByDay from './Components/UpdateTimeTableByDay';
import DoctorAppointmentSlot from './Components/DoctorAppointmentSlot';
import DoctorCurrentAppointments from './Components/DoctorCurrentAppointments';
import PatientCurrentAppointments from './Components/PatientCurrentAppointment';
import DoctorAppointmentHistory from './Components/DoctorAppointmentHistory';
import PatientAppointmentHistory from './Components/PatientAppointmentHistory';
import ForgotPassword from './Components/ForgotPassword';
import ChangePasswordDoctor from './Components/ChangePasswordDoctor';
import ChangePasswordPatient from './Components/ChangePasswordPatient';



function App() {
  return (
    <div>

    
    <BrowserRouter>
    <Header title="Connect2YourDoctor" />
          <Routes>
            <Route path="/" element={<Landing/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/signup" element={<PatientRegistration/>}></Route>
            <Route path="/admin" element={<Admin/>}></Route>
            <Route path="/doctor" element={<Doctor/>}></Route>
            <Route path="/patient" element={<Patient/>}></Route>
            <Route path="/adddoctor" element={<AddDoctor/>}></Route>
            <Route path="/addarea" element={<AddArea/>}></Route>
            <Route path="/addcity" element={<AddCity/>}></Route>
            <Route path="/addstate" element={<AddState/>}></Route>
            <Route path="/viewdoctor" element={<ViewDoctor/>}></Route>
            <Route path="/viewpatient" element={<AdminViewPatient/>}></Route>
            <Route path="/updatedoctor" element={<UpdateDoctor/>}></Route>
            <Route path="/updatepatient" element={<UpdatePatient/>}></Route>
            <Route path="/searchdoctor" element={<SearchDoctor/>}></Route>
            <Route path="/updatetimetable" element={<UpdateTimeTable/>}></Route>
            <Route path="/updatetimetablebyday" element={<UpdateTimeTableByDay/>}></Route>
            <Route path="/doctorappointment" element={<DoctorAppointmentSlot/>}></Route>
            <Route path="/doctorcurrentappointments" element={<DoctorCurrentAppointments/>}></Route>
            <Route path="/patientcurrentappointments" element={<PatientCurrentAppointments/>}></Route>
            <Route path="/doctorappointmenthistory" element={<DoctorAppointmentHistory/>}></Route>
            <Route path="/patientappointmenthistory" element={<PatientAppointmentHistory/>}></Route>
            <Route path="/forgotpassword" element={<ForgotPassword/>}></Route>
            <Route path="/changepassworddoctor" element={<ChangePasswordDoctor/>}></Route>
            <Route path="/changepasswordpatient" element={<ChangePasswordPatient/>}></Route>
          </Routes>
          <Footer/>
  </BrowserRouter>
  </div>
  );
}

export default App;
