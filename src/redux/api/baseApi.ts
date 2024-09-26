import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';

const baseQurey = fetchBaseQuery({
    baseUrl: 'https://rental-server-drab.vercel.app/api',
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).auth.token;

        if (token) {
            headers.set('authorization', `${token}`);
        }

        return headers;
    },
})

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: baseQurey,
    endpoints: () => ({}),
    tagTypes: ['car', 'booking', 'user'],
})