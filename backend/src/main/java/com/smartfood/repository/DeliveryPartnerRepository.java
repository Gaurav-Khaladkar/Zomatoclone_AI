package com.smartfood.repository;

import com.smartfood.entity.DeliveryPartner;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DeliveryPartnerRepository extends JpaRepository<DeliveryPartner, Long> {
  List<DeliveryPartner> findByAvailableTrue();
}
