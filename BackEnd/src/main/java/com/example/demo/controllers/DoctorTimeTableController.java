package com.example.demo.controllers;

import java.sql.Date;
import java.time.LocalTime;
import java.time.temporal.ChronoUnit;

import java.util.ArrayList;
import java.util.List;
import java.util.ListIterator;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

/*@DateTimeFormat(pattern = "yyyy/MM/dd")
import org.springframework.format.annotation.DateTimeFormat;*/

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Doctor;
import com.example.demo.entities.DoctorTimeTable;
import com.example.demo.services.AppointmentService;
import com.example.demo.services.DoctorService;
import com.example.demo.services.DoctorTimeTableService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class DoctorTimeTableController {

	@Autowired
	DoctorTimeTableService dttservice;
	
	@Autowired
	DoctorService dservice;
	
	@Autowired
	AppointmentService aservice;
	
	@GetMapping("/gettimetablebyid/{id}")
	public Optional<DoctorTimeTable> getTimeTableById(@PathVariable int id) {
		return dttservice.getTimeTableById(id);
	}
	
	@GetMapping("/getappointments/{id}/{date}")
	public List<LocalTime> getTimeTableById(@PathVariable int id,@PathVariable Date date) {
		try {
			@SuppressWarnings("deprecation")
			int da = date.getDay();
			String day = null;
			switch(da) {
			case 0:day="Sunday";break;
			case 1:day="Monday";break;
			case 2:day="Tuesday";break;
			case 3:day="Wednesday";break;
			case 4:day="Thursday";break;
			case 5:day="Friday";break;
			case 6:day="Saturday";break;
			}
			System.out.println(day);
			//convert date into day
			Doctor d = dservice.getOneById(id);
			DoctorTimeTable dtt = dttservice.getAppointmentsByIdandDay(d,day);
			List<LocalTime> slots = new ArrayList<LocalTime>();
			if(dtt.getStatus().equals("available")) {
				LocalTime st = dtt.getStartTime();
				LocalTime et = dtt.getEndTime();
				
				LocalTime temp = st;
				while( temp.isBefore(et)) {
					slots.add(temp);
					temp=temp.plus(dtt.getSlotDuration(),ChronoUnit.MINUTES);
				}
				
				slots.remove(dtt.getBreakTime());
				
				List<Object> booked = aservice.getAppointmentByDidandDate(d, date);
				
				ListIterator<Object> iter = booked.listIterator();
				while(iter.hasNext()){
						slots.remove(iter.next());
				    }

				return slots;
				
			}else {
				return slots;
			}
		}catch(Exception e) {
			return null;
		}
	

		
		//convert into slots of 30 min
		//remove slot of break
		//find which are slots are booked
		
	}
	
	@GetMapping("/gettimetablebydoctorid/{id}")
	public List<DoctorTimeTable> getTimeTableByDoctorId(@PathVariable int id) {
		Doctor d = dservice.getOneById(id);
		return dttservice.getTimeTableByDoctorId(d);
	}
	
	@GetMapping("/alltimetable")
	public List<DoctorTimeTable> allTimeTable() {
		return dttservice.allDoctorTimeTable();
	}
	
	@PostMapping("/updatetimetable")
	public DoctorTimeTable updateTimeTable(@RequestBody DoctorTimeTable dtt) {
		return dttservice.saveTimeTable(dtt);
	}
}
