package com.smartfood.entity;

import jakarta.persistence.*;

import java.math.BigDecimal;

@Entity
@Table(name = "delivery_partners")
public class DeliveryPartner {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "partner_id")
  private Long partnerId;

  @OneToOne(optional = false)
  @JoinColumn(name = "user_id")
  private User user;

  @Column(name = "vehicle_number")
  private String vehicleNumber;

  @Column(name = "current_latitude")
  private Double currentLatitude;

  @Column(name = "current_longitude")
  private Double currentLongitude;

  @Column(name = "is_available")
  private Boolean available = true;

  private BigDecimal earnings = BigDecimal.ZERO;

  public Long getPartnerId() {
    return partnerId;
  }

  public void setPartnerId(Long partnerId) {
    this.partnerId = partnerId;
  }

  public User getUser() {
    return user;
  }

  public void setUser(User user) {
    this.user = user;
  }

  public String getVehicleNumber() {
    return vehicleNumber;
  }

  public void setVehicleNumber(String vehicleNumber) {
    this.vehicleNumber = vehicleNumber;
  }

  public Double getCurrentLatitude() {
    return currentLatitude;
  }

  public void setCurrentLatitude(Double currentLatitude) {
    this.currentLatitude = currentLatitude;
  }

  public Double getCurrentLongitude() {
    return currentLongitude;
  }

  public void setCurrentLongitude(Double currentLongitude) {
    this.currentLongitude = currentLongitude;
  }

  public Boolean getAvailable() {
    return available;
  }

  public void setAvailable(Boolean available) {
    this.available = available;
  }

  public BigDecimal getEarnings() {
    return earnings;
  }

  public void setEarnings(BigDecimal earnings) {
    this.earnings = earnings;
  }
}
