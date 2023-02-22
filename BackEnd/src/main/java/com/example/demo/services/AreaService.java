package com.example.demo.services;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Area;
import com.example.demo.entities.City;
import com.example.demo.repositories.AreaRepository;

@Service
public class AreaService {

	@Autowired
	AreaRepository arepo;
	
	public Area getAreaById(int id) {
		//return arepo.findById(id);
//		try {
//			return arepo.getAreaById(id);
//		} catch (Exception e) {
//			return null;
//		}
		return arepo.findById(id).get();
	}
	
	public List<Area> getAreaByCityId(City c){
		return arepo.getAreaByCityId(c);
	}
	
	public Area saveArea(Area a) {
		
		try{
			return arepo.save(a);
		}catch(Exception e) {
			return null;
		}
	}

	public List<Area> allAreas() {

		return arepo.findAll();
	}
}
