# ipangram-task

# Project Setup Guide

## Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Environment Variables

Before running the project, set up the following environment variables:

### Backend (.env file in `backend` directory)

```
MONGODB_URI=your_mongodb_connection_string
```

### Frontend (.env file in `frontend` directory)

```
VITE_URL=your_backend_api_url
```

## How to Run the Project

### 1. Start the Backend Server

1. Open a terminal.
2. Navigate to the backend directory:
   ```sh
   cd backend
   ```
3. Install dependencies (only required on the first run):
   ```sh
   npm install
   ```
4. Start the backend server:
   ```sh
   npm start
   ```

### 2. Start the Frontend

1. Open another terminal.
2. Navigate to the frontend directory:
   ```sh
   cd frontend
   ```
3. Install dependencies (only required on the first run):
   ```sh
   npm install
   ```
4. Start the frontend development server:
   ```sh
   npm run dev
   ```

### 3. Open the Application

Once both servers are running, open your browser and visit:

```
http://localhost:5173/
```

_(Port 3000 is the default for many frontend frameworks like Next.js and React. If your project uses a different port, check the terminal output for the correct address.)_

## Additional Notes

- Ensure that the backend and frontend are configured to communicate correctly (e.g., API base URLs in frontend `.env` files).
- If you encounter errors, check for missing dependencies and install them using `npm install`.
- Stop the servers anytime using `Ctrl + C` in each terminal.

Happy Coding! 🚀
