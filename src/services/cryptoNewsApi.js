import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
  'X-RapidAPI-Key': '8756d6c9a4msh6b8b290b0ebac50p10dc55jsn5dcec37a03d9',
  'X-RapidAPI-Host': 'cryptocurrency-news2.p.rapidapi.com',
}


const baseUrl='https://cryptocurrency-news2.p.rapidapi.com';


const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: () => createRequest('/v1/coindesk'),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;