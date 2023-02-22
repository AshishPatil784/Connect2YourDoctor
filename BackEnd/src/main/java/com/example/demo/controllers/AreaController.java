package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Area;
import com.example.demo.entities.City;
import com.example.demo.services.AreaService;
import com.example.demo.services.CityService;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class AreaController {

	@Autowired
	AreaService aservice;
	
	@Autowired
	CityService cservice;
	
	@GetMapping("/areabyid/{id}")
	public Area getAreaById(@PathVariable int id) {
		return aservice.getAreaById(id);
	}
	
	@GetMapping("/areabycity/{id}")
	public List<Area> getAreaByCity(@PathVariable int id){
		City c = cservice.getCityById(id);
		return aservice.getAreaByCityId(c);
	}
	
	@GetMapping("/allareas")
	public List<Area> getAllArea(){
		return aservice.allAreas();
	}
	
	@PostMapping("/savearea")
	public Area saveArea(@RequestBody Area a) {
		//System.out.println(a.getAreaName()+""+a.getCity_id());
		return aservice.saveArea(a);
	}
}
