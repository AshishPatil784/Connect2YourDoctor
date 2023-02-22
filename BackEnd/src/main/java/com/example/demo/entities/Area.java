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
public class Area {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "area_id")
	private int areaId;
	
	@Column(name = "area_name")
	private String areaName;
	
	@JsonIgnoreProperties("areas")
	@ManyToOne// cascade removed in order to allow areas to be created in existing city(detached entity passed to persist)
	@JoinColumn(name="city_id")
	private City city_id;
	
//	@JsonIgnoreProperties("area_id")
//	@OneToMany(cascade = CascadeType.ALL,mappedBy = "area_id")
//	private Set<Doctor> doctor;
//	
	public Area() {
		super();
	}
	
	// add new area only
	public Area(String areaName) {
		super();
		this.areaName = areaName;
	}

	//fetch areas for current city
	public Area(String areaName, City city_id) {
		super();
		this.areaName = areaName;
		this.city_id = city_id;
	}

	
	
	public Area(int areaId, String areaName, City city_id) {
		super();
		this.areaId = areaId;
		this.areaName = areaName;
		this.city_id = city_id;
	
	}



	public int getAreaId() {
		return areaId;
	}

	public void setAreaId(int areaId) {
		this.areaId = areaId;
	}

	public String getAreaName() {
		return areaName;
	}

	public void setAreaName(String areaName) {
		this.areaName = areaName;
	}

	public City getCity_id() {
		return city_id;
	}

	public void setCity_id(City city_id) {
		this.city_id = city_id;
	}

	@Override
	public String toString() {
		return "Area [areaId=" + areaId + ", areaName=" + areaName + ", city_id=" + city_id + "]";
	}

//	public Set<Doctor> getDoctor() {
//		return doctor;
//	}
//
//	public void setDoctor(Set<Doctor> doctor) {
//		this.doctor = doctor;
//		/*for(Doctor d : doctor)
//			d.setArea_id(this);*/
//
//	}
	
	
	

}
