import { api } from './createApi';

export const imageApi = {
  getRandomImages: async (count) => {
    try {
      console.log(api);

      const { data, status } = await api.get('/photos/random/?count=' + count);

      switch (status) {
        case 200:
          return data;
        case 400:
          throw new Error(
            'Bad Request: The request was unacceptable, often due to missing a required parameter',
          );
        case 401:
          throw new Error('Unauthorized: Invalid Access Token');
        case 403:
          throw new Error('Forbidden: Missing permissions to perform request');
        case 404:
          throw new Error('Not Found: The requested resource doesn’t exist');
        case 500:
        case 503:
          throw new Error('Something went wrong on our end');
        default:
          throw new Error('Unexpected status code:' + status);
      }
    } catch (e) {
      throw new Error(e.message);
    }
  },
};
