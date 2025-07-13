# 📝 Full Stack To-Do List App (Next.js + Tailwind CSS + Node.js + MongoDB)

This is a beautiful, modern, and fully functional full-stack to-do list app built with **Next.js (TypeScript)** on the frontend and **Node.js + Express + MongoDB Atlas** on the backend. It supports task creation, deletion, and marking tasks as completed, strikethrough, or both.

---

## 🚀 Features

### ✅ Frontend (Next.js + Tailwind CSS)

* Add, delete, and toggle tasks
* Choose completion style: checkbox, strikethrough, or both
* Responsive UI built with Tailwind CSS and shadcn/ui components
* Clean state management with React Hooks
* Fetches data from backend via API

### 🛠️ Backend (Node.js + Express + MongoDB Atlas)

* REST API for creating, fetching, updating, and deleting tasks
* Mongoose models and controller structure
* Supports toggling `completed` and `strikethrough` independently

---

## 📂 Folder Structure

```
.
├── frontend/               # Next.js frontend
│   ├── app/
│   ├── components/
│   ├── lib/
│   ├── types/
│   ├── styles/
│   └── .env.local          # NEXT_PUBLIC_API_URL
│
└── backend/               # Node.js backend
    ├── models/
    ├── controllers/
    ├── routes/
    ├── server.js
    └── .env                # MONGO_URI, PORT
```

---

## 🧪 Local Development

### 1. Clone the repo

```bash
git clone https://github.com/your-username/todo-fullstack
cd todo-fullstack
```

### 2. Setup Backend

```bash
cd backend
npm install

# Add .env file:
MONGO_URI=your_mongodb_connection_string
PORT=5000

npm run dev
```

### 3. Setup Frontend

```bash
cd frontend
npm install

# Add .env.local file:
NEXT_PUBLIC_API_URL=http://localhost:5000/api/notes

npm run dev
```

Visit `http://localhost:3000` to see your app running.

---

## 🔧 API Endpoints

| Method | Endpoint        | Description        |
| ------ | --------------- | ------------------ |
| GET    | /api/notes      | Fetch all notes    |
| POST   | /api/notes      | Create a new note  |
| PATCH  | /api/notes/\:id | Update note status |
| DELETE | /api/notes/\:id | Delete a note      |

---

## 🎯 Roadmap / Ideas

* ✅ Toggle checkbox + strikethrough styles
* ⬜ Edit task title
* ⬜ Add due dates and reminders
* ⬜ User authentication (optional)

---

## 💡 Credits

* [Next.js](https://nextjs.org/)
* [Tailwind CSS](https://tailwindcss.com/)
* [Shadcn UI](https://ui.shadcn.com/)
* [MongoDB Atlas](https://www.mongodb.com/atlas)

---

## 📄 License

MIT License. Free to use and modify.

---

*Designed and developed by **Maaz Bakhshi**
