package com.smartfood.service;

import com.smartfood.dto.OrderItemRequest;
import com.smartfood.dto.OrderRequest;
import com.smartfood.entity.*;
import com.smartfood.repository.MenuRepository;
import com.smartfood.repository.OrderRepository;
import com.smartfood.repository.RestaurantRepository;
import com.smartfood.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.Instant;
import java.util.List;

@Service
public class OrderService {

  private final OrderRepository orderRepository;
  private final UserRepository userRepository;
  private final RestaurantRepository restaurantRepository;
  private final MenuRepository menuRepository;

  public OrderService(
    OrderRepository orderRepository,
    UserRepository userRepository,
    RestaurantRepository restaurantRepository,
    MenuRepository menuRepository
  ) {
    this.orderRepository = orderRepository;
    this.userRepository = userRepository;
    this.restaurantRepository = restaurantRepository;
    this.menuRepository = menuRepository;
  }

  public Order placeOrder(OrderRequest request) {
    User user = userRepository.findById(request.getUserId())
      .orElseThrow(() -> new IllegalArgumentException("User not found"));
    Restaurant restaurant = restaurantRepository.findById(request.getRestaurantId())
      .orElseThrow(() -> new IllegalArgumentException("Restaurant not found"));

    Order order = new Order();
    order.setUser(user);
    order.setRestaurant(restaurant);
    order.setDeliveryAddress(request.getDeliveryAddress());

    BigDecimal subtotal = BigDecimal.ZERO;
    for (OrderItemRequest itemRequest : request.getItems()) {
      Menu menu = menuRepository.findById(itemRequest.getItemId())
        .orElseThrow(() -> new IllegalArgumentException("Menu item not found"));
      int quantity = itemRequest.getQuantity() == null ? 1 : itemRequest.getQuantity();
      BigDecimal lineTotal = menu.getPrice().multiply(BigDecimal.valueOf(quantity));

      OrderItem orderItem = new OrderItem();
      orderItem.setOrder(order);
      orderItem.setMenu(menu);
      orderItem.setQuantity(quantity);
      orderItem.setUnitPrice(menu.getPrice());
      orderItem.setLineTotal(lineTotal);
      order.getItems().add(orderItem);

      subtotal = subtotal.add(lineTotal);
    }

    BigDecimal deliveryFee = subtotal.compareTo(BigDecimal.valueOf(499)) > 0 ? BigDecimal.ZERO : BigDecimal.valueOf(39);
    BigDecimal tax = subtotal.multiply(BigDecimal.valueOf(0.05));

    order.setSubtotal(subtotal);
    order.setDeliveryFee(deliveryFee);
    order.setTaxAmount(tax);
    order.setTotalAmount(subtotal.add(deliveryFee).add(tax));
    return orderRepository.save(order);
  }

  public List<Order> findByUser(Long userId) {
    return orderRepository.findByUserUserIdOrderByCreatedAtDesc(userId);
  }

  public Order findById(Long id) {
    return orderRepository.findById(id)
      .orElseThrow(() -> new IllegalArgumentException("Order not found"));
  }

  public Order updateStatus(Long id, OrderStatus status) {
    Order order = findById(id);
    order.setStatus(status);
    order.setUpdatedAt(Instant.now());
    return orderRepository.save(order);
  }
}
