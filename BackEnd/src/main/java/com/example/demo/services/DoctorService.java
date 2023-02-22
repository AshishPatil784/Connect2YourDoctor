package com.example.demo.services;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Area;
//import com.example.demo.entities.City;
import com.example.demo.entities.Doctor;
import com.example.demo.entities.Login;
//import com.example.demo.entities.Patient;
import com.example.demo.repositories.DoctorRepository;

@Service
public class DoctorService {

	@Autowired
	DoctorRepository drepo;
	
	@Autowired
	JavaMailSender jms;
	
	//fetch patient by login details
	public Doctor getOneByLoginId(Login id) {
		return drepo.getOneByLoginId(id);
	}
	public Doctor saveDoctor(Doctor d) {	
		Doctor dd = drepo.save(d);
		if(dd != null) {
			SimpleMailMessage smm = new SimpleMailMessage();
			smm.setFrom("connecttoyourdoctor@gmail.com");
			smm.setTo(d.getLogin_id().getUser_name());
			System.out.println("--**$$"+d.getLogin_id().getUser_name());
			smm.setSubject("Registration Mail");
			Date day = new Date();
			smm.setText("Registration Successful "+day);
			jms.send(smm);
			return dd;
		}
		else {
			return null;
		}
	}
	
	public Doctor updateDoctor(Doctor d) {
		// TODO Auto-generated method stub
		try {
			return drepo.save(d);
		} catch (Exception e) {
			// TODO: handle exception
			return null;
		}
	}
	//fetch Doctor by it's id
	public Optional<Doctor> getOneDoctor(int id) {
		// TODO Auto-generated method stub
		return drepo.findById(id);
	}
	public List<Doctor> allDoctors() {
		return drepo.findAll();
		
	}
//	public List<Doctor> allDoctorsByState(int id) {
//
//		return drepo.getDoctorByState(id);
//	}
//	public List<Doctor> allDoctorsByCity(City c) {
//		// TODO Auto-generated method stub
//		return drepo.getDoctorByCity(c);
//	}
	public List<Doctor> allDoctorsByArea(Area a) {
		// TODO Auto-generated method stub
		return drepo.getDoctorByArea(a);

	}
	public Doctor getOneById(int id) {
		//return drepo.getOneById(id);
		return drepo.findById(id).get();
	}
	public List<Object> allDoctorsSpeciality() {
		return drepo.allDoctorsSpeciality();
	}
	public List<Doctor> allDoctorsAreaAndSpeciality(Area a, String spec) {
		// TODO Auto-generated method stub
		return drepo.allDoctorsAreaAndSpeciality(a,spec);
	}
	


	
}
