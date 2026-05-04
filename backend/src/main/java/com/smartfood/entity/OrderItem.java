package com.smartfood.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;

import java.math.BigDecimal;

@Entity
@Table(name = "order_items")
public class OrderItem {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "order_item_id")
  private Long orderItemId;

  @ManyToOne(optional = false)
  @JoinColumn(name = "order_id")
  @JsonIgnore
  private Order order;

  @ManyToOne(optional = false)
  @JoinColumn(name = "item_id")
  @JsonIgnoreProperties({"restaurant"})
  private Menu menu;

  private Integer quantity;

  @Column(name = "unit_price")
  private BigDecimal unitPrice;

  @Column(name = "line_total")
  private BigDecimal lineTotal;

  public Long getOrderItemId() {
    return orderItemId;
  }

  public void setOrderItemId(Long orderItemId) {
    this.orderItemId = orderItemId;
  }

  public Order getOrder() {
    return order;
  }

  public void setOrder(Order order) {
    this.order = order;
  }

  public Menu getMenu() {
    return menu;
  }

  public void setMenu(Menu menu) {
    this.menu = menu;
  }

  public Integer getQuantity() {
    return quantity;
  }

  public void setQuantity(Integer quantity) {
    this.quantity = quantity;
  }

  public BigDecimal getUnitPrice() {
    return unitPrice;
  }

  public void setUnitPrice(BigDecimal unitPrice) {
    this.unitPrice = unitPrice;
  }

  public BigDecimal getLineTotal() {
    return lineTotal;
  }

  public void setLineTotal(BigDecimal lineTotal) {
    this.lineTotal = lineTotal;
  }
}
