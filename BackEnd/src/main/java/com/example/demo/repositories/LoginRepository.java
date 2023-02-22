package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Login;

@Repository
public interface LoginRepository extends JpaRepository<Login, Integer> {
	//fetch record with matching username and password
	@Query("select l from Login l where user_name = :user_name and password = :password")
	public Login logincheck(String user_name, String password);

	@Query("select l from Login l where user_name = :username")
	public Login forgotPassword(String username);

}
