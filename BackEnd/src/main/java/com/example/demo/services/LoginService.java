package com.example.demo.services;

//import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Doctor;
import com.example.demo.entities.Login;
import com.example.demo.entities.Patient;
import com.example.demo.repositories.DoctorRepository;
import com.example.demo.repositories.LoginRepository;
import com.example.demo.repositories.PatientRepository;

@Service
public class LoginService {
	@Autowired
	LoginRepository loginrepo;
	@Autowired
	PatientRepository prepo;
	@Autowired
	DoctorRepository drepo;
	@Autowired
	JavaMailSender jms;
	
	public List<Login> getAllUsers() {
		return loginrepo.findAll();
	}
	//fine user by id
	public Optional<Login> getUser(int id) {
		return loginrepo.findById(id);
	}
	//add new user
	public Login saveUser(Login l) {
		try {
		return loginrepo.save(l);
		}catch(Exception e) {
			return null;
		}
	}

	//logincheck
	public Object loginCheck(String user_name, String password) {
		Login l = loginrepo.logincheck(user_name,password);
		
		//if returns a record
		if(l != null && l.getStatus().equals("active")) {
			Patient p = null;
			Doctor d = null;
			/*Admin a = null;*/
			//if record is Patient
			if(l.getUser_type().equals("Patient")) {
				try {
					p = prepo.getOneByLoginId(l);

				}catch(Exception e) {
					p=null;
				}
				return p;
			}//if record is Doctor
			else if(l.getUser_type().equals("Doctor")) {
				try {
					d = drepo.getOneByLoginId(l);
					
				}catch(Exception e) {
					System.out.println(e.getMessage());
					d=null;
				}
				return d;
			}//if record is Admin
			else if(l.getUser_type().equals("Admin")) {
				return l;
			}
			else {
			return null;
			}
		
		}
		return null;

	}
	public Login updateUser(Login l) {
		try {
			return loginrepo.save(l);
		} catch (Exception e) {
			// TODO: handle exception
			return null;
		}
	}
	public Login forgotPassword(String username) {
		// TODO Auto-generated method stub
		Login l = loginrepo.forgotPassword(username);
		if(l != null) {
			SimpleMailMessage smm = new SimpleMailMessage();
			smm.setFrom("connecttoyourdoctor@gmail.com");
			smm.setTo(l.getUser_name());
			System.out.println(" "+l.getUser_name());
			smm.setSubject("Password for your account");
			smm.setText("Password for your account\nUsername : "+l.getUser_name()+"\nPassword : "+l.getPassword());
			jms.send(smm);
			return l;
		}
		else {
			return null;
		}

	}
}
