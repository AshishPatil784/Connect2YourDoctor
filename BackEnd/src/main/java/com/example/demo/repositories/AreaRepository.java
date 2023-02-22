package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Area;
import com.example.demo.entities.City;

@Repository
public interface AreaRepository extends JpaRepository<Area, Integer> {

//	@Query("select a from Area a where areaId = :id")
//	public Area getAreaById(int id);
	
	@Query("select a from Area a where city_id = :c")
	public List<Area> getAreaByCityId(City c);
}
