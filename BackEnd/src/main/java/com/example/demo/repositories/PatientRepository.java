package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Doctor;
import com.example.demo.entities.Login;
import com.example.demo.entities.Patient;

@Repository
public interface PatientRepository extends JpaRepository<Patient, Integer> {
	//fetch record with matching login id
	@Query("select p from Patient p where login_id = :id")
	public Patient getOneByLoginId(Login id);
	
	@Query("select p from Patient p where patient_id = :id")
	public Doctor getOneById(int id);
}
