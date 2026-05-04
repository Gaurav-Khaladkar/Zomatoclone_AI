package com.smartfood.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.nio.charset.StandardCharsets;
import java.util.Base64;

@Component
public class JwtUtil {

  @Value("${app.jwt.secret}")
  private String secret;

  public String generateDemoToken(String subject) {
    String payload = subject + ":" + System.currentTimeMillis() + ":" + secret;
    return Base64.getUrlEncoder().withoutPadding()
      .encodeToString(payload.getBytes(StandardCharsets.UTF_8));
  }
}
