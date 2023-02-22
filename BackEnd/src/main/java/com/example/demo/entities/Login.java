package com.example.demo.entities;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
public class Login {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int login_id;
	@Column
	String user_name;
	@Column
	String password;
	@Column
	String user_type;
	@Column
	String status;

	@JsonIgnoreProperties("login_id")
	@OneToOne(cascade = CascadeType.ALL,mappedBy = "login_id")
    Patient patient;
	
	@JsonIgnoreProperties("login_id")
	@OneToOne(cascade = CascadeType.ALL,mappedBy = "login_id")
    Doctor doctor;
	
	public Login() {
		super();
		// TODO Auto-generated constructor stub
	}
	//add new user 
	public Login(String user_name, String password, String user_type, String status) {
		super();
		this.user_name = user_name;
		this.password = password;
		this.user_type = user_type;
		this.status = status;
	}
	//fetch existing user 
	public Login(int login_id, String user_name, String password, String user_type, String status) {
		super();
		this.login_id = login_id;
		this.user_name = user_name;
		this.password = password;
		this.user_type = user_type;
		this.status = status;
	}
	//
	public Login(String user_name, String password, String user_type) {
		super();
		this.user_name = user_name;
		this.password = password;
		this.user_type = user_type;
	}
	//logincheck
	public Login(String user_name, String password) {
		super();
		this.user_name = user_name;
		this.password = password;
	}
	public Login(String user_name) {
		super();
		this.user_name = user_name;
	}
	public int getLogin_id() {
		return login_id;
	}
	public void setLogin_id(int login_id) {
		this.login_id = login_id;
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
	public String getUser_type() {
		return user_type;
	}
	public void setUser_type(String user_type) {
		this.user_type = user_type;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
//	public Patient getPatient() {
//		return patient;
//	}
//	public void setPatient(Patient patient) {
//		this.patient = patient;
//	}

	
}
