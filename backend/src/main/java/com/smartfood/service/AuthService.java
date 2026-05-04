package com.smartfood.service;

import com.smartfood.config.JwtUtil;
import com.smartfood.dto.AuthResponse;
import com.smartfood.dto.LoginRequest;
import com.smartfood.dto.RegisterRequest;
import com.smartfood.entity.User;
import com.smartfood.entity.UserRole;
import com.smartfood.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

  private final UserRepository userRepository;
  private final JwtUtil jwtUtil;

  public AuthService(UserRepository userRepository, JwtUtil jwtUtil) {
    this.userRepository = userRepository;
    this.jwtUtil = jwtUtil;
  }

  public AuthResponse register(RegisterRequest request) {
    User user = new User();
    user.setName(request.getName());
    user.setEmail(request.getEmail());
    user.setPhone(request.getPhone());
    user.setPasswordHash(request.getPassword());
    user.setRole(UserRole.USER);

    User saved = userRepository.save(user);
    return new AuthResponse(saved, jwtUtil.generateDemoToken(saved.getPhone()));
  }

  public AuthResponse login(LoginRequest request) {
    User user = userRepository.findByEmail(request.getEmailOrPhone())
      .or(() -> userRepository.findByPhone(request.getEmailOrPhone()))
      .orElseThrow(() -> new IllegalArgumentException("Invalid login credentials"));

    return new AuthResponse(user, jwtUtil.generateDemoToken(user.getPhone()));
  }
}
