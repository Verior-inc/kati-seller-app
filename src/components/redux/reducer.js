import {createSlice} from '@reduxjs/toolkit';

const initialState = {gig: []};

export const SellerSlice = createSlice({
  name: 'SellerSlice',
  initialState,
  reducers: {
    // increment: state => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.value += 1;
    // },
    decrement: state => {
      state.count -= 1;
    },
    addgig: (state, action) => {
      state.gig.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const {addgig} = SellerSlice.actions;

export default SellerSlice.reducer;
