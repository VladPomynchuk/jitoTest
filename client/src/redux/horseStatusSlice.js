import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isStart: false,
  horseStatusData: [],
  leaderboardData: [],
};

export const horseStatusSlice = createSlice({
  name: 'horseStatus',
  initialState: initialState,
  reducers: {
    updateLeaderboardData(state, { payload }) {
      state.leaderboardData = [...state.leaderboardData, payload];
    },
    updateHorseStatusData(state, { payload }) {
      state.horseStatusData = payload;
    },
    toggleIsStart(state) {
      state.isStart = !state.isStart;
    },
    resetData(state) {
      state.leaderboardData = [];
      state.horseStatusData = [];
    },
  },
});

export const horseStatusReducer = horseStatusSlice.reducer;

export const {
  updateLeaderboardData,
  toggleIsStart,
  updateHorseStatusData,
  resetData,
} = horseStatusSlice.actions;

// Selectors

export const getLeaderboardData = state => state.horseStatus.leaderboardData;
export const getHorseStatusData = state => state.horseStatus.horseStatusData;
export const getIsStart = state => state.horseStatus.isStart;
