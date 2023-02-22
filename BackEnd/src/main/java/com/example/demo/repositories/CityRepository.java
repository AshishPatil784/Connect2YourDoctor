package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.City;
import com.example.demo.entities.State;

@Repository
public interface CityRepository extends JpaRepository<City, Integer> {

	@Query("select c from City c where state_id = :s")
	public List<City> getCityByStateId(State s);
	
//	@Query("select c from City c where city_id = :id")
//	public City getCityById(int id);

}
