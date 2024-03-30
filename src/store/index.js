import { configureStore, createSlice } from "@reduxjs/toolkit";

const songsSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    // 'song'+'/'+addSong = 'song/addSong' action type
    addSong(state, action) {
      state.push(action.payload);
    },

    // 'song'+'/'+removeSong = 'song/removeSong' - Action
    removeSong(state, action) {
      //
    },
  },
});

const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
  },
});

// Just debugging
// console.log(store.getState()); // songs:[]

// Let's dispatch a special action | This is just for debugging purpose
/*
store.dispatch({
  type: "song/addSong",
  payload: "New Song!",
});
*/

// console.log(JSON.stringify(store.getState())); // songs:["New Song!"]

/** --- CHECKING HOW THE SLICE CREATES AN ACTION CREATOR and ACTION TYPE FOR US AUTOMATICALLY --- */

// Slices help us in 3 things:
// 1. Creates initial small state for a piece of state
// 2. Combines piece of reducer with the big reducer(app level)
// 3. Creates action creator for us (let's see this coz this is fun)

console.log(songsSlice.actions); // Returns an object which contains two action creators addSong() and removeSong(), which when called returns ACTION with type and payload

console.log(songsSlice.actions.addSong("We are here!"));
console.log(songsSlice.actions.removeSong());