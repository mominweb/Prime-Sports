 🏆 PrimeSport Zone

PrimeSport Zone is a full-stack web application for browsing and managing various sports equipment. It features user authentication, product listings, detailed views, and admin functionalities.


## 🧰 Technologies Used

### Frontend (React)
- React.js
- React Router
- Tailwind CSS + DaisyUI
- Firebase Authentication
- Vite
- Fetch

### Backend (Node.js + Express)
- Express.js
- MongoDB Atlas
- CORS, dotenv

---

## 📂 Project Structure

/client --> React frontend
/src
/pages
/components
/context
/server --> Express backend
/routes
/controllers



---

## 📸 Features

- 🏷️ Sports items display from MongoDB
- 🔐 Firebase Authentication (login/register)
- 🔎 Product details via dynamic routes
- 🛠️ Admin route protection with `PrivateRoute`
- 📷 Product image update functionality
- ⚙️ Backend API connected to MongoDB Atlas

---

## 🔧 Local Development

### 1. Clone the repo
```bash
git clone https://github.com/yourusername/primesport-zone.git
cd primesport-zone
2. Setup Frontend
bash
Copy
Edit
cd client
npm install
npm run dev
3. Setup Backend
bash
Copy
Edit
cd server
npm install
touch .env
Inside .env:

env
Copy
Edit
PORT=5000
SPORT_DB=yourMongoDBusername
SPORT_PASS=yourMongoDBpassword
Then run:

bash
Copy
Edit
nodemon index.js
🌍 Deployment Guide
Frontend (Vercel)
Push client folder to GitHub

Go to vercel.com

Import project from GitHub

Set root to client

Click Deploy

Backend (Render)
Push server to GitHub

Go to render.com

Create new Web Service

Connect your repo

Set build/run command:

bash
Copy
Edit
npm install && node index.js
Add environment variables

📮 API Endpoints (Backend)
http
Copy
Edit
GET    /api/products           -> All products
GET    /api/products/:id       -> Single product details
POST   /api/seed-products      -> Seed DB with sample data
PUT    /api/products/:id/image -> Update product image
👤 Author
Md. Abdul Momin
🧑‍💻 BSc in Textile Engineering