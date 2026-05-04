package com.smartfood.controller;

import com.smartfood.dto.ApiMessage;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/cart")
@CrossOrigin(origins = "*")
public class CartController {

  @PostMapping("/add")
  public ApiMessage addToCart() {
    return new ApiMessage("Item added to cart. Prototype cart is maintained by frontend state.");
  }

  @GetMapping("/view")
  public ApiMessage viewCart() {
    return new ApiMessage("Cart view endpoint ready. Persisted cart can be added in the next backend phase.");
  }
}
