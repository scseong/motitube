import { baseApi } from './base';

export const getVideo = async (url) => {
  const response = await baseApi.get(url);
  return response.data;
};
