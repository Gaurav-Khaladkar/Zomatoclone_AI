package com.smartfood.controller;

import com.smartfood.repository.OrderRepository;
import com.smartfood.repository.RestaurantRepository;
import com.smartfood.repository.UserRepository;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin(origins = "*")
public class AdminController {

  private final UserRepository userRepository;
  private final RestaurantRepository restaurantRepository;
  private final OrderRepository orderRepository;

  public AdminController(
    UserRepository userRepository,
    RestaurantRepository restaurantRepository,
    OrderRepository orderRepository
  ) {
    this.userRepository = userRepository;
    this.restaurantRepository = restaurantRepository;
    this.orderRepository = orderRepository;
  }

  @GetMapping("/dashboard")
  public Map<String, Long> dashboard() {
    return Map.of(
      "users", userRepository.count(),
      "restaurants", restaurantRepository.count(),
      "orders", orderRepository.count()
    );
  }

  @GetMapping("/complaints")
  public Map<String, String> complaints() {
    return Map.of("message", "Complaint module ready for implementation");
  }
}
