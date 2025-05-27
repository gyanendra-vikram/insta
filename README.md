# 📸 Instagram Clone

A full-stack Instagram clone built using **React** (frontend), **Django REST Framework** (backend), **PostgreSQL** (database), and deployed with **AWS**. Users can sign up, log in, create posts, like, comment, and view other users’ profiles—just like on Instagram.

---

## 🚀 Features

- User Authentication (Sign up / Login)
- Post creation with images
- Like and Comment system
- User profile with post history
- Feed displaying posts from all users
- Responsive UI with Tailwind CSS
- RESTful API using Django REST Framework
- Secure password hashing
- Token-based authentication (JWT or DRF TokenAuth)
- Deployed on AWS

---

## 🧱 Tech Stack

### Frontend
- React
- Tailwind CSS
- Axios
- React Router

### Backend
- Django
- Django REST Framework (DRF)
- PostgreSQL
- Django CORS Headers
- Django AllAuth / JWT (for auth)

### DevOps / Hosting
- AWS EC2 / S3
- Nginx + Gunicorn (backend)
- Docker (optional)

---

## 📂 Project Structure

instagram-clone/
├── backend/
│ ├── manage.py
│ ├── core/
│ └── api/
├── frontend/
│ ├── public/
│ └── src/
│ ├── components/
│ ├── pages/
│ └── App.jsx
├── requirements.txt
└── README.md


---

## 🛠️ Setup Instructions

### Prerequisites

- Node.js and npm
- Python 3.8+
- PostgreSQL
- AWS account (for deployment)

---

### 🔧 Backend Setup (Django + DRF)

```bash
cd backend
python3 -m venv env
source env/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

###🎨 Frontend Setup (React + Tailwind CSS)
```bash
cd frontend
npm install
npm run dev
