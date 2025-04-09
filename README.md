# 💸 CreditSea – Loan Portal System

CreditSea is a modern, role-based loan portal built with React, Redux, PostgreSQL, and Node.js. It enables users to apply for loans, while providing dedicated admin and verifier functionalities for managing users and processing applications.

---

## 🚀 Features

### 👤 User

- Apply for a loan
- View loan status

### 🛡️ Verifier

- Review submitted loan applications
- Approve or reject loans

### 👑 Admin

- Promote/demote users to/from admin
- View all users, verifiers, and admins in the database
- Full user management access

---

## 🛠 Tech Stack

- **Frontend:** React + TypeScript, TailwindCSS, Redux Toolkit
- **Backend:** Node.js, Express
- **Database:** PostgreSQL (hosted on Aiven)
- **Deployment:** Vercel and Render

---

## 📦 Project Structure

```
/Frontend
  /src
    /assets
    /components
    /slice
    /utils
    App.tsx
    main.tsx

/Backend
  /config
  /constants
  /controllers
  /middleware
  /routes
  /models
  /scripts
  /types
  /utils
  app.ts  
  server.js
```

---

## 🧪 Getting Started

🔗 [Backend GitHub Repository](https://github.com/atharva5924/CreditSea-Backend)

### 1. Clone the repository

```bash
git clone https://github.com/your-username/creditsea.git
cd creditsea
```

Clone the backend:
```bash
git clone https://github.com/atharva5924/CreditSea-Backend
```

### 2. Install dependencies

```bash
cd Frontend
npm install

cd ../Backend
npm install
```

### 3. Configure environment variables

Create `.env` files in both `Frontend` and `Backend` directories.

**Backend `.env`:**

```env
PORT=3000

# PostgreSQL Connection
DB_NAME=your_database_name
DB_USER=your_database_user
DB_HOST=your_database_host
DB_PORT=your_database_port
DB_PASSWORD=your_database_password

# JWT Secret
JWT_SECRET=your_jwt_secret
```

**Frontend `.env`:**

```
VITE_API_URL=http://localhost:3000
```

### 4. Run the project

```bash
# In one terminal
cd Backend
npm run dev

# In another terminal
cd Frontend
npm run dev
```

---

## 🗃️ Database

- PostgreSQL database schema includes:
  - `users` (roles: user, admin, verifier)
  - `loan_applications`
- Role-based access is enforced via middleware
- Verifiers and Admins are stored/filtered using user roles

---

## 📡 API Routes

### 🧑 Public Routes

| Method | Endpoint   | Description             |
|--------|------------|-------------------------|
| POST   | /register  | Register a new user     |
| POST   | /login     | Log in a user           |
| GET    | /logout    | Log out the session     |

---

### 👤 User Routes

| Method | Endpoint       | Description              |
|--------|----------------|--------------------------|
| GET    | /user          | Get user dashboard       |
| POST   | /user/form     | Submit loan application  |

---

### ✅ Verifier Routes

| Method | Endpoint                  | Description                       |
|--------|---------------------------|-----------------------------------|
| GET    | /verifier                 | Get verifier dashboard            |
| PUT    | /verifier/update-status   | Approve/Reject loan application   |

> 🔸 **Note**: Admins can also use `/verifier/update-status` to approve or reject applications.

---

### 🛡️ Admin Routes

| Method | Endpoint                 | Description                |
|--------|--------------------------|----------------------------|
| GET    | /admin                   | Get admin dashboard        |
| GET    | /admin/users             | View all users             |
| PUT    | /admin/users/update      | Update a user's role       |


## 📄 License

MIT License

Copyright (c) 2025 Atharva Nile

---

## 🌐 Live Demo

https://credit-sea-loan-potal-frontend-u2qg.vercel.app/

