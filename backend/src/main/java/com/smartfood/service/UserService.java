package com.smartfood.service;

import com.smartfood.entity.User;
import com.smartfood.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

  private final UserRepository userRepository;

  public UserService(UserRepository userRepository) {
    this.userRepository = userRepository;
  }

  public List<User> findAll() {
    return userRepository.findAll();
  }

  public User findById(Long id) {
    return userRepository.findById(id)
      .orElseThrow(() -> new IllegalArgumentException("User not found"));
  }
}
