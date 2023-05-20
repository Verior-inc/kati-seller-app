import {configureStore} from '@reduxjs/toolkit';
import SellerSlice from './reducer';
export const store = configureStore({
  reducer: SellerSlice,
});
