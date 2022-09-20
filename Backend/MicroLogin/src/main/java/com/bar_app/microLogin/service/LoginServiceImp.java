package com.bar_app.microLogin.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bar_app.microLogin.dao.AdminRepository;
import com.bar_app.microLogin.models.Admin;

import de.mkammerer.argon2.Argon2;
import de.mkammerer.argon2.Argon2Factory;

@Service
public class LoginServiceImp {
	
	@Autowired
	AdminRepository adminRepo;

	public boolean verifyCredential(Admin admin) {
		
		Admin temp = adminRepo.findByUserName(admin.getUserName());
		Argon2 argon2 = Argon2Factory.create(Argon2Factory.Argon2Types.ARGON2id);
		String hash = argon2.hash(1, 1024, 1, "123456");
		System.out.println(hash);
		if(temp != null) {
		
			return argon2.verify(temp.getPass(), admin.getPass());
		}
		return false;
	}
}
