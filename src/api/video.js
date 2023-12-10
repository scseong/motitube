import { baseApi } from './base';

export const getVideo = async (videoId) => {
  const response = await baseApi.get(
    `videos?part=snippet%2Cstatistics&id=${videoId}&key=${process.env.REACT_APP_ACCESS_TOKEN}`
  );
  return response.data;
};
