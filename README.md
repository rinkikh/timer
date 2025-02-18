# Timer Application with React

A simple timer application built with React, which allows users to create, edit, start, pause, and restart timers. The application uses Redux Toolkit for state management and react-toastify for notifications. The timer values are persisted in localStorage to ensure data is not lost between sessions.

## Features

1. **Add Timer**: Allows the user to add a new timer with a title, description, and duration.
2. **Edit Timer**: Users can modify the timer details.
3. **Start, Pause & Restart Timer**: Control timers with start, pause, and restart functionalities.
4. **Timer Progress**: Shows the countdown of each timer.
5. **Responsive Snackbars**: Display notifications based on form validation and timer actions.

## Prerequisites

Before running this project, make sure you have the following installed on your local machine:

- **Node.js**: You can download and install it from [nodejs.org](https://nodejs.org/).
- **npm**: It comes bundled with Node.js.

## Getting Started

### 1. Clone the Repository

First, clone the repository to your local machine:


git clone https://github.com/your-username/timer-application.git
cd timer-application


2. Install Dependencies
Install the required dependencies using npm:

bash
Copy
Edit
npm install
3. Run the Development Server
Start the application locally:

bash
Copy
Edit
npm start
This will run the app in development mode and open it in your default browser at http://localhost:3000.

Folder Structure
Here is the structure of the project:

bash
Copy
Edit
/src
  /components
    AddTimerModal.tsx
    EditTimerModal.tsx
    EmptyState.tsx
    TimerBackground.tsx
    TimerControls.tsx
    TimerItem.tsx
    TimerList.tsx
    TimerProgress.tsx
  /redux
    store.ts
    timerSlice.ts
  /types
    timer.ts
  App.tsx
  index.tsx
Tasks Implemented
Task 1: Timer Component
A Timer component is responsible for displaying the timer's title, description, and its current countdown. The component also includes functionality to toggle the start/pause of the timer and display the remaining time.

Task 2: Timer Controls Component
The TimerControls component provides buttons to start, pause, and restart timers. It is connected to the Redux store to update the state of the timers, and updates the UI based on the timer's status.

Task 3: Modal for Adding and Editing Timers
Two modal components, AddTimerModal and EditTimerModal, allow users to input or modify timer details. These modals use React Hook Form for form validation, and the form submission updates the Redux store accordingly.

Task 4: Persistent State with LocalStorage
The application stores timer data in localStorage. Timers are loaded from localStorage when the app initializes, and any changes to the timers (add, edit, delete, etc.) are saved back to localStorage, ensuring that timer data persists across page reloads.

Task 5: Validation Snack Bars
When a user submits an invalid form (empty fields, incorrect data), an error snackbar (notification) is shown to notify the user. The react-toastify library is used to display these snackbars. The form is only submitted if the data is valid, and the submit button is disabled until all fields are correctly filled.

Snackbars position:

For desktop devices: The snackbar appears in the top-right corner.
For mobile devices: The snackbar appears at the bottom of the screen, ensuring a responsive design.
Running the Tests
You can run the test suite using the following command:

bash
Copy
Edit
npm test
Technologies Used
React: Frontend framework for building the UI.
React-Redux: State management using Redux and Redux Toolkit.
React Hook Form: Form validation and state management.
react-toastify: For displaying toast notifications.
localStorage: For persisting the timer data across sessions.
