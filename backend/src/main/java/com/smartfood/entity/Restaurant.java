package com.smartfood.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;

import java.math.BigDecimal;
import java.time.Instant;

@Entity
@Table(name = "restaurants")
public class Restaurant {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "restaurant_id")
  private Long restaurantId;

  @ManyToOne
  @JoinColumn(name = "owner_id")
  @JsonIgnoreProperties({"passwordHash"})
  private User owner;

  @NotBlank
  private String name;

  @Column(columnDefinition = "TEXT")
  private String description;

  private String cuisine;
  private String address;
  private String city;
  private Double latitude;
  private Double longitude;
  private Double rating = 0.0;

  @Column(name = "price_for_two")
  private BigDecimal priceForTwo = BigDecimal.ZERO;

  @Column(name = "is_open")
  private Boolean open = true;

  @Column(name = "is_pure_veg")
  private Boolean pureVeg = false;

  @Column(name = "created_at")
  private Instant createdAt = Instant.now();

  public Long getRestaurantId() {
    return restaurantId;
  }

  public void setRestaurantId(Long restaurantId) {
    this.restaurantId = restaurantId;
  }

  public User getOwner() {
    return owner;
  }

  public void setOwner(User owner) {
    this.owner = owner;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public String getCuisine() {
    return cuisine;
  }

  public void setCuisine(String cuisine) {
    this.cuisine = cuisine;
  }

  public String getAddress() {
    return address;
  }

  public void setAddress(String address) {
    this.address = address;
  }

  public String getCity() {
    return city;
  }

  public void setCity(String city) {
    this.city = city;
  }

  public Double getLatitude() {
    return latitude;
  }

  public void setLatitude(Double latitude) {
    this.latitude = latitude;
  }

  public Double getLongitude() {
    return longitude;
  }

  public void setLongitude(Double longitude) {
    this.longitude = longitude;
  }

  public Double getRating() {
    return rating;
  }

  public void setRating(Double rating) {
    this.rating = rating;
  }

  public BigDecimal getPriceForTwo() {
    return priceForTwo;
  }

  public void setPriceForTwo(BigDecimal priceForTwo) {
    this.priceForTwo = priceForTwo;
  }

  public Boolean getOpen() {
    return open;
  }

  public void setOpen(Boolean open) {
    this.open = open;
  }

  public Boolean getPureVeg() {
    return pureVeg;
  }

  public void setPureVeg(Boolean pureVeg) {
    this.pureVeg = pureVeg;
  }

  public Instant getCreatedAt() {
    return createdAt;
  }

  public void setCreatedAt(Instant createdAt) {
    this.createdAt = createdAt;
  }
}
