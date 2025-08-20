<img width="3024" height="1654" alt="Screenshot 2025-08-21 at 4 10 13 AM" src="https://github.com/user-attachments/assets/9263f024-2f8a-4ebf-8ec4-4b60698f1ef7" />

<img width="2566" height="1466" alt="Screenshot 2025-08-21 at 4 10 53 AM" src="https://github.com/user-attachments/assets/2dce8a4a-da98-46a9-938b-baf5b8d7407d" />

<img width="2564" height="1450" alt="Screenshot 2025-08-21 at 4 11 13 AM" src="https://github.com/user-attachments/assets/99251a4c-4cc3-47a2-aa35-c852e9730fc5" />


Empower360 is a full-stack app (Node.js, Express, MySQL, React/Vite) for exploring government and welfare policies. It supports authentication, search, filtering, categories, and pagination with a responsive UI and RESTful API backend.

Features:-

Full-stack architecture (Node.js + React)

- RESTful API with Express & MySQL

- Policy search, filter & category browsing

- Pagination for scalable data handling

- User authentication (login/signup)

- Responsive React frontend with Vite

- CORS-enabled backend for frontend integration


Empower360/
├─ backend/
│  ├─ package.json  (express, mysql2, helmet, cors, morgan, dotenv)
│  ├─ .env.example
│  └─ src/
│     ├─ server.js        
│     ├─ db.js         
│     ├─ seed-runner.js    
│     ├─ middleware/errorHandler.js
│     ├─ routes/
│     │  ├─ categories.js    
│     │  └─ policies.js   
│     └─ models/
│        ├─ init.sql      
│        └─ seed.sql     
└─ frontend/
   ├─ package.json (React, Vite, React Router)
   ├─ .env.example (VITE_API_URL)
   ├─ vite.config.js
   ├─ index.html
   └─ src/
      ├─ App.jsx, main.jsx
      ├─ styles/
      │  ├─ globals.css     
      │  └─ theme.css
      ├─ components/
      │  ├─ Navbar.jsx      
      │  ├─ Footer.jsx
      │  ├─ PolicyCard.jsx  
      │  ├─ CategoryChips.jsx
      │  ├─ SearchBar.jsx
      │  └─ Rating.jsx
      └─ pages/
         ├─ Home.jsx         
         ├─ Policies.jsx     
         ├─ PolicyDetail.jsx 
         ├─ About.jsx
         ├─ Contact.jsx
         ├─ Reviews.jsx
         └─ NotFound.jsx
