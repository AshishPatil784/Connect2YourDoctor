package com.example.demo.controllers;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.State;
import com.example.demo.services.StateService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class StateController {

	@Autowired
	StateService sservice;
	
	@GetMapping("/statebyid/{id}")
	public State getStateById(@PathVariable int id) {
		return sservice.getById(id);
	}
	
	@GetMapping("/allstates")
	public List<State> allStates(){
		return sservice.allStates();
	}
	
	@PostMapping("/savestate")
	public State saveState(@RequestBody State s) {
		return sservice.saveState(s);
	}
}
