import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';

import homePageReducer from './slice/homePageSlice';

const saga = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    home: homePageReducer
  },
  middleware: [saga]
});

//   saga.run(); (放入rootSaga)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;