#  Ticket Management System (Node.js + Express.js +  MongoDB)

 - project overview
 
A full-stack backend system for managing tickets, built with Node.js, Express, MongoDB, and JWT-based authentication. Includes role-based access control (RBAC) for Admins, Agents, and Users with full CRUD operations.

1. Features 

- Authentication using JWT
- Role-based Access Control (Admin, Agent, User)
- CRUD operations on Tickets
- MongoDB for data persistence
- RESTful API architecture
-  User password hashing


2. Setup

- Install dependencies through npm install like {express , mongoose , jsonwebtoken,bcryptjs}
- Set up enviroment variable .env inside it fill {mongoDBURL,JWT SECRET}
-  Write start and dev command and start the server


3. API Documentation 

###  Auth

## POST /api/auth/register
- Registers a new user.


## POST /api/auth/login
- Logs in and returns a JWT token.



###  Tickets

## GET /api/tickets
- Returns list of tickets 

## POST /api/tickets
- Creates a new ticket
- Requires JWT in Authorization header

#### PUT /api/tickets/:id
- Updates a ticket (Admin or Owner only)

#### DELETE /api/tickets/:id
- Deletes a ticket (Admin only)


4. User Roles and Permissions 

- Admin : Full access to all tickets and user management
- Agent : Can view and respond to tickets assigned to them
- User  : Can create/view/update their own tickets
