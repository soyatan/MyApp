import {APIClient} from '../Utils/APIClient';

export const getAllUsersDataService = async () => {
  try {
    let response = await APIClient.get(`/users`);
    return response.data;
  } catch (error) {
    return error;
  }
};
