package com.example.api.controller;

import com.example.api.model.Users;
import com.example.api.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@AllArgsConstructor
public class Results {
    private UserService service;
    @GetMapping("/user")
    public List<Users> getUsers(@RequestParam int page, @RequestParam("page_size") int pageSize){
        return service.getAllUsers(page, pageSize);
    }
}
