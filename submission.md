# Globetrotter Challenge Submission

**Candidate**: Himanshu Gupta \
**Date**: March 01, 2025 \
**Email**: [[himanshuhimanshu282@gmail.com](mailto:himanshuhimanshu282@gmail.com)]\
**Frontend Repository**: [Globetrotter Frontend](https://github.com/himanshu181749/globe-trotter-frontend)\
**Backend Repository**: [Globetrotter Backend](https://github.com/himanshu181749/globe-trotter-backend)\
**Live Frontend URL**: [Globetrotter Live](https://globetrotter-challenge-frontend.onrender.com) _(Pending Deployment)_

## Project Overview

The _Globetrotter Challenge_ is an interactive, single-player web-based geography guessing game. Players must identify destinations worldwide using cryptic clues, with limited attempts and lifelines to assist. This project showcases a full-stack implementation, featuring a React frontend and a Node.js/Express backend, ensuring a seamless, engaging user experience. It extends beyond the original requirements by incorporating creative enhancements like social sharing and strategic gameplay elements.

## Objectives

- **Deliver a fully functional web application** with a backend-driven dataset.
- **Provide an engaging and challenging gameplay experience**, including immediate feedback.
- **Enable social sharing via a "Challenge a Friend" feature** with a dynamic link and game snapshot.
- **Ensure modularity and extensibility** for future enhancements like timers and multiplayer support.

## Key Features

### **Gameplay Mechanics**

- Players receive **1-2 random clues per round** and must guess the correct destination.
- Each round presents **four multiple-choice options**.
- **Game-wide limit of 5 wrong attempts**, tracked as "Wrong Attempts Left".
- **Dynamic feedback system**:
  - Correct guesses trigger **confetti animations** and reveal a **fun fact** about the destination.
  - Incorrect guesses cause a **subtle shake animation**, but do not reveal the correct answer.
  - If all attempts are exhausted, the game ends with a **"Game Over" screen** and a reset option.

### **Lifelines (Single-Use Per Game)**

- **50:50 Lifeline**: Eliminates two incorrect options.
- **Reveal a Letter**: Displays the first letter of the correct answer.

### **Social & Engagement Features**

- **"Challenge a Friend"**: Generates a **shareable link** containing the player’s name and score.
- **Game Snapshot**: Captures a screenshot of the game state for social sharing using `html2canvas`.

### **User Interface & Experience**

- Styled using **Tailwind CSS (CDN)** for a **modern, glassmorphism-inspired UI**.
- Enhanced with **custom animations** (fade-in, shake effects, button interactions).

## Technology Stack

### **Frontend** ([Repository](https://github.com/himanshu181749/globe-trotter-frontend))

- **Framework**: React (18.2.0) with Vite (5.2.11) for optimized builds.
- **Styling**: Tailwind CSS (CDN-based) for efficiency and responsiveness.
- **Libraries**:
  - `axios` (1.7.2) - API communication.
  - `canvas-confetti` (1.9.2) - Celebration effects.
  - `html2canvas` (1.4.1) - Capturing game snapshots.
  - `react-icons` (5.0.1) - Intuitive UI icons.

### **Backend** ([Repository](https://github.com/himanshu181749/globe-trotter-backend))

- **Runtime**: Node.js (v18.x)
- **Framework**: Express (4.18.2) for lightweight API handling.
- **CORS**: Configured for cross-origin frontend requests.
- **Data Storage**: Static `destinations.json` with **100+ destinations**, curated with AI expansion.

## Project Structure

### **Frontend**

- `src/components/GamePlay.jsx` - Core game logic.
- `src/hooks/` - Custom hooks for API interaction.
- `public/` - Static assets and metadata.

### **Backend**

- `server.js` - Express server handling API requests.
- `destinations.json` - Local dataset storage.

## API Endpoints

| Method  | Endpoint            | Description                                              |
| ------- | ------------------- | -------------------------------------------------------- |
| **GET** | `/api/destination`  | Returns a random destination with clues and fun facts.   |
| **GET** | `/api/destinations` | Returns the full dataset for frontend option generation. |

## Deployment Status

- **Frontend**: Hosted on Render (**Pending final deployment**).
- **Backend**: Running locally at `http://localhost:5000` (**Deployment setup TBD**).

## Evaluation & Testing Instructions

### **Live Demo (Post Deployment)**

1. Access the frontend via the live URL.
2. Play through a few rounds, testing lifelines and score tracking.
3. Try the "Challenge a Friend" feature.

### **Local Testing**

1. Clone the frontend & backend repositories.
2. Follow the `README.md` setup in each repo.
3. Run the backend locally (`npm install && node server.js`).
4. Run the frontend locally (`npm install && npm run dev`).

## Future Enhancements

- **Timed Rounds**: Introduce a countdown per round.
- **Image-Based Clues**: Extend dataset to include image hints.
- **Multiplayer Mode**: Implement real-time gameplay via Socket.IO.

Thank you for reviewing my submission. For any clarifications, feel free to reach out at [himanshuhimanshu282@gmail.com](mailto:himanshuhimanshu282@gmail.com) or `+917992423198`
