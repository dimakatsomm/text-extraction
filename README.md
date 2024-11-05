# Text Extraction Application

## Overview

This application allows users to upload a file (PDF or image) along with their first name, last name, and date of birth. The backend processes the file to extract text and calculates the user's age based on the date of birth. The frontend provides a user-friendly interface for users to interact with the application.

## Prerequisites

- [Docker](https://www.docker.com/get-started) installed on your machine.
- [Docker Compose](https://docs.docker.com/compose/install/) installed.

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/dimakatsomm/text-extraction.git
cd text-extraction
```

### Running the Application with Docker Compose

To build and run the application using Docker Compose, execute the following command in the root directory:

```bash
docker-compose up --build
```

This command will build the Docker images for the backend and frontend services and start them.

- The **backend** service will be running on `http://localhost:5005`.
- The **frontend** service will be running on `http://localhost:3000`.

## Using the Application

1. Open your web browser and navigate to `http://localhost:3000`.
2. You will see the upload form.
3. Fill in your **first name**, **last name**, and **date of birth** (format: YYYY-MM-DD).
4. Click on **Choose File** and select a PDF or image file to upload.
5. Click on **Submit** to upload the file.
6. After processing, the results will display:
   - Your **Full Name**.
   - Your **Age** calculated from your date of birth.
   - The **Extracted Text** from the uploaded file.

## API Documentation

The backend API is documented using Swagger UI.

- Access the API documentation at `http://localhost:5005/api-docs`.

## Development

### Backend

The backend is built with **Node.js**, **TypeScript**, and **Express.js**.

#### Setup

1. Navigate to the backend directory:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

#### Running the Backend Locally

Start the server in development mode:

```bash
npm run dev
```

The backend will run on `http://localhost:5005`.

### Frontend

The frontend is built with **Next.js**, **React**, and **TypeScript**.

#### Setup

1. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

#### Running the Frontend Locally

Start the development server:

```bash
npm run dev
```

The frontend will run on `http://localhost:3000`.

## Building for Production

### Backend

Build the backend application:

```bash
cd backend
npm run build
```

### Frontend

Build the frontend application:

```bash
cd frontend
npm run build
```

## Linting and Formatting

### Backend

- **Lint code**:

  ```bash
  npm run lint
  ```

- **Automatically fix lint issues**:

  ```bash
  npm run lint:fix
  ```

### Frontend

- **Lint code**:

  ```bash
  npm run lint
  ```

## Environment Variables

The backend uses environment variables defined in a `.env` file.

- Create a `.env` file in the `backend` directory.
- Define the following variables:

  ```bash
  PORT=5005
  ```

## Dependencies

### Backend

- **Express.js**: Web framework for Node.js.
- **Multer**: Middleware for handling `multipart/form-data` (file uploads).
- **Tesseract.js**: Library for Optical Character Recognition (OCR).
- **pdf-parse**: Module to extract text from PDFs.
- **TypeDI**: Dependency Injection tool for TypeScript and Node.js.

### Frontend

- **Next.js**: React framework for server-side rendering and static site generation.
- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework.

## Notes

- Ensure Docker and Docker Compose are installed and running properly.
- Upload files should be valid PDFs or images for successful text extraction.
- The date of birth must be in the format `YYYY-MM-DD`.
