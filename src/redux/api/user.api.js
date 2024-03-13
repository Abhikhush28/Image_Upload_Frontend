import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const userApi = createApi({
  reducerPath: "userApi", // Redux Toolkit queries use the reducer path as a key to read and write state. Must be unique for every API,
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  endpoints: (builder) => ({
   createUser: builder.mutation({
    query: (formData) => ({
     url: "create",
     method: "POST",
     body:formData
    }),
   }) ,
  }),

});

export const {useCreateUserMutation} = userApi;