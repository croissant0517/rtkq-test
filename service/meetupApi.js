import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const meetupApi = createApi({
  reducerPath: "meetupApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    addMeetup: builder.mutation({
      query: (postData) => ({
        url: "new-meetup",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: postData,
      }),
    }),
  }),
});

export const { useAddMeetupMutation } = meetupApi;
