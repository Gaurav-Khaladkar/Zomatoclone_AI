package com.smartfood.controller;

import com.smartfood.entity.Menu;
import com.smartfood.service.MenuService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/menu")
@CrossOrigin(origins = "*")
public class MenuController {

  private final MenuService menuService;

  public MenuController(MenuService menuService) {
    this.menuService = menuService;
  }

  @GetMapping("/restaurant/{id}")
  public List<Menu> menuByRestaurant(@PathVariable Long id) {
    return menuService.findByRestaurant(id);
  }

  @PostMapping("/restaurant/{id}")
  public Menu addMenuItem(@PathVariable Long id, @RequestBody Menu menu) {
    return menuService.save(id, menu);
  }
}
