package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.State;
import com.example.demo.repositories.StateRepository;

@Service
public class StateService {
	@Autowired
	StateRepository srepo;
	
	public List<State> allStates(){
		return srepo.findAll();
	}
	
	public State getById(int id) {
		return srepo.getStateById(id);
	}
	
	public State saveState(State s) {
		try {
			return srepo.save(s);
		}catch(Exception e) {
			return null;
		}
			
	}
}
