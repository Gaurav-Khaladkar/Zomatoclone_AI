package com.smartfood.service;

import com.smartfood.dto.ApiMessage;
import com.smartfood.repository.DeliveryPartnerRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DeliveryService {

  private final DeliveryPartnerRepository deliveryPartnerRepository;

  public DeliveryService(DeliveryPartnerRepository deliveryPartnerRepository) {
    this.deliveryPartnerRepository = deliveryPartnerRepository;
  }

  public List<?> availablePartners() {
    return deliveryPartnerRepository.findByAvailableTrue();
  }

  public ApiMessage acceptOrder(Long orderId, Long partnerId) {
    return new ApiMessage("Delivery partner " + partnerId + " accepted order " + orderId);
  }
}
