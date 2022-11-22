import {createSlice} from '@reduxjs/toolkit';
import {UserListItemModel} from '../Models/UserTypeModel';
import {GetAllUsersDataRequest} from './usersActions';

export interface UsersState {
  users: UserListItemModel[] | null;
  isLoading: boolean;
  error: boolean;
}

export const initialUsersState: UsersState = {
  users: null,
  isLoading: false,
  error: false,
};

//selector

export const usersReducer = createSlice({
  name: 'users',
  initialState: initialUsersState,
  reducers: {
    reset: (state: UsersState) => {
      state.users = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(GetAllUsersDataRequest.pending, state => {
        state.error = false;
        state.isLoading = true;
      })
      .addCase(GetAllUsersDataRequest.fulfilled, (state, action) => {
        state.users = action.payload;
        state.error = false;
        state.isLoading = false;
      })
      .addCase(GetAllUsersDataRequest.rejected, (state, action) => {
        state.error = true;
        state.isLoading = false;
      });
  },
});

export const {reset} = usersReducer.actions;

export default usersReducer.reducer;
