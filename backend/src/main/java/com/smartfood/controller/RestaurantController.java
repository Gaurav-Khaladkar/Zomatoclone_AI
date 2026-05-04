package com.smartfood.controller;

import com.smartfood.entity.Restaurant;
import com.smartfood.service.RestaurantService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/restaurants")
@CrossOrigin(origins = "*")
public class RestaurantController {

  private final RestaurantService restaurantService;

  public RestaurantController(RestaurantService restaurantService) {
    this.restaurantService = restaurantService;
  }

  @GetMapping("/all")
  public List<Restaurant> allRestaurants(@RequestParam(required = false) String city) {
    return restaurantService.findAll(city);
  }

  @GetMapping("/{id}")
  public Restaurant restaurantById(@PathVariable Long id) {
    return restaurantService.findById(id);
  }

  @PostMapping
  public Restaurant createRestaurant(@RequestBody Restaurant restaurant) {
    return restaurantService.save(restaurant);
  }
}
