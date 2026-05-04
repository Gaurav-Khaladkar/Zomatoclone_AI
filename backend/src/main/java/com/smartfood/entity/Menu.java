package com.smartfood.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;

import java.math.BigDecimal;
import java.time.Instant;

@Entity
@Table(name = "menu_items")
public class Menu {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "item_id")
  private Long itemId;

  @ManyToOne(optional = false)
  @JoinColumn(name = "restaurant_id")
  @JsonIgnoreProperties({"owner"})
  private Restaurant restaurant;

  @NotBlank
  private String name;

  @Column(columnDefinition = "TEXT")
  private String description;

  private String category;
  private BigDecimal price;

  @Column(name = "is_veg")
  private Boolean veg = true;

  @Column(name = "is_available")
  private Boolean available = true;

  @Column(name = "image_url")
  private String imageUrl;

  @Column(name = "created_at")
  private Instant createdAt = Instant.now();

  public Long getItemId() {
    return itemId;
  }

  public void setItemId(Long itemId) {
    this.itemId = itemId;
  }

  public Restaurant getRestaurant() {
    return restaurant;
  }

  public void setRestaurant(Restaurant restaurant) {
    this.restaurant = restaurant;
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

  public String getCategory() {
    return category;
  }

  public void setCategory(String category) {
    this.category = category;
  }

  public BigDecimal getPrice() {
    return price;
  }

  public void setPrice(BigDecimal price) {
    this.price = price;
  }

  public Boolean getVeg() {
    return veg;
  }

  public void setVeg(Boolean veg) {
    this.veg = veg;
  }

  public Boolean getAvailable() {
    return available;
  }

  public void setAvailable(Boolean available) {
    this.available = available;
  }

  public String getImageUrl() {
    return imageUrl;
  }

  public void setImageUrl(String imageUrl) {
    this.imageUrl = imageUrl;
  }

  public Instant getCreatedAt() {
    return createdAt;
  }

  public void setCreatedAt(Instant createdAt) {
    this.createdAt = createdAt;
  }
}
