INSERT INTO users (user_id, name, email, phone, password_hash, role, created_at) VALUES
(1, 'Demo User', 'demo@example.com', '9876543210', 'demo-password', 'USER', CURRENT_TIMESTAMP),
(2, 'Restaurant Owner', 'owner@example.com', '9876543211', 'demo-password', 'RESTAURANT_OWNER', CURRENT_TIMESTAMP);

INSERT INTO restaurants (restaurant_id, owner_id, name, description, cuisine, address, city, latitude, longitude, rating, price_for_two, is_open, is_pure_veg, created_at) VALUES
(1, 2, 'Bombay Borough Kitchen', 'North Indian and biryani restaurant', 'North Indian,Biryani', 'Andheri West', 'Mumbai', 19.1363, 72.8277, 4.6, 550.00, TRUE, FALSE, CURRENT_TIMESTAMP),
(2, 2, 'Green Leaf Thali', 'Pure vegetarian thali and regional meals', 'Gujarati,Thali', 'Vile Parle', 'Mumbai', 19.0968, 72.8517, 4.8, 360.00, TRUE, TRUE, CURRENT_TIMESTAMP);

INSERT INTO menu_items (item_id, restaurant_id, name, description, category, price, is_veg, is_available, image_url, created_at) VALUES
(1, 1, 'Lucknowi Chicken Biryani', 'Aromatic chicken biryani with raita', 'Biryani', 289.00, FALSE, TRUE, NULL, CURRENT_TIMESTAMP),
(2, 1, 'Paneer Dum Biryani', 'Slow-cooked paneer biryani', 'Biryani', 239.00, TRUE, TRUE, NULL, CURRENT_TIMESTAMP),
(3, 2, 'Premium Gujarati Thali', 'Complete vegetarian thali', 'Thali', 249.00, TRUE, TRUE, NULL, CURRENT_TIMESTAMP);
