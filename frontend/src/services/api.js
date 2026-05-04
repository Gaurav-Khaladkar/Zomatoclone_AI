export const API_BASE_URL = "http://localhost:8080/api";

export const restaurants = [
  {
    id: 1,
    name: "Bombay Borough Kitchen",
    cuisine: "North Indian, Biryani",
    location: "Andheri West",
    rating: 4.6,
    priceForTwo: 550,
    deliveryTime: 28,
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=900&q=80",
    menu: [
      { id: 101, name: "Lucknowi Chicken Biryani", price: 289, veg: false },
      { id: 102, name: "Paneer Dum Biryani", price: 239, veg: true }
    ]
  },
  {
    id: 2,
    name: "Green Leaf Thali",
    cuisine: "Gujarati, Thali",
    location: "Vile Parle",
    rating: 4.8,
    priceForTwo: 360,
    deliveryTime: 22,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=80",
    menu: [
      { id: 201, name: "Premium Gujarati Thali", price: 249, veg: true },
      { id: 202, name: "Mango Shrikhand", price: 119, veg: true }
    ]
  },
  {
    id: 3,
    name: "Sorriso Pizzeria",
    cuisine: "Pizza, Italian",
    location: "Bandra",
    rating: 4.4,
    priceForTwo: 700,
    deliveryTime: 34,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80",
    menu: [
      { id: 301, name: "Margherita Romano", price: 299, veg: true },
      { id: 302, name: "Smoked Chicken Pizza", price: 399, veg: false }
    ]
  }
];

export async function apiRequest(path, options = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...options.headers
    },
    ...options
  });

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`);
  }

  return response.json();
}
