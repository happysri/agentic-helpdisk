# 🛠️ Agentic Helpdesk

A simple **helpdesk system** with **React frontend** and **Express + MongoDB backend**.  
Built as an assignment project — supports authentication, ticket management, knowledge base articles, and a stub AI agent suggestion system.

---

## 🚀 Features
- 🔑 User authentication (login/register)
- 🎫 Ticket creation, listing, and detail view
- 📚 Knowledge Base (articles list + editor)
- 📝 Audit logs per ticket
- 🤖 AI Stub Agent (`stubLLM.ts`) for auto-suggestions
- ⚙️ Settings page showing API base

---

## 📂 Project Structure
agentic-helpdesk/
├── api/ # Backend (Express + MongoDB)
│ ├── src/
│ │ ├── models/ # Mongoose models
│ │ ├── routes/ # REST API routes
│ │ ├── agent/ # Stub AI logic
│ │ └── seed/ # DB seeding script
│ └── package.json
├── client/ # Frontend (React + Vite)
│ ├── src/
│ │ ├── components/ # Reusable UI
│ │ ├── pages/ # Screens
│ │ └── store/ # Zustand store
│ └── package.json
└── README.md


---

## 🛠️ Setup Instructions

### 1. Clone & Install
```bash
git clone <this-repo>
cd agentic-helpdesk

2. Backend (API)
cd api
npm install

Configure MongoDB

Use MongoDB Atlas (free cloud DB).

Create a .env file inside api/:

MONGO_URL=mongodb+srv://<username>:<password>@cluster0.mongodb.net/helpdesk
JWT_SECRET=supersecret

Seed Database
npm run seed

Run API
npm run dev


Backend will run on http://localhost:8080

3. Frontend (Client)
cd ../client
npm install
npm run dev


Frontend will run on http://localhost:5173

4. Test Login

Use the seeded users:

admin@test.com / pass123
agent@test.com / pass123
user@test.com  / pass123

🧪 API Routes

GET /healthz → check API health

POST /api/auth/login → login with email/password

GET /api/tickets → list tickets

POST /api/tickets → create ticket

GET /api/kb → list KB articles

POST /api/kb → create article

GET /api/audit/:ticketId → audit logs

📸 Screens (rough idea)

Login: Email/Password form

Tickets Dashboard: list of tickets + link to detail

Ticket Detail: ticket info + audit log + AI stub reply

Knowledge Base: list of articles

KB Editor: form to add new article

Settings: shows API base

✅ Tech Stack

Frontend: React 18, Vite, React Router, Zustand

Backend: Express, TypeScript, Mongoose, JWT

Database: MongoDB Atlas (cloud)

👤 Author

Assignment project — Agentic Helpdesk (2025)