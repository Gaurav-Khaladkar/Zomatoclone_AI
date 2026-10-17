<div align="center">

# 🍔 Zestora Food Delivery Engine

### Production-Grade Hyperlocal Food Ordering Platform with AI Recommendations & Multi-Client Architecture

[![React](https://img.shields.io/badge/Frontend-React_18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Spring Boot](https://img.shields.io/badge/Backend-Spring_Boot_3-6DB33F?style=for-the-badge&logo=springboot&logoColor=white)](https://spring.io/projects/spring-boot)
[![Android](https://img.shields.io/badge/Mobile-Android_Native-3DDC84?style=for-the-badge&logo=android&logoColor=white)](https://developer.android.com/)
[![MySQL](https://img.shields.io/badge/Database-MySQL_8-4479A1?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)

<br/>

<p align="center">
  <b>Zestora</b> is an enterprise-modeled food discovery and delivery ecosystem. It features live restaurant discovery, dynamic cart management, multi-criteria filtering, saved profile states, order dispatch tracking, and an integrated restaurant operations console.
</p>

</div>

---

## ⚡ Core Feature Modules

* **🔍 Discovery & Filter Engine**: Multi-tiered search filtering by dietary preference (Pure Veg), average delivery ETA, star rating thresholds, and price brackets.
* **🛒 Cart & Checkout State Flow**: Persistent cart management, promo code calculation, dynamic delivery fee evaluation, and automated order confirmation.
* **📱 Multi-Platform Architecture**: Web client built with vanilla/React components, native Android Java client, and RESTful Spring Boot backends.
* **📊 Merchant Operations Console**: Lightweight real-time management dashboard for tracking kitchen dispatch states, order volume, and menu inventory.
* **💾 Resilient Persistence**: Client-side localStorage persistence with graceful backend database fallbacks and relational MySQL schemas.

---

## 🏗️ System Architecture & Layout

```text
SmartFoodDeliverySystem/
├── frontend/             # High-performance responsive customer web UI
├── backend/              # Spring Boot REST API services (Auth, Catalog, Orders)
├── android-app/          # Native Android Java application client
├── database/             # Relational MySQL 8 schemas, indexes & seed fixtures
├── docs/                 # Architectural specifications & API contracts
│   ├── ZOMATO_APPLICATION_OVERVIEW.md
│   ├── PROJECT_STRUCTURE.md
│   └── API_ENDPOINTS.md
├── microservices/        # Modular service isolation prototypes (Auth, Order, Dispatch)
├── index.html            # Standalone runnable web interface
├── app.js                # Core state dispatcher & application engine
└── styles.css            # Custom CSS3 design tokens & animations
```

---

## 🚀 Quick Start Guide

### 1. Run the Web Interface (Instant Local Launch)
Open `index.html` directly in any modern browser:
```bash
# On Windows PowerShell
Start-Process index.html
```
*No build tooling required for initial frontend inspection.*

### 2. Spring Boot Backend Setup
```bash
cd backend
./mvnw clean spring-boot:run
```
*The API gateway boots on `http://localhost:8080`.*

### 3. Database Initialization
Import the relational seed data into MySQL:
```bash
mysql -u root -p < database/schema.sql
```

---

## 📡 API Endpoints Reference

| Service Domain | Method | Endpoint | Description |
| :--- | :--- | :--- | :--- |
| **Catalog** | `GET` | `/api/restaurants` | List active restaurants with rating & ETA filters |
| **Menu** | `GET` | `/api/restaurants/{id}/menu` | Retrieve categorized food menu items & add-ons |
| **Cart** | `POST` | `/api/cart/sync` | Validate prices, calculate taxes and delivery fees |
| **Orders** | `POST` | `/api/orders/place` | Generate order ID and dispatch tracking token |
| **Tracking** | `GET` | `/api/orders/{id}/status` | Real-time driver dispatch & preparation status |

---

## 👨‍💻 Author
**Gaurav Khaladkar**
* 🌐 GitHub: [@Gaurav-Khaladkar](https://github.com/Gaurav-Khaladkar)
* 💼 LinkedIn: [Gaurav Khaladkar](https://www.linkedin.com/in/gaurav-khaladkar/)
* 📧 Email: [gauravkhaldkar2001@gmail.com](mailto:gauravkhaldkar2001@gmail.com)

---

## 📄 License
This project is licensed under the [MIT License](LICENSE).