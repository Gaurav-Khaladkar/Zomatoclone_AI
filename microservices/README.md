# Optional Microservices

The monolithic Spring Boot backend in `backend/` can later be split into these services:

```text
microservices/
├── auth-service/
├── order-service/
├── restaurant-service/
├── payment-service/
└── api-gateway/
```

For the current project phase, keep shared development in `backend/` and use this folder as the migration plan.
