package com.smartfood.entity;

import jakarta.persistence.*;

import java.math.BigDecimal;
import java.time.Instant;

@Entity
@Table(name = "payments")
public class Payment {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "payment_id")
  private Long paymentId;

  @OneToOne
  @JoinColumn(name = "order_id")
  private Order order;

  private String provider;

  @Column(name = "provider_payment_id")
  private String providerPaymentId;

  private BigDecimal amount;
  private String status = "PENDING";

  @Column(name = "paid_at")
  private Instant paidAt;

  public Long getPaymentId() {
    return paymentId;
  }

  public void setPaymentId(Long paymentId) {
    this.paymentId = paymentId;
  }

  public Order getOrder() {
    return order;
  }

  public void setOrder(Order order) {
    this.order = order;
  }

  public String getProvider() {
    return provider;
  }

  public void setProvider(String provider) {
    this.provider = provider;
  }

  public String getProviderPaymentId() {
    return providerPaymentId;
  }

  public void setProviderPaymentId(String providerPaymentId) {
    this.providerPaymentId = providerPaymentId;
  }

  public BigDecimal getAmount() {
    return amount;
  }

  public void setAmount(BigDecimal amount) {
    this.amount = amount;
  }

  public String getStatus() {
    return status;
  }

  public void setStatus(String status) {
    this.status = status;
  }

  public Instant getPaidAt() {
    return paidAt;
  }

  public void setPaidAt(Instant paidAt) {
    this.paidAt = paidAt;
  }
}
