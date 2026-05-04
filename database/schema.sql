CREATE DATABASE IF NOT EXISTS zomato_clone;
USE zomato_clone;

CREATE TABLE users (
  user_id BIGINT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(120) NOT NULL,
  email VARCHAR(180) UNIQUE,
  phone VARCHAR(20) UNIQUE NOT NULL,
  password_hash VARCHAR(255),
  role ENUM('USER', 'ADMIN', 'RESTAURANT_OWNER', 'DELIVERY_PARTNER') NOT NULL DEFAULT 'USER',
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE restaurants (
  restaurant_id BIGINT PRIMARY KEY AUTO_INCREMENT,
  owner_id BIGINT,
  name VARCHAR(180) NOT NULL,
  description TEXT,
  cuisine VARCHAR(255),
  address VARCHAR(255) NOT NULL,
  city VARCHAR(100) NOT NULL,
  latitude DECIMAL(10, 7),
  longitude DECIMAL(10, 7),
  rating DECIMAL(2, 1) NOT NULL DEFAULT 0.0,
  price_for_two DECIMAL(10, 2) NOT NULL DEFAULT 0,
  is_open BOOLEAN NOT NULL DEFAULT TRUE,
  is_pure_veg BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_restaurant_owner
    FOREIGN KEY (owner_id) REFERENCES users(user_id)
);

CREATE TABLE menu_items (
  item_id BIGINT PRIMARY KEY AUTO_INCREMENT,
  restaurant_id BIGINT NOT NULL,
  name VARCHAR(180) NOT NULL,
  description TEXT,
  category VARCHAR(100),
  price DECIMAL(10, 2) NOT NULL,
  is_veg BOOLEAN NOT NULL DEFAULT TRUE,
  is_available BOOLEAN NOT NULL DEFAULT TRUE,
  image_url VARCHAR(500),
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_menu_restaurant
    FOREIGN KEY (restaurant_id) REFERENCES restaurants(restaurant_id)
    ON DELETE CASCADE
);

CREATE TABLE coupons (
  coupon_id BIGINT PRIMARY KEY AUTO_INCREMENT,
  code VARCHAR(40) UNIQUE NOT NULL,
  description VARCHAR(255),
  discount_type ENUM('FLAT', 'PERCENTAGE') NOT NULL,
  discount_value DECIMAL(10, 2) NOT NULL,
  max_discount DECIMAL(10, 2),
  min_order_value DECIMAL(10, 2) NOT NULL DEFAULT 0,
  starts_at DATETIME,
  expires_at DATETIME,
  is_active BOOLEAN NOT NULL DEFAULT TRUE
);

CREATE TABLE orders (
  order_id BIGINT PRIMARY KEY AUTO_INCREMENT,
  user_id BIGINT NOT NULL,
  restaurant_id BIGINT NOT NULL,
  coupon_id BIGINT,
  delivery_address VARCHAR(255) NOT NULL,
  subtotal DECIMAL(10, 2) NOT NULL,
  delivery_fee DECIMAL(10, 2) NOT NULL DEFAULT 0,
  tax_amount DECIMAL(10, 2) NOT NULL DEFAULT 0,
  discount_amount DECIMAL(10, 2) NOT NULL DEFAULT 0,
  total_amount DECIMAL(10, 2) NOT NULL,
  status ENUM('PLACED', 'ACCEPTED', 'PREPARING', 'PICKED_UP', 'DELIVERED', 'CANCELLED') NOT NULL DEFAULT 'PLACED',
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT fk_order_user
    FOREIGN KEY (user_id) REFERENCES users(user_id),
  CONSTRAINT fk_order_restaurant
    FOREIGN KEY (restaurant_id) REFERENCES restaurants(restaurant_id),
  CONSTRAINT fk_order_coupon
    FOREIGN KEY (coupon_id) REFERENCES coupons(coupon_id)
);

CREATE TABLE order_items (
  order_item_id BIGINT PRIMARY KEY AUTO_INCREMENT,
  order_id BIGINT NOT NULL,
  item_id BIGINT NOT NULL,
  quantity INT NOT NULL,
  unit_price DECIMAL(10, 2) NOT NULL,
  line_total DECIMAL(10, 2) NOT NULL,
  CONSTRAINT fk_order_item_order
    FOREIGN KEY (order_id) REFERENCES orders(order_id)
    ON DELETE CASCADE,
  CONSTRAINT fk_order_item_menu_item
    FOREIGN KEY (item_id) REFERENCES menu_items(item_id)
);

CREATE TABLE payments (
  payment_id BIGINT PRIMARY KEY AUTO_INCREMENT,
  order_id BIGINT NOT NULL UNIQUE,
  provider VARCHAR(60) NOT NULL,
  provider_payment_id VARCHAR(120),
  amount DECIMAL(10, 2) NOT NULL,
  status ENUM('PENDING', 'SUCCESS', 'FAILED', 'REFUNDED') NOT NULL DEFAULT 'PENDING',
  paid_at DATETIME,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_payment_order
    FOREIGN KEY (order_id) REFERENCES orders(order_id)
    ON DELETE CASCADE
);

CREATE TABLE delivery_partners (
  partner_id BIGINT PRIMARY KEY AUTO_INCREMENT,
  user_id BIGINT NOT NULL UNIQUE,
  vehicle_number VARCHAR(40),
  current_latitude DECIMAL(10, 7),
  current_longitude DECIMAL(10, 7),
  is_available BOOLEAN NOT NULL DEFAULT TRUE,
  earnings DECIMAL(10, 2) NOT NULL DEFAULT 0,
  CONSTRAINT fk_delivery_partner_user
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE deliveries (
  delivery_id BIGINT PRIMARY KEY AUTO_INCREMENT,
  order_id BIGINT NOT NULL UNIQUE,
  partner_id BIGINT,
  pickup_time DATETIME,
  delivered_time DATETIME,
  status ENUM('ASSIGNED', 'PICKED_UP', 'ON_THE_WAY', 'DELIVERED', 'FAILED') NOT NULL DEFAULT 'ASSIGNED',
  CONSTRAINT fk_delivery_order
    FOREIGN KEY (order_id) REFERENCES orders(order_id)
    ON DELETE CASCADE,
  CONSTRAINT fk_delivery_partner
    FOREIGN KEY (partner_id) REFERENCES delivery_partners(partner_id)
);

CREATE TABLE reviews (
  review_id BIGINT PRIMARY KEY AUTO_INCREMENT,
  user_id BIGINT NOT NULL,
  restaurant_id BIGINT NOT NULL,
  order_id BIGINT,
  rating INT NOT NULL CHECK (rating BETWEEN 1 AND 5),
  comment TEXT,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_review_user
    FOREIGN KEY (user_id) REFERENCES users(user_id),
  CONSTRAINT fk_review_restaurant
    FOREIGN KEY (restaurant_id) REFERENCES restaurants(restaurant_id),
  CONSTRAINT fk_review_order
    FOREIGN KEY (order_id) REFERENCES orders(order_id)
);

CREATE INDEX idx_restaurants_city ON restaurants(city);
CREATE INDEX idx_restaurants_rating ON restaurants(rating);
CREATE INDEX idx_menu_restaurant ON menu_items(restaurant_id);
CREATE INDEX idx_orders_user ON orders(user_id);
CREATE INDEX idx_orders_restaurant ON orders(restaurant_id);
CREATE INDEX idx_orders_status ON orders(status);
