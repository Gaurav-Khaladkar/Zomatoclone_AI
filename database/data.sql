USE zomato_clone;

INSERT INTO users (name, email, phone, password_hash, role) VALUES
('Gaurav Khaladkar', 'gaurav@example.com', '9876543210', '$2a$10$demoHashForProjectOnly', 'USER'),
('Restaurant Owner', 'owner@example.com', '9876543211', '$2a$10$demoHashForProjectOnly', 'RESTAURANT_OWNER'),
('Delivery Partner', 'delivery@example.com', '9876543212', '$2a$10$demoHashForProjectOnly', 'DELIVERY_PARTNER'),
('Admin User', 'admin@example.com', '9876543213', '$2a$10$demoHashForProjectOnly', 'ADMIN');

INSERT INTO restaurants (owner_id, name, description, cuisine, address, city, latitude, longitude, rating, price_for_two, is_pure_veg) VALUES
(2, 'Bombay Borough Kitchen', 'North Indian and biryani restaurant', 'North Indian,Biryani', 'Andheri West', 'Mumbai', 19.1363, 72.8277, 4.6, 550.00, FALSE),
(2, 'Green Leaf Thali', 'Pure vegetarian thali and regional meals', 'Gujarati,Thali', 'Vile Parle', 'Mumbai', 19.0968, 72.8517, 4.8, 360.00, TRUE),
(2, 'Sorriso Pizzeria', 'Italian pizzas and desserts', 'Pizza,Italian', 'Bandra', 'Mumbai', 19.0596, 72.8295, 4.4, 700.00, FALSE);

INSERT INTO menu_items (restaurant_id, name, description, category, price, is_veg, image_url) VALUES
(1, 'Lucknowi Chicken Biryani', 'Aromatic chicken biryani with raita', 'Biryani', 289.00, FALSE, NULL),
(1, 'Paneer Dum Biryani', 'Slow-cooked paneer biryani', 'Biryani', 239.00, TRUE, NULL),
(2, 'Premium Gujarati Thali', 'Complete vegetarian thali', 'Thali', 249.00, TRUE, NULL),
(2, 'Mango Shrikhand', 'Sweet mango shrikhand dessert', 'Dessert', 119.00, TRUE, NULL),
(3, 'Margherita Romano', 'Classic cheese and tomato pizza', 'Pizza', 299.00, TRUE, NULL),
(3, 'Smoked Chicken Pizza', 'Smoked chicken and cheese pizza', 'Pizza', 399.00, FALSE, NULL);

INSERT INTO coupons (code, description, discount_type, discount_value, max_discount, min_order_value, is_active) VALUES
('WELCOME50', '50 percent off for first order', 'PERCENTAGE', 50.00, 120.00, 199.00, TRUE),
('FREESHIP', 'Free delivery style discount', 'FLAT', 39.00, 39.00, 299.00, TRUE);
