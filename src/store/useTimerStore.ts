import { configureStore, createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { Timer } from '../types/timer';

// Load timers from localStorage or initialize to an empty array
const loadTimersFromLocalStorage = (): Timer[] => {
  const storedTimers = localStorage.getItem('timers');
  return storedTimers ? JSON.parse(storedTimers) : [];
};

const initialState = {
  timers: loadTimersFromLocalStorage(), // Initialize state with timers from localStorage
};

const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    addTimer: (state, action) => {
      const newTimer = {
        ...action.payload,
        id: crypto.randomUUID(),
        createdAt: Date.now(),
        isRunning: false,
      };
      state.timers.push(newTimer);
      localStorage.setItem('timers', JSON.stringify(state.timers)); // Save to localStorage
    },
    deleteTimer: (state, action) => {
      state.timers = state.timers.filter((timer) => timer.id !== action.payload);
      localStorage.setItem('timers', JSON.stringify(state.timers)); // Save to localStorage
    },
    toggleTimer: (state, action) => {
      const timer = state.timers.find((timer) => timer.id === action.payload);
      if (timer) {
        timer.isRunning = !timer.isRunning;
      }
      localStorage.setItem('timers', JSON.stringify(state.timers)); // Save to localStorage
    },
    updateTimer: (state) => {
      state.timers.forEach((timer) => {
        if (timer.isRunning && timer.remainingTime > 0) {
          timer.remainingTime -= 1;
          if (timer.remainingTime === 0) {
            timer.isRunning = false; // Stop the timer when it reaches 0
          }
        }
      });
      localStorage.setItem('timers', JSON.stringify(state.timers)); // Save to localStorage
    },
    restartTimer: (state, action) => {
      const timer = state.timers.find((timer) => timer.id === action.payload);
      if (timer) {
        timer.remainingTime = timer.duration;
        timer.isRunning = false;
      }
      localStorage.setItem('timers', JSON.stringify(state.timers)); // Save to localStorage
    },
    editTimer: (state, action) => {
      const timer = state.timers.find((timer) => timer.id === action.payload.id);
      if (timer) {
        Object.assign(timer, action.payload.updates);
        timer.remainingTime = action.payload.updates.duration || timer.duration;
        timer.isRunning = false;
      }
      localStorage.setItem('timers', JSON.stringify(state.timers)); // Save to localStorage
    },
  },
});

const store = configureStore({
  reducer: timerSlice.reducer,
});

export { store };

export const {
  addTimer,
  deleteTimer,
  toggleTimer,
  updateTimer,
  restartTimer,
  editTimer,
} = timerSlice.actions;

export const useTimerStore = () => {
  const dispatch = useDispatch();
  const timers = useSelector((state: { timers: Timer[] }) => state.timers);

  return {
    timers,
    addTimer: (timer: Omit<Timer, 'id' | 'createdAt'>) => dispatch(addTimer(timer)),
    deleteTimer: (id: string) => dispatch(deleteTimer(id)),
    toggleTimer: (id: string) => dispatch(toggleTimer(id)),
    updateTimer: (id: string) => dispatch(updateTimer(id)),
    restartTimer: (id: string) => dispatch(restartTimer(id)),
    editTimer: (id: string, updates: Partial<Timer>) => dispatch(editTimer({ id, updates })),
  };
};
