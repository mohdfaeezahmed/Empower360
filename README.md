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
