package com.bar_app.microLogin.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.bar_app.microLogin.models.Admin;
import com.bar_app.microLogin.service.LoginServiceImp;


@RestController
public class AdminController {
	
	@Autowired
	private LoginServiceImp loginService;
	
	@PostMapping ("/api/login")
	public boolean login(@RequestBody Admin admin) {
		
		return loginService.verifyCredential(admin);
	}
	
	
}
