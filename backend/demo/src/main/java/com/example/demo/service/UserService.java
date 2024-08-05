package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;


@Service
public class UserService {
@Autowired
 UserRepository ur;
 
 public User create(User uu)
 {
    return ur.save(uu);
 }
 public List<User> getAll()
 {
    return ur.findAll();
 }
 public User getSpecific(int id)
 {
    return ur.findById(id).orElse(null);
 }
 public boolean updateDetails(int id,User u)
 {
    if(this.getSpecific(id)==null)
        {
            return false;
        }
        try{
            ur.save(u);
        }
        catch(Exception e)
        {
            return false;
        }
        return true;
 }
 public boolean deleteuser(int id)
 {
    if(this.getSpecific(id) == null)
        {
            return false;
        }
        ur.deleteById(id);
     return true;
 }
}
