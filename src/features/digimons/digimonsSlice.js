import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  IDLE, LOADING, SUCCEDED, FAILED,
} from '../../app/constants';
import DigimonService from '../../api';

const INITIAL_DIGIMONS_IDS = [7, 4, 1];

const initialState = {
  status: IDLE,
  error: null,
  initialDigimons: [],
  loadingInitialDigimons: false,
  randomDigimon: null,
  loadingRandomDigimon: false,
};

export const requestRandomDigimon = createAsyncThunk('digimons/random/fetch', async () => {
  const response = await DigimonService.getRandomDigimon();

  return response;
});

export const requestInitialDigimons = createAsyncThunk(
  'digimons/initial/fetch',
  async () => {
    const promises = INITIAL_DIGIMONS_IDS.map((id) => DigimonService.getDigimon(id));
    const responses = await Promise.all(promises);

    return responses;
  },
);

/* eslint-disable no-param-reassign */
export const digimonsSlice = createSlice({
  name: 'digimons',
  initialState,
  extraReducers: {
    [requestRandomDigimon.pending]: (state) => {
      state.status = LOADING;
      state.loadingRandomDigimon = true;
      state.randomDigimon = initialState.randomDigimon;
    },
    [requestRandomDigimon.fulfilled]: (state, action) => {
      state.status = SUCCEDED;
      state.loadingRandomDigimon = false;
      state.error = null;
      state.randomDigimon = action.payload;
    },
    [requestRandomDigimon.rejected]: (state, action) => {
      state.status = FAILED;
      state.loadingRandomDigimon = false;
      state.error = action.error;
    },
    [requestInitialDigimons.pending]: (state) => {
      state.status = LOADING;
      state.loadingInitialDigimons = true;
      state.initialDigimons = initialState.initialDigimons;
    },
    [requestInitialDigimons.fulfilled]: (state, action) => {
      state.status = SUCCEDED;
      state.loadingInitialDigimons = false;
      state.initialDigimons = action.payload;
      state.error = null;
    },
    [requestInitialDigimons.rejected]: (state, action) => {
      state.status = FAILED;
      state.loadingInitialDigimons = false;
      state.error = action.error;
    },
  },
});

/*
* Selectors
* */
export const selectInitialDigimons = (state) => state.digimons.initialDigimons;
export const selectRandomDigimon = (state) => state.digimons.randomDigimon;
export const selectIsLoadingInitial = (state) => state.digimons.loadingInitialDigimons;
export const selectIsLoadingRandom = (state) => state.digimons.loadingRandomDigimon;
export const selectError = (state) => state.digimons.error;

export default digimonsSlice.reducer;
