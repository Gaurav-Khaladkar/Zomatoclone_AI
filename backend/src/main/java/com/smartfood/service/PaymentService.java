package com.smartfood.service;

import com.smartfood.dto.ApiMessage;
import org.springframework.stereotype.Service;

@Service
public class PaymentService {

  public ApiMessage initiatePayment(Long orderId) {
    return new ApiMessage("Payment initiated for order " + orderId);
  }

  public ApiMessage verifyPayment(String providerPaymentId) {
    return new ApiMessage("Payment verified: " + providerPaymentId);
  }
}
