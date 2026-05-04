package com.smartfood.service;

import com.smartfood.entity.Restaurant;
import com.smartfood.repository.RestaurantRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RestaurantService {

  private final RestaurantRepository restaurantRepository;

  public RestaurantService(RestaurantRepository restaurantRepository) {
    this.restaurantRepository = restaurantRepository;
  }

  public List<Restaurant> findAll(String city) {
    if (city == null || city.isBlank()) {
      return restaurantRepository.findAll();
    }
    return restaurantRepository.findByCityIgnoreCase(city);
  }

  public Restaurant findById(Long id) {
    return restaurantRepository.findById(id)
      .orElseThrow(() -> new IllegalArgumentException("Restaurant not found"));
  }

  public Restaurant save(Restaurant restaurant) {
    return restaurantRepository.save(restaurant);
  }
}
