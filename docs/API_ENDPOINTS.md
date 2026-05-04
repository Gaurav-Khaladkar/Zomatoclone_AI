# REST API Endpoint Plan

Base URL:

```text
http://localhost:8080/api
```

## Authentication

| Method | Endpoint | Purpose |
| --- | --- | --- |
| POST | `/auth/register` | Register a new user |
| POST | `/auth/login` | Login and return token/session details |

## Users

| Method | Endpoint | Purpose |
| --- | --- | --- |
| GET | `/users` | List all users |
| GET | `/users/{id}` | Get user by id |

## Restaurants

| Method | Endpoint | Purpose |
| --- | --- | --- |
| GET | `/restaurants/all` | List all restaurants |
| GET | `/restaurants/{id}` | Get restaurant details |
| POST | `/restaurants` | Create restaurant |

## Menu

| Method | Endpoint | Purpose |
| --- | --- | --- |
| GET | `/menu/restaurant/{id}` | List menu items by restaurant |
| POST | `/menu` | Add menu item |

## Cart

Cart can be maintained on the frontend for the prototype. In a production system, cart data can be persisted in the backend.

| Method | Endpoint | Purpose |
| --- | --- | --- |
| POST | `/cart/add` | Add item to cart |
| GET | `/cart/view` | View active user cart |

## Orders

| Method | Endpoint | Purpose |
| --- | --- | --- |
| POST | `/orders/place` | Place a new order |
| GET | `/orders/user/{id}` | Get user order history |
| GET | `/orders/{id}` | Get order details |
| PATCH | `/orders/{id}/status` | Update order status |

## Delivery

| Method | Endpoint | Purpose |
| --- | --- | --- |
| GET | `/delivery/available` | List available delivery partners |
| POST | `/delivery/accept` | Delivery partner accepts order |
| PATCH | `/delivery/{id}/status` | Update delivery status |

## Payments

| Method | Endpoint | Purpose |
| --- | --- | --- |
| POST | `/payments/initiate` | Start payment |
| POST | `/payments/verify` | Verify payment gateway callback |

## Admin

| Method | Endpoint | Purpose |
| --- | --- | --- |
| GET | `/admin/dashboard` | Admin analytics summary |
| GET | `/admin/complaints` | View support complaints |
