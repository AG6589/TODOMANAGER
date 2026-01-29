# TodoManager

A simple, responsive Todo Management application built with the MERN stack (MongoDB-less, in-memory store for simplicity) and Tailwind CSS.

## Features

- Add tasks
- Mark tasks as complete
- Responsive design with Tailwind CSS
- REST API backend

## Project Structure

- `client/`: React frontend
- `server/`: Express backend

## Getting Started

### Prerequisites

- Node.js installed

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/AG6589/TODOMANAGER.git
   ```

2. Setup Backend:
   ```bash
   cd server
   npm install
   ```

3. Setup Frontend:
   ```bash
   cd client
   npm install
   ```

### Running the Application

1. Start the Backend Server:
   ```bash
   cd server
   npm start
   ```
   The API will run at `http://localhost:3000`.

2. Start the Frontend Development Server:
   ```bash
   cd client
   npm run dev
   ```
   The application will invoke Vite and generally run at `http://localhost:5173`.

## Deployment

### Frontend (Netlify)

The frontend is ready to be deployed to Netlify.

1. Connect your repository to Netlify.
2. Set the build command to `npm run build`.
3. Set the publish directory to `dist`.
4. **Important**: Set the Environment Variable `VITE_API_URL` to your deployed backend URL.

### Backend

The backend needs to be hosted on a service like Render, Railway, or Heroku.
Once deployed, grab the URL and use it to configure the Frontend.
