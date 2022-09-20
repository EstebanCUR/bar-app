package com.bar_app.microLogin.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bar_app.microLogin.models.Admin;

public interface AdminRepository extends JpaRepository<Admin, Integer> {
	Admin findByUserName(String userName);
	
	
}
