package com.smartfood.controller;

import com.smartfood.dto.OrderRequest;
import com.smartfood.dto.StatusUpdateRequest;
import com.smartfood.entity.Order;
import com.smartfood.entity.OrderStatus;
import com.smartfood.service.OrderService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin(origins = "*")
public class OrderController {

  private final OrderService orderService;

  public OrderController(OrderService orderService) {
    this.orderService = orderService;
  }

  @PostMapping("/place")
  public Order placeOrder(@RequestBody OrderRequest request) {
    return orderService.placeOrder(request);
  }

  @GetMapping("/user/{id}")
  public List<Order> ordersByUser(@PathVariable Long id) {
    return orderService.findByUser(id);
  }

  @GetMapping("/{id}")
  public Order orderById(@PathVariable Long id) {
    return orderService.findById(id);
  }

  @PatchMapping("/{id}/status")
  public Order updateStatus(@PathVariable Long id, @RequestBody StatusUpdateRequest request) {
    return orderService.updateStatus(id, OrderStatus.valueOf(request.getStatus()));
  }
}
