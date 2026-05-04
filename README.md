# Zestora Food Delivery

A Zomato-style food ordering application built as a self-contained frontend. It includes restaurant discovery, category filters, veg filtering, delivery-time filtering, favorites, restaurant menu drawers, cart management, checkout, saved profile/address flows, order tracking, and a lightweight restaurant operations dashboard.

## Repository Structure

```text
SmartFoodDeliverySystem/
├── frontend/      # React-ready web app structure
├── backend/       # Spring Boot API structure
├── android-app/   # Optional Android Java app structure
├── database/      # MySQL schema and seed data
├── docs/          # Project report, API notes, architecture docs
├── microservices/ # Optional future service split
├── index.html     # Current runnable static prototype
├── app.js
├── styles.css
└── README.md
```

## Run

Open `index.html` in a browser. No build step is required.

## Full-Stack Run Targets

The repository now includes a full-stack project layout:

- `frontend/`: React app skeleton for the customer-facing web UI
- `backend/`: Spring Boot skeleton for REST APIs
- `android-app/`: Android Java skeleton for mobile UI
- `database/`: MySQL schema and sample seed data
- `microservices/`: optional future split into auth, order, restaurant, payment, and gateway services

## Project Docs

- [Complete project overview](docs/ZOMATO_APPLICATION_OVERVIEW.md)
- [CDAC project structure](docs/PROJECT_STRUCTURE.md)
- [REST API endpoints](docs/API_ENDPOINTS.md)
- [Simplified database schema](database/schema.sql)

## Notes

- Data is local mock data in `app.js`.
- Cart, favorites, profile, and orders persist in `localStorage`.
- The UI intentionally avoids using Zomato brand assets; it recreates the core food-delivery product experience under the Zestora name.
