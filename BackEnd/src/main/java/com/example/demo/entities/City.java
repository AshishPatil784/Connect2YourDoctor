package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity

public class City 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "city_id")
	private int cityId;
	
	@Column(name = "city_name")
	private String cityName;
	
	@JsonIgnoreProperties("cities")
	@ManyToOne // cascade removed in order to allow cities to be created in existing state(detached entity passed to persist)
	@JoinColumn(name="state_id")
	private State state_id;
	
//	@JsonIgnoreProperties("city_id")
//	@OneToMany(mappedBy = "city_id",cascade = CascadeType.ALL)
//	Set<Area> areas ;

	public City() {
		super();
	}
	
	//add new city only
	public City(String cityName) {
		super();
		this.cityName = cityName;
	}
	
	//fetching city for current state
	public City(String cityName, State state_id) {
		super();
		this.cityName = cityName;
		this.state_id = state_id;
	}

	//add new area for existing city
//	public City(int cityId, String cityName, State state_id, Set<Area> areas) {
//		super();
//		this.cityId = cityId;
//		this.cityName = cityName;
//		this.state_id = state_id;
//		this.areas = areas;
//	}
//	
	

	public City(int cityId, String cityName, State state_id) {
		super();
		this.cityId = cityId;
		this.cityName = cityName;
		this.state_id = state_id;
	}

	//fetch areas for current city
//	public City(String cityName, State state_id, Set<Area> areas) {
//		super();
//		this.cityName = cityName;
//		this.state_id = state_id;
//		this.areas = areas;
//	}

	
	
	public int getCityId() {
		return cityId;
	}

	public void setCityId(int cityId) {
		this.cityId = cityId;
	}

	public String getCityName() {
		return cityName;
	}

	public void setCityName(String cityName) {
		this.cityName = cityName;
	}

	public State getState_id() {
		return state_id;
	}

	public void setState_id(State state_id) {
		this.state_id = state_id;
	}
	
	

//	public Set<Area> getAreas() {
//		return areas;
//	}
//
//	public void setAreas(Set<Area> areas) {
//		this.areas = areas;
//		for(Area o : areas)
//			o.setCity_id(this);
//	}

	@Override
	public String toString() {
		return "City [cityId=" + cityId + ", cityName=" + cityName + ", state_id=" + state_id + "]";
	}
	
	
}

