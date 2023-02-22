package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


import com.example.demo.entities.State;

@Repository
public interface StateRepository extends JpaRepository<State, Integer>{

	@Query("select s from State s where stateId = :id")
	public State getStateById(int id);
}
