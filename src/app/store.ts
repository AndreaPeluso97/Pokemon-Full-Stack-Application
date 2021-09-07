import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import teamListingReducer from './containers/TeamListing/slice';
import reduxLogger from 'redux-logger';

export const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(reduxLogger),
  reducer: {
    teamListing: teamListingReducer
  },
  devTools: true
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
