package com.smartfood.controller;

import com.smartfood.dto.ApiMessage;
import com.smartfood.service.PaymentService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/payments")
@CrossOrigin(origins = "*")
public class PaymentController {

  private final PaymentService paymentService;

  public PaymentController(PaymentService paymentService) {
    this.paymentService = paymentService;
  }

  @PostMapping("/initiate")
  public ApiMessage initiate(@RequestParam Long orderId) {
    return paymentService.initiatePayment(orderId);
  }

  @PostMapping("/verify")
  public ApiMessage verify(@RequestParam String providerPaymentId) {
    return paymentService.verifyPayment(providerPaymentId);
  }
}
