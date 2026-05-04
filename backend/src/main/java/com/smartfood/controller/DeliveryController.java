package com.smartfood.controller;

import com.smartfood.dto.ApiMessage;
import com.smartfood.service.DeliveryService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/delivery")
@CrossOrigin(origins = "*")
public class DeliveryController {

  private final DeliveryService deliveryService;

  public DeliveryController(DeliveryService deliveryService) {
    this.deliveryService = deliveryService;
  }

  @GetMapping("/available")
  public List<?> availablePartners() {
    return deliveryService.availablePartners();
  }

  @PostMapping("/accept")
  public ApiMessage acceptOrder(@RequestParam Long orderId, @RequestParam Long partnerId) {
    return deliveryService.acceptOrder(orderId, partnerId);
  }
}
