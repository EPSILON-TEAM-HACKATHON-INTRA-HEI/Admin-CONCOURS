package com.example.api.service;

import com.example.api.model.Users;
import com.example.api.repository.UserRepo;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.awt.print.Pageable;
import java.util.List;

@Service
@AllArgsConstructor
public class UserService {
    private UserRepo repo;

    public List<Users> getAllUsers(int page, int pageSize){
        Pageable pageable = (Pageable) PageRequest.of(page-1, pageSize);
        return repo.findAll((Sort) pageable);
    }
}
