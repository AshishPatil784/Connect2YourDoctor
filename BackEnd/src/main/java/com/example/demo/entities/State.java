package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity

public class State 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "state_id")
	private int stateId;
	
	@Column(nullable = false,name = "state_name")
	private String stateName;

//	@JsonIgnoreProperties("state_id")
//	@OneToMany(mappedBy = "state_id",cascade = CascadeType.ALL)
//	Set<City> cities ;

	public State() {
		super();
		// TODO Auto-generated constructor stub
	}

	//for creating new state only
	public State(String stateName) {
		super();
		this.stateName = stateName;
	}

	//for accessing all cities in selected state
//	public State(String stateName, Set<City> cities) {
//		super();
//		this.stateName = stateName;
//		this.cities = cities;
//	}
//	
	//add new city in existing state
//	public State(int stateId, String stateName, Set<City> cities) {
//		super();
//		this.stateId = stateId;
//		this.stateName = stateName;
//		this.cities = cities;
//	}
	
	public State(int stateId, String stateName) {
		super();
		this.stateId = stateId;
		this.stateName = stateName;
	}
	
	

	public int getStateId() {
		return stateId;
	}



	public void setStateId(int stateId) {
		this.stateId = stateId;
	}

	public String getStateName() {
		return stateName;
	}

	public void setStateName(String stateName) {
		this.stateName = stateName;
	}

	
//	
//	public Set<City> getCities() {
//		return cities;
//	}
//
//	public void setCities(Set<City> cities) {
//		this.cities = cities;
//		for(City o : cities)
//			o.setState_id(this);
//	}

	@Override
	public String toString() {
		return "State [stateId=" + stateId + ", stateName=" + stateName + "]";
	}
	
	
}
