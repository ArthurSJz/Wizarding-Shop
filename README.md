# The Wizarding Shop ⚡

See the App! - not ready yet!

## Description

The Wizarding Shop is a specialized e-commerce platform built with React for wizards and witches. It features a full CRUD system, allowing users to browse a catalog of magical items and admins to manage the inventory of wands, robes, and potions.

## User Stories

- Browse Shop: As a user, I want to see all magical items so I can choose what to buy.

- Item Details: As a user, I want to see the specific properties of a wand or potion.

- Manage Inventory (Create): As a shopkeeper, I want to add new products via a form to keep the shop updated.

- Update Stock (Update): As a shopkeeper, I want to edit existing item details (like price or description).

- Remove Items (Delete): As a shopkeeper, I want to delete items that are no longer available.

- Navigation: As a user, I want a clear navbar to move between the shop and the admin management area.

## Backlog Functionalities

- Filtering: Filter items by category (Wands vs. Potions).

- Cart Logic: A local state-driven shopping cart to "buy" items.

- Search: A search bar to find items by name.

## Technologies Used

- React.js (Functional Components & Hooks)

- React Router Dom (Client-side routing)

- Pure CSS (Custom styling for a magical UI)

- Axios (For communication with the backend)

- JSON-Server (Mock REST API for data persistence)

## Routes

### Frontend (React)

GET / - Shop Page

GET /products - List of all magical items

GET /products/:id - Details of a single item

GET /admin/add - Form to create a new item

GET /admin/edit/:id - Form to edit an item

### Backend (JSON-Server)

GET /products - Fetch all items

POST /products - Add a new item

PUT /products/:id - Update an item

DELETE /products/:id - Delete an item

## Links

Collaborators
[Arthur Jorge](https://github.com/ArthurSJz)
[Alexandra Domareski](https://github.com/alexandra-junges)

Project
[Repository Link](https://github.com/ArthurSJz/Wizarding-Shop)

Deploy Link
[Not done yet]()

Trello
[Link to Kanban board](https://trello.com/b/FLD6P9HC/wizarding-shop)
