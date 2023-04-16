import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

export const meetupApi = createApi({
  reducerPath: "meetupApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api" }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    addMeetup: builder.mutation({
      query: (postData) => ({
        url: "new-meetup",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: postData,
      }),
    }),
    getMeetups: builder.query({
      query: () => "meetups",
    }),
  }),
});

export const {
  useAddMeetupMutation,
  useGetMeetupsQuery,
  util: { getRunningQueriesThunk },
} = meetupApi;
