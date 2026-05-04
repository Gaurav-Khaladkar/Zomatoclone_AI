package com.smartfood.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;

import java.math.BigDecimal;
import java.time.Instant;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "orders")
public class Order {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "order_id")
  private Long orderId;

  @ManyToOne(optional = false)
  @JoinColumn(name = "user_id")
  @JsonIgnoreProperties({"passwordHash"})
  private User user;

  @ManyToOne(optional = false)
  @JoinColumn(name = "restaurant_id")
  @JsonIgnoreProperties({"owner"})
  private Restaurant restaurant;

  @Column(name = "delivery_address")
  private String deliveryAddress;

  private BigDecimal subtotal = BigDecimal.ZERO;

  @Column(name = "delivery_fee")
  private BigDecimal deliveryFee = BigDecimal.ZERO;

  @Column(name = "tax_amount")
  private BigDecimal taxAmount = BigDecimal.ZERO;

  @Column(name = "discount_amount")
  private BigDecimal discountAmount = BigDecimal.ZERO;

  @Column(name = "total_amount")
  private BigDecimal totalAmount = BigDecimal.ZERO;

  @Enumerated(EnumType.STRING)
  private OrderStatus status = OrderStatus.PLACED;

  @Column(name = "created_at")
  private Instant createdAt = Instant.now();

  @Column(name = "updated_at")
  private Instant updatedAt = Instant.now();

  @OneToMany(mappedBy = "order", cascade = CascadeType.ALL, orphanRemoval = true)
  private List<OrderItem> items = new ArrayList<>();

  public Long getOrderId() {
    return orderId;
  }

  public void setOrderId(Long orderId) {
    this.orderId = orderId;
  }

  public User getUser() {
    return user;
  }

  public void setUser(User user) {
    this.user = user;
  }

  public Restaurant getRestaurant() {
    return restaurant;
  }

  public void setRestaurant(Restaurant restaurant) {
    this.restaurant = restaurant;
  }

  public String getDeliveryAddress() {
    return deliveryAddress;
  }

  public void setDeliveryAddress(String deliveryAddress) {
    this.deliveryAddress = deliveryAddress;
  }

  public BigDecimal getSubtotal() {
    return subtotal;
  }

  public void setSubtotal(BigDecimal subtotal) {
    this.subtotal = subtotal;
  }

  public BigDecimal getDeliveryFee() {
    return deliveryFee;
  }

  public void setDeliveryFee(BigDecimal deliveryFee) {
    this.deliveryFee = deliveryFee;
  }

  public BigDecimal getTaxAmount() {
    return taxAmount;
  }

  public void setTaxAmount(BigDecimal taxAmount) {
    this.taxAmount = taxAmount;
  }

  public BigDecimal getDiscountAmount() {
    return discountAmount;
  }

  public void setDiscountAmount(BigDecimal discountAmount) {
    this.discountAmount = discountAmount;
  }

  public BigDecimal getTotalAmount() {
    return totalAmount;
  }

  public void setTotalAmount(BigDecimal totalAmount) {
    this.totalAmount = totalAmount;
  }

  public OrderStatus getStatus() {
    return status;
  }

  public void setStatus(OrderStatus status) {
    this.status = status;
  }

  public Instant getCreatedAt() {
    return createdAt;
  }

  public void setCreatedAt(Instant createdAt) {
    this.createdAt = createdAt;
  }

  public Instant getUpdatedAt() {
    return updatedAt;
  }

  public void setUpdatedAt(Instant updatedAt) {
    this.updatedAt = updatedAt;
  }

  public List<OrderItem> getItems() {
    return items;
  }

  public void setItems(List<OrderItem> items) {
    this.items = items;
  }
}
