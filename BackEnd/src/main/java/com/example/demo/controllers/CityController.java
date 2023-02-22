package com.example.demo.controllers;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.City;
import com.example.demo.entities.State;
import com.example.demo.services.CityService;
import com.example.demo.services.StateService;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class CityController {

	@Autowired
	CityService cservice ;
	
	@Autowired
	StateService sservice;
	
	@GetMapping("/getcitybystate/{id}")
	public List<City> getCityByStateId(@PathVariable int id){
		State s = sservice.getById(id);
		return cservice.getCityByStateId(s);
	}
	
	@GetMapping("/allcities")
	public List<City> getAllCity(){
		return cservice.allcities();
	}
	
	@GetMapping("getcitybyid/{id}")
	public City getCityById(@PathVariable int id) {
		return cservice.getCityById(id);
	}

	@PostMapping("/savecity")
	public City saveCity(@RequestBody City c) {
		//System.out.println(c.getCityName()+c.getState_id());
		return cservice.saveCity(c);
	}
}
