package com.smartfood.controller;

import com.smartfood.entity.User;
import com.smartfood.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "*")
public class UserController {

  private final UserService userService;

  public UserController(UserService userService) {
    this.userService = userService;
  }

  @GetMapping
  public List<User> allUsers() {
    return userService.findAll();
  }

  @GetMapping("/{id}")
  public User userById(@PathVariable Long id) {
    return userService.findById(id);
  }
}
