package com.example.demo.entities;

import java.sql.Date;

public class PatientRegisteration {

	String user_name;

	String password;
	
	String first_name;

	String last_name;

	String mobile_number;

	String gender;
	
	String blood_group;
	
	Date dob;

	public PatientRegisteration() {
		super();
		// TODO Auto-generated constructor stub
	}
	//create new instance
	public PatientRegisteration(String user_name, String password, String first_name, String last_name,
			String mobile_number, String gender, String blood_group, Date dob) {
		super();
		this.user_name = user_name;
		this.password = password;
		this.first_name = first_name;
		this.last_name = last_name;
		this.mobile_number = mobile_number;
		this.gender = gender;
		this.blood_group = blood_group;
		this.dob = dob;
	}

	public String getUser_name() {
		return user_name;
	}

	public void setUser_name(String user_name) {
		this.user_name = user_name;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getFirst_name() {
		return first_name;
	}

	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}

	public String getLast_name() {
		return last_name;
	}

	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}

	public String getMobile_number() {
		return mobile_number;
	}

	public void setMobile_number(String mobile_number) {
		this.mobile_number = mobile_number;
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
	
	
}
