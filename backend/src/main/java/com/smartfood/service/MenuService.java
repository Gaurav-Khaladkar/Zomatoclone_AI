package com.smartfood.service;

import com.smartfood.entity.Menu;
import com.smartfood.entity.Restaurant;
import com.smartfood.repository.MenuRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MenuService {

  private final MenuRepository menuRepository;
  private final RestaurantService restaurantService;

  public MenuService(MenuRepository menuRepository, RestaurantService restaurantService) {
    this.menuRepository = menuRepository;
    this.restaurantService = restaurantService;
  }

  public List<Menu> findByRestaurant(Long restaurantId) {
    return menuRepository.findByRestaurantRestaurantId(restaurantId);
  }

  public Menu save(Long restaurantId, Menu menu) {
    Restaurant restaurant = restaurantService.findById(restaurantId);
    menu.setRestaurant(restaurant);
    return menuRepository.save(menu);
  }
}
