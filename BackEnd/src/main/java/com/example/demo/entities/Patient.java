package com.example.demo.entities;

import java.sql.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
public class Patient {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int patient_id;
	@Column
	String firstName;
	@Column
	String lastName;
	@Column
	String mobileNumber;
	@Column
	String gender;
	@Column
	String blood_group;
	@Column
	Date dob;

	@JsonIgnoreProperties("patient")
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="login_id")
    Login login_id;

//	@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})

	
	public Patient() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Patient(int patient_id, String first_name, String last_name, String mobile_number, String gender,
			String blood_group, Date dob, Login login_id) {
		super();
		this.patient_id = patient_id;
		this.firstName = first_name;
		this.lastName = last_name;
		this.mobileNumber = mobile_number;
		this.gender = gender;
		this.blood_group = blood_group;
		this.dob = dob;
		this.login_id = login_id;
	}
	public Patient(String first_name, String last_name, String mobile_number, String gender, String blood_group,
			Date dob, Login login_id) {
		super();
		this.firstName = first_name;
		this.lastName = last_name;
		this.mobileNumber = mobile_number;
		this.gender = gender;
		this.blood_group = blood_group;
		this.dob = dob;
		this.login_id = login_id;
	}
	
	public int getPatient_id() {
		return patient_id;
	}
	public void setPatient_id(int patient_id) {
		this.patient_id = patient_id;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String first_name) {
		this.firstName = first_name;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String last_name) {
		this.lastName = last_name;
	}
	public String getMobileNumber() {
		return mobileNumber;
	}
	public void setMobileNumber(String mobile_number) {
		this.mobileNumber = mobile_number;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getBlood_group() {
		return blood_group;
	}
	public void setBlood_group(String blood_group) {
		this.blood_group = blood_group;
	}
	public Date getDob() {
		return dob;
	}
	public void setDob(Date dob) {
		this.dob = dob;
	}

	public Login getLogin_id() {
		return login_id;
	}
	public void setLogin_id(Login login_id) {
		this.login_id = login_id;
	}

	
	
}
