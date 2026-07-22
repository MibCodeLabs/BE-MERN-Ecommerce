# BE-MERN-Ecommerce

Backend for an eCommerce application built with **Node.js**, **Express.js**, **TypeScript**, and **MongoDB**.

## Architecture

The project follows a layered structure:

- **Routes** define API endpoints and connect requests to controllers.
- **Controllers** handle request and response logic.
- **Services** contain business logic and interact with Mongoose models.
- **Models** define MongoDB schemas and handle data structure.
- **Validation middleware** handles request validation before reaching controllers.

Common CRUD operations are handled through reusable CRUD factories and a base CRUD service to reduce repeated code across resources.

The project also supports features like:
- Request validation
- Pagination
- Sorting
- Filtering
- Response mapping

A separate repository layer is not used currently. Mongoose models already provide the required database abstraction, so services interact with them directly for now.