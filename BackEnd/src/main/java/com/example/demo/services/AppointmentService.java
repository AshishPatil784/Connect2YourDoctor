package com.example.demo.services;

import java.sql.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Appointment;
import com.example.demo.entities.Doctor;
import com.example.demo.entities.Patient;
import com.example.demo.repositories.AppointmentRepository;

@Service
public class AppointmentService {
	
	@Autowired
	AppointmentRepository arepo;
	
	@Autowired
	JavaMailSender jms;
	
	@Autowired
	DoctorService dservice;
	public List<Appointment> getAllAppointment(){
		return arepo.findAll();
	}
	
	public List<Object> getAppointmentByDidandDate(Doctor d,Date date){

		return arepo.getAppointmentByDidandDate(d,date);
	}

	public Appointment saveAppointment(Appointment a) {
		
		Appointment aa = arepo.save(a);
		if(aa != null) {
			SimpleMailMessage smm = new SimpleMailMessage();
			smm.setFrom("connecttoyourdoctor@gmail.com");
			smm.setTo(aa.getPatientId().getLogin_id().getUser_name(),aa.getDoctorId().getLogin_id().getUser_name());
			//System.out.println("%%**"+aa.getPatientId().getLogin_id().getUser_name()+"\n@@$$"+aa.getDoctorId().getLogin_id().getUser_name());
			smm.setSubject("Appointment Booking");
			smm.setText("Appointment Booked Successfully"+"\nAppointment Date & Time : "+aa.getAppointmentDate()+" "+
			aa.getAppointmentTime()+"\nDoctor Details : \nDoctor Name :" + aa.getDoctorId().getFirstName()+" "+aa.getDoctorId().getLastName()+
			" (Speciality : "+aa.getDoctorId().getSpeciality()+")\nPatient Details : \nPatient Name : "+aa.getPatientId().getFirstName()+" "+aa.getPatientId().getLastName()
			+" (Mobile Number : "+aa.getPatientId().getMobileNumber()+")\nLocation : "+aa.getDoctorId().getArea_id().getAreaName()+" "+
			aa.getDoctorId().getArea_id().getCity_id().getCityName()+" "+aa.getDoctorId().getArea_id().getCity_id().getState_id().getStateName());
			jms.send(smm);
			return aa;
		}
		else {
			return null;
		}
	}
	
	public Appointment cancelAppointment(Appointment a) {
		Appointment aa = arepo.save(a);
		if(aa != null) {
			SimpleMailMessage smm = new SimpleMailMessage();
			smm.setFrom("connecttoyourdoctor@gmail.com");
			smm.setTo(aa.getPatientId().getLogin_id().getUser_name(),aa.getDoctorId().getLogin_id().getUser_name());
			smm.setSubject("Appointment Cancelled");
			smm.setText("Appointment Cancelled \nCancelled By : "+aa.getCancelledBy()+"\nAppointment Date & Time : "+aa.getAppointmentDate()+" "+
			aa.getAppointmentTime()+"\nDoctor Details : \nDoctor Name :" + aa.getDoctorId().getFirstName()+" "+aa.getDoctorId().getLastName()+
			" (Speciality : "+aa.getDoctorId().getSpeciality()+")\nPatient Details : \nPatient Name : "+aa.getPatientId().getFirstName()+" "+aa.getPatientId().getLastName()
			+" (Mobile Number : "+aa.getPatientId().getMobileNumber()+")\nLocation : "+aa.getDoctorId().getArea_id().getAreaName()+" "+
			aa.getDoctorId().getArea_id().getCity_id().getCityName()+" "+aa.getDoctorId().getArea_id().getCity_id().getState_id().getStateName());
			jms.send(smm);
			return aa;
		}
		else {
			return null;
		}
	}

	public List<Appointment> getAppointmentByDid(Doctor d, java.util.Date date1) {	
		return arepo.getAppointmentByDid(d, date1);
	}
	
	public List<Appointment> getAppointmentHistoryByDid(Doctor d, java.util.Date date1) {	
		return arepo.getAppointmentHistoryByDid(d, date1);
	}

	public List<Appointment> getAppointmentByPatient(Patient p, java.util.Date date1) {
		return arepo.getAppointmentByPatient(p,date1);
	}

	public List<Appointment> getAppointmentHistoryByPid(Patient p, java.util.Date date1) {
		// TODO Auto-generated method stub
		return arepo.getAppointmentHistoryByPid(p,date1);
	}


}
