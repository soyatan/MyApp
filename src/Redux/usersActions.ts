import {createAsyncThunk} from '@reduxjs/toolkit';
import {getAllUsersDataService} from './usersService';

export const GetAllUsersDataRequest = createAsyncThunk(
  'users/getUsers',
  async (_, thunkAPI) => {
    try {
      const response = await getAllUsersDataService();
      return response.users;
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  },
);
