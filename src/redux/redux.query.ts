import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ContactI } from "./redux.reducers";
export interface UserI {
  id?: string;
  name?: string;
  email: string;
  password: string;
  token: string;
}

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://connections-api.herokuapp.com/",
  }),
  tagTypes: ["GET", "POST"],
  endpoints: (builder) => ({
    getUser: builder.mutation<UserI, Partial<UserI>>({
      query: (userData) => ({
        url: "users/login",
        method: "POST",
        body: userData,
      }),
    }),
    createUser: builder.mutation<UserI, Partial<UserI>>({
      query: (userData) => ({
        url: "users/signup",
        method: "POST",
        body: userData,
      }),
    }),
    getUserData: builder.query<UserI, string>({
      query: (token) => ({
        url: "users/current",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    getUsersContacts: builder.query<[], string>({
      query: (token) => ({
        url: "/contacts",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    postNewContact: builder.mutation<
      ContactI,
      { contact: ContactI; token: string }
    >({
      query: ({ contact, token }) => ({
        url: "/contacts",
        method: "POST",
        body: contact,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    deleteContact: builder.mutation<ContactI, { id: string; token: string }>({
      query: ({ id, token }) => ({
        url: `contacts/${id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    logOut: builder.mutation<UserI, string>({
      query: (token) => ({
        url: "users/logout",
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});

export const {
  useGetUserMutation,
  useCreateUserMutation,
  useLogOutMutation,
  useGetUserDataQuery,
  useGetUsersContactsQuery,
  usePostNewContactMutation,
  useDeleteContactMutation,
} = userApi;
