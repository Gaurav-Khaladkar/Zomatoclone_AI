package com.smartfood.repository;

import com.smartfood.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Long> {
  List<Order> findByUserUserIdOrderByCreatedAtDesc(Long userId);
}
