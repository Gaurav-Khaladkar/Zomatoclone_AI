package com.smartfood.entity;

import jakarta.persistence.*;

import java.time.Instant;

@Entity
@Table(name = "deliveries")
public class Delivery {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "delivery_id")
  private Long deliveryId;

  @OneToOne(optional = false)
  @JoinColumn(name = "order_id")
  private Order order;

  @ManyToOne
  @JoinColumn(name = "partner_id")
  private DeliveryPartner partner;

  @Column(name = "pickup_time")
  private Instant pickupTime;

  @Column(name = "delivered_time")
  private Instant deliveredTime;

  private String status = "ASSIGNED";

  public Long getDeliveryId() {
    return deliveryId;
  }

  public void setDeliveryId(Long deliveryId) {
    this.deliveryId = deliveryId;
  }

  public Order getOrder() {
    return order;
  }

  public void setOrder(Order order) {
    this.order = order;
  }

  public DeliveryPartner getPartner() {
    return partner;
  }

  public void setPartner(DeliveryPartner partner) {
    this.partner = partner;
  }

  public Instant getPickupTime() {
    return pickupTime;
  }

  public void setPickupTime(Instant pickupTime) {
    this.pickupTime = pickupTime;
  }

  public Instant getDeliveredTime() {
    return deliveredTime;
  }

  public void setDeliveredTime(Instant deliveredTime) {
    this.deliveredTime = deliveredTime;
  }

  public String getStatus() {
    return status;
  }

  public void setStatus(String status) {
    this.status = status;
  }
}
