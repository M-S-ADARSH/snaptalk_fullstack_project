package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.User;
import com.example.demo.service.UserService;

@RestController
public class UserController 
{
    @Autowired
    UserService us;

    @PostMapping("/post")
    public ResponseEntity<User> add(@RequestBody User u) {
        User newuser = us.create(u);
        return new ResponseEntity<>(newuser, HttpStatus.CREATED);
    }

    @GetMapping("/getdetails")
    public ResponseEntity<List<User>> getAll() {
        List<User> obj = us.getAll();
        return new ResponseEntity<>(obj, HttpStatus.OK);
    }

    @GetMapping("getdata")
    public ResponseEntity<List<User>> getinfo() {
        return new ResponseEntity<>(us.getAll(), HttpStatus.OK);
    }

    @PutMapping("/api/user/{userId}")
    public ResponseEntity<User> putMethodName(@PathVariable("userId") int id, @RequestBody User employee) {
        if (us.updateDetails(id, employee) == true) {
            return new ResponseEntity<>(employee, HttpStatus.OK);
        }
        return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/api/user/{userId}")
    public ResponseEntity<Boolean> delete(@PathVariable("userId") int id) {
        if (us.deleteuser(id) == true) {
            return new ResponseEntity<>(true, HttpStatus.OK);
        }
        return new ResponseEntity<>(false, HttpStatus.NOT_FOUND);
    }
}