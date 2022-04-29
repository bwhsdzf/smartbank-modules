package com.axess.smartbankapi.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class HomeController {
	
	
	@GetMapping("/")
	public String home() {
		return "Welcome to Smart Bank Credit Card APIs";
	}

	@GetMapping("/healthcheck")
	public String healthcheck() {
		return "200 OK";
	}

}
