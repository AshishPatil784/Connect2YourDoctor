package com.example.demo.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Area;
import com.example.demo.entities.City;
import com.example.demo.entities.Doctor;
import com.example.demo.entities.DoctorRegistration;
import com.example.demo.entities.Login;
import com.example.demo.repositories.DoctorTimeTableRepository;
import com.example.demo.services.AreaService;
import com.example.demo.services.CityService;
import com.example.demo.services.DoctorService;
import com.example.demo.services.LoginService;
import com.example.demo.services.StateService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class DoctorController {
	
	@Autowired
	DoctorService dservice;
	
	@Autowired
	LoginService lservice;
	
	@Autowired
	AreaService aservice;
	
	@Autowired
	DoctorTimeTableRepository dttrepo;
	@Autowired
	StateService sservice;
	@Autowired
	CityService cservice;
	
	@GetMapping("/alldoctors")
	public List<Doctor> allDoctors(){
		return dservice.allDoctors();
	}
	
//	@GetMapping("/alldoctorsbystate/{id}")
//	public List<Doctor> allDoctorsByState(@PathVariable int id){
//		return dservice.allDoctorsByState(id);
//	}
	
//	@GetMapping("/alldoctorsbycity/{id}")
//	public List<Doctor> allDoctorsByCity(@PathVariable int id){
//		City c = cservice.getCityById(id);
//		System.out.println(c);
//		return dservice.allDoctorsByCity(c);
//	}
	
	@GetMapping("/alldoctorsbyarea/{id}")
	public List<Doctor> allDoctorsByArea(@PathVariable int id){
		Area a = aservice.getAreaById(id);
		return dservice.allDoctorsByArea(a);
	}
	
	@GetMapping("/speciality")
	public List<Object> allDoctorsSpeciality(){
		return dservice.allDoctorsSpeciality();
	}
	
	@GetMapping("/doctorsbyareaandspec/{areaId}/{spec}")
	public List<Doctor> allDoctorsAreaAndSpeciality(@PathVariable int areaId, @PathVariable String spec){
		Area a = aservice.getAreaById(areaId);
		return dservice.allDoctorsAreaAndSpeciality(a,spec);
	}
	
	@GetMapping("/getonedoctor/{id}")
	public Optional<Doctor> getOneDoctor(@PathVariable int id) {
		return dservice.getOneDoctor(id);
	}
	
	@PostMapping("/savedoctor")
	public Doctor saveDoctor(@RequestBody DoctorRegistration dr) {
		System.out.println("*******"+dr);
		Login l = new Login(dr.getUserName(),dr.getPassword(),"Doctor","active");
		Login inserted = lservice.saveUser(l);
		Area area = aservice.getAreaById(dr.getAreaId());
		//System.out.println(dr.getSpeciality());
		if((inserted != null) && (area != null)) {
			Doctor d = new Doctor(dr.getFirstName(),dr.getLastName(),dr.getMobileNumber(),dr.getGender(),dr.getDob(),dr.getGraduation(),dr.getPostGraduation(),dr.getSpeciality(),dr.getFees(),area,inserted);
			return dservice.saveDoctor(d);
		}
		else {
			return null;
		}
	}
	
	@PostMapping("/updatedoctor")
	public Doctor updateDoctor(@RequestBody Doctor dr) {
		try {
		return dservice.updateDoctor(dr);
		}
		catch(Exception e) {
			return null;
		}
	}
}
