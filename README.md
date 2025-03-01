# Globetrotter Challenge Backend

This repository contains the backend for the _Globetrotter Challenge_, a single-player geography guessing game. It provides a RESTful API to serve destination data to the React frontend, ensuring a seamless and secure data flow.

## Overview

The backend is built with Node.js and Express, hosting a static dataset of over 100 destinations with clues and fun facts. It supports the frontend by delivering random destinations and a full list for option generation, adhering to the requirement of backend-driven data storage.

## Features

- **REST API Endpoints**:
  - `GET /api/destination`: Returns a single random destination object (`{ name, clues, funFacts }`).
  - `GET /api/destinations`: Returns the full array of destination objects for frontend option generation.
- **Dataset**: Stored in `destinations.json`, assumed to be AI-expanded to 100+ entries.
- **CORS**: Configured to allow requests from `http://localhost:5173` (Vite frontend).

## Technology Stack

- **Node.js**: v18.x (runtime environment).
- **Express**: 4.18.2 (web framework for API routing).
- **CORS**: 2.8.5 (enables cross-origin requests from frontend).

## Setup Instructions

### Prerequisites

Ensure you have the following installed:

- **Node.js v18.x**
- **npm v9.x**

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/globetrotter-backend.git
   cd globetrotter-backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

### Running the Server

To start the backend server:

```sh
node server.js
```

The API will be available at `http://localhost:5000`.

## API Endpoints

### 1. Get a Random Destination

- **Endpoint**: `GET /api/destination`
- **Response**:
  ```json
  {
    "name": "Paris",
    "clues": ["Famous for the Eiffel Tower", "Known as the City of Love"],
    "funFacts": ["Paris has more than 130 museums."]
  }
  ```

### 2. Get All Destinations

- **Endpoint**: `GET /api/destinations`
- **Response**:
  ```json
  [
    {
      "name": "Paris",
      "clues": ["Famous for the Eiffel Tower"],
      "funFacts": ["Paris has more than 130 museums."]
    },
    {
      "name": "Tokyo",
      "clues": ["Known for its cherry blossoms"],
      "funFacts": ["Tokyo has the busiest pedestrian crossing in the world."]
    }
  ]
  ```

## Deployment

### Local Deployment

To run locally:

```sh
node server.js
```

## Security Considerations

- Use **helmet.js** for enhanced security in production.
- Validate all incoming requests to prevent misuse.
- Limit CORS policy for known frontend origins only.

## Future Enhancements

- Convert dataset to MongoDB for scalability.
- Implement authentication for user-based game tracking.
- Add a caching layer (Redis) to improve API performance.
